import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import TagItem from "../components/molecules/tag-item"

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

// can't reuse TagList organism component because of different graphql data structure
const TagList = styled.ul`
  margin-top: ${props => props.theme.spacing[7]};
  margin-bottom: ${props => props.theme.spacing[4]};
  padding: 0;
  list-style-type: none;
  font-size: ${props => props.theme.fontSizes[2]};

  li {
    margin-bottom: ${props => props.theme.spacing[6]};
    display: inline-block;
  }
`

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <Layout location={location} title={title}>
    <Seo title="모든 태그 보기" />
    <Grid>
      <Wrapper>
        <h1>모든 태그 보기</h1>
        <p>
          <Link to="/">메인 페이지로 돌아가기</Link>
        </p>
        <TagList>
          {group.map(tag => (
            <TagItem
              key={tag.fieldValue}
              tag={tag.fieldValue}
              count={tag.totalCount}
            />
          ))}
        </TagList>
      </Wrapper>
    </Grid>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
