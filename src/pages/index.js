import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostListItem from "../components/organisms/post-list-item"
import styled from "@emotion/styled"

const PostList = styled.ol`
  list-style: none;
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="코인 가이드" />
      <PostList>
        {posts.map(post => (
          <PostListItem post={post} key={post.id} />
        ))}
      </PostList>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
