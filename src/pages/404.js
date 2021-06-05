import * as React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LatestSection from "../components/organisms/latest-section"
import CollectionSection from "../components/organisms/collection-section"

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

const Wrapper = styled.div`
  padding: 0 ${props => props.theme.spacing[5]};

  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-gap: ${({ theme }) => theme.spacing[8]};

  h1 {
    margin-top: 0;
  }

  > p {
    margin-bottom: ${({ theme }) => theme.spacing[7]};
  }

  @media (max-width: ${({ theme }) => theme.widths.main}) {
    grid-template-columns: 100%;
  }
`

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.nodes
  const collections = data.allCollectionsYaml.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <Grid>
        <Wrapper>
          {/* <h1>404: 페이지를 찾을 수 없습니다.</h1> */}
          <LatestSection posts={posts} />
          <CollectionSection collections={collections} />
        </Wrapper>
      </Grid>
    </Layout>
  )
}

export default NotFoundPage

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