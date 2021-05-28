import * as React from "react"
import { graphql } from "gatsby"
import moment from "moment" // for date
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Kofi from "../../components/organisms/kofi"
import TagList from "../../components/organisms/tag-list"
import BlogPostNav from "../../components/organisms/blog-post-nav"
import * as S from './styles'

const Dates = ({ date, modifiedTime, updated }) => (
  <S.Dates>
    <S.Date>
      {moment(new Date(date)).format("dddd MMM Do, YYYY")}
    </S.Date>
    {updated && (
      <S.DateUpdated>
        last update: {moment(new Date(modifiedTime)).format("MMM Do")}
      </S.DateUpdated>
    )}
  </S.Dates>
)

const Header = ({ data }) => {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags
  tags.sort()
  const date = post.frontmatter.date // string
  const modifiedTime = data.allFile.edges[0].node.modifiedTime // string
  // compare publish date vs. modified date
  const updated = moment(new Date(modifiedTime)).isAfter(new Date(date))

  return (
    <S.Header>
      <TagList tags={tags} />
      <S.Title itemProp="headline">{post.frontmatter.title}</S.Title>
      <S.Description itemProp="description">
        {post.frontmatter.description}
      </S.Description>
      <Dates date={date} modifiedTime={modifiedTime} updated={updated} />
    </S.Header>
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
      <article itemScope itemType="http://schema.org/Article">
        <Header data={data} />
        <S.PostBody
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <Kofi />
      </article>
      <BlogPostNav previous={previous} next={next} />
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
