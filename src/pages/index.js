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

  @media (max-width: ${({ theme }) => theme.widths.main}) {
    grid-template-columns: 1fr min(${({ theme }) => theme.widths.main}, 100%) 1fr;
  }
`

const WrapperGrid = styled.div`
  padding: 0 ${props => props.theme.spacing[5]};

  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-gap: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.widths.main}) {
    grid-template-columns: 100%;
  }
`

const LatestSection = styled.section`
  grid-column: 1;
  grid-row: 1;

  @media (max-width: ${({ theme }) => theme.widths.main}) {
    grid-row: 1;
  }
`

const CollectionSection = styled.section`
  grid-column: 2;
  grid-row: 1;

  @media (max-width: ${({ theme }) => theme.widths.main}) {
    grid-column: 1;
    grid-row: 2;
  }
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
        <WrapperGrid>
          <LatestSection>
            <h1>최신 글</h1>
            <PostList>
              {posts.map(post => (
                <PostListItem post={post} key={post.id} />
              ))}
            </PostList>
          </LatestSection>
          <CollectionSection>
            <h1>글 모음</h1>
            <CollectionBox collection={collections[0]} />
            <CollectionBox collection={collections[1]} />
          </CollectionSection>
        </WrapperGrid>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 8) {
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
        }
      }
    }
    allCollectionsYaml {
      nodes {
        title
        subtitle
        slug
        urls
        featured
      }
    }
  }
`
