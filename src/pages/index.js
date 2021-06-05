import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LatestSection from "../components/organisms/latest-section"
import CollectionSection from '../components/organisms/collection-section'
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

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  const collections = data.allCollectionsYaml.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="코인 가이드" />
      <Grid>
        <WrapperGrid>
          <LatestSection posts={posts} />
          <CollectionSection collections={collections} />
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
