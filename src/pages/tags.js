import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import TagItem from "../components/molecules/tag-item"

// can't reuse TagList organism component because of different graphql data structure
const TagList = styled.ul`
  margin-bottom: ${props => props.theme.spacing[4]};
  padding: 0;
  list-style-type: none;

  li {
    margin-bottom: ${props => props.theme.spacing[2]};
    display: inline-block;
  }
`

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <Layout location={location} title={title}>
    <Seo title="모든 태그 보기" />
    <div className="all-tags">
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
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
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
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
