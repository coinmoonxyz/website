import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostListItem from "../components/organisms/post-list-item"
import CollectionListItem from "../components/organisms/collection-list-item"
import RoundBoxItem from "../components/organisms/round-box-item"
import styled from "@emotion/styled"
// import RoundBox from '../components/atoms/round-box'

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

const OrderedList = styled.ol`
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
            <OrderedList>
              {posts.map(post => (
                <PostListItem post={post} key={post.id} />
              ))}
              <RoundBoxItem slug={"/all-posts/"} short>모든 글 보기 →</RoundBoxItem>
            </OrderedList>
          </LatestSection>
          <CollectionSection>
            <h1>글 모음</h1>
            <OrderedList>
              {collections.map(collection => (
                <CollectionListItem collection={collection} />
              ))}
              {/* <RoundBoxItem title={"모든 글 모음 보기 →"} slug={"/all-posts/"} /> */}
            </OrderedList>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 6) {
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
