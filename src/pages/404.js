import * as React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Grid = styled.div`
  padding-top: ${props => props.theme.spacing[5]};

  display: grid;
  grid-template-columns: 1fr min(${({ theme }) => theme.widths.main}, 100%) ${({
      theme,
    }) => theme.widths.aside} 1fr;

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

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <Grid>
        <Wrapper>
          <h1>404: 페이지를 찾을 수 없습니다.</h1>
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
  }
`
