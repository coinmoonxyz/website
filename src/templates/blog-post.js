import * as React from "react"
import { Link, graphql } from "gatsby"
// Utilities
import kebabCase from "lodash/kebabCase"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import Bio from '../components/bio'

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags
  tags.sort()
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <ul className="tags">
            {tags.map(tag => {
              return (
                <li key={tag} className="tag">
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              )
            })}
          </ul>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p
            className="description"
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description,
            }}
            itemProp="description"
          />
          <p className="date">{post.frontmatter.date}</p>
          {/* <Bio author={post.frontmatter.author} /> */}
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <div className="kofi" style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "1rem" }}>
            블로그 후원은 아래 링크를 통해서 가능합니다. 감사합니다!
          </p>
          <a
            href="https://ko-fi.com/V7V74G7ID"
            target="_blank"
            rel="noreferrer"
          >
            <img
              height="36"
              style={{ border: 0, height: 36 }}
              src="https://cdn.ko-fi.com/cdn/kofi4.png?v=2"
              border="0"
              alt="Buy Me a Coffee at ko-fi.com"
            />
          </a>
        </div>
        <footer>{/* <Bio /> */}</footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.frontmatter.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.frontmatter.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        slug
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        slug
      }
    }
  }
`
