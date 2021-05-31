import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostListItem from "../components/organisms/post-list-item"
import Divider from "../components/atoms/divider"

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
`

const PostList = styled.ol`
  list-style: none;
`

const Tags = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `“${tag}” 태그로 ${totalCount}건이 검색되었습니다.`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={tag} description={`${tag} 검색 결과`} />

      <Grid>
        <Wrapper>
          <h1>{tagHeader}</h1>
          <p>
            <Link to="/">메인 페이지로 돌아가기</Link>
          </p>
          <Link to="/tags">모든 태그 보기</Link>
          <Divider />
          <PostList>
            {edges.map(({ node }) => {
              return <PostListItem post={node} />
            })}
          </PostList>
        </Wrapper>
      </Grid>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
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
    allMdx(
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
            date(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`
