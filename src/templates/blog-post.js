import * as React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment" // for date
import Layout from "../components/layout"
import Seo from "../components/seo"
import TagItem from "../components/molecules/tag-item"
import Kofi from '../components/organisms/kofi'

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags
  tags.sort()
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  const date = post.frontmatter.date // string
  const modifiedTime = data.allFile.edges[0].node.modifiedTime // string
  // compare publish date vs. modified date: returns true if updated date is different from published
  const updated = moment(new Date(modifiedTime)).isAfter(new Date(date))

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
            {tags.map(tag => (
              <TagItem key={tag} tag={tag} />
            ))}
          </ul>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <h2
            className="description"
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description,
            }}
            itemProp="description"
          />
          <div className="dates">
            <div className="date">
              {moment(new Date(date)).format("dddd MMM Do, YYYY")}
            </div>
            {updated && (
              <div className="date-updated">
                last update: {moment(new Date(modifiedTime)).format("MMM Do")}
              </div>
            )}
          </div>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <Kofi />
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
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
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
        author {
          id
          description
        }
        tags
      }
    }

    allFile(filter: { childMarkdownRemark: { id: { eq: $id } } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              date
            }
          }
          changeTime
          modifiedTime(formatString: "MMMM DD, YYYY")
        }
      }
    }

    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
