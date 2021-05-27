import * as React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment" // for date
import Layout from "../components/layout"
import Seo from "../components/seo"
import Kofi from "../components/organisms/kofi"
import TagList from '../components/organisms/tag-list'
import styled from "@emotion/styled"

const Header = ({ data }) => {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags
  tags.sort()
  const date = post.frontmatter.date // string
  const modifiedTime = data.allFile.edges[0].node.modifiedTime // string
  // compare publish date vs. modified date
  const updated = moment(new Date(modifiedTime)).isAfter(new Date(date))

  return (
    <header>
      <TagList tags={tags} />
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
  )
}

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
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
        <Header data={data} />
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
