import * as React from "react"
import { Link, graphql } from "gatsby"
// Utilities
import kebabCase from "lodash/kebabCase"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="코인 가이드" />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title
          const tags = post.frontmatter.tags
          tags.sort()

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <ul className="tags">
                    {tags.map(tag => {
                      return (
                        <Link
                          key={tag}
                          className="tag"
                          to={`/tags/${kebabCase(tag)}/`}
                        >
                          <li>{tag}</li>
                        </Link>
                      )
                    })}
                  </ul>
                  <h2>
                    <Link to={post.frontmatter.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                  <small>{post.frontmatter.date}</small>
                </header>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug_old
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          slug
          author
          tags
        }
      }
    }
  }
`
