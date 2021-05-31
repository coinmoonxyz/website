import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import moment from "moment" // for date
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Kofi from "../../components/organisms/kofi"
import TagList from "../../components/organisms/tag-list"
import BlogPostNav from "../../components/organisms/blog-post-nav"
import BlogPostToc from "../../components/organisms/blog-post-toc"
import Divider from "../../components/atoms/divider"
import styled from "@emotion/styled"
import * as S from "./styles"

const Dates = ({ date, modifiedTime, updated }) => (
  <S.Dates>
    <S.Date>{moment(new Date(date)).format("dddd MMM Do, YYYY")}</S.Date>
    {updated && (
      <S.DateUpdated>
        last update: {moment(new Date(modifiedTime)).format("MMM Do")}
      </S.DateUpdated>
    )}
  </S.Dates>
)

const Header = ({ data }) => {
  const post = data.mdx
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
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  console.log(post.tableOfContents.items)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <S.ArticleGrid itemScope itemType="http://schema.org/Article">
        <Header data={data} />
        {post.tableOfContents.items !== undefined && <BlogPostToc toc={post.tableOfContents} />}
        <S.PostBody itemProp="articleBody">
          <MDXRenderer>{post.body}</MDXRenderer>
          <Divider />
        </S.PostBody>
        <Kofi />
      </S.ArticleGrid>
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
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        tags
      }
      tableOfContents(maxDepth: 2)
    }

    allFile(filter: { childMdx: { id: { eq: $id } } }) {
      edges {
        node {
          childMdx {
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

    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
