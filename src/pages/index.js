import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostListItem from "../components/organisms/post-list-item"
import CollectionBox from "../components/organisms/collection-box"
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
`

const PostList = styled.ol`
  list-style: none;
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  const collections = data.allCollectionsYaml.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="코인 가이드" />
      <Grid>
        <Wrapper>
          {/* <CollectionBox collection={collections[0]} gridColumn="1 / 2" />
          <CollectionBox collection={collections[1]} gridColumn="1 / 2" /> */}
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
    allCollectionsYaml {
      nodes {
        name
        description
        slug
        urls
        featured
      }
    }
  }
`
