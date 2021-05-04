import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `“${tag}” 태그로 ${totalCount}건이 검색되었습니다.`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={tag} description={`${tag} 검색 결과`} />

      <h1>{tagHeader}</h1>
      <p>
        <Link to="/">메인 페이지로 돌아가기</Link>
      </p>
      <Link to="/tags">모든 태그 보기</Link>

      <ul>
        {edges.map(({ node }) => {
          const { title, description } = node.frontmatter
          const slug = node.fields.slug
          return (
            <li key={slug}>
              <Link to={slug}>
                {title} - {description}
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`
