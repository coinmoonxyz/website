import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostListItem from "../components/organisms/post-list-item"
import styled from "@emotion/styled"

const Grid = styled.div`
  padding-top: ${props => props.theme.spacing[5]};
  
  display: grid;
  grid-template-columns: 1fr min(${({ theme }) => theme.widths.full}, 100%) 1fr;

  > * {
    grid-column: 2;
  }

  @media (max-width: ${({ theme }) => theme.widths.full}) {
    grid-template-columns: 1fr min(${({ theme }) => theme.widths.main}, 100%) 1fr;
  }
`

const Wrapper = styled.div`
  padding: 0 ${props => props.theme.spacing[5]};

  h1 {
    margin-top: 0;
  }

  > p {
    margin-bottom: ${({ theme }) => theme.spacing[7]};
  }
`

const PostList = styled.ol`
  list-style: none;
`

const AllPosts = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="코인 가이드" />
      <Grid>
        <Wrapper>
          <h1>모든 글 보기</h1>
          <p>
            <Link to="/">메인 페이지로 돌아가기</Link>
          </p>
          <PostList>
            {posts.map(post => (
              <PostListItem post={post} key={post.id} />
            ))}
          </PostList>
        </Wrapper>
      </Grid>
    </Layout>
  )
}

export default AllPosts

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
