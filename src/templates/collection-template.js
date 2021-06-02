import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostListItem from "../components/organisms/post-list-item"
import Divider from "../components/atoms/divider"
import styled from "@emotion/styled"

/**
 * filter by collection urls to get the post data I need.
 * the current method may be too slow as it has to compare the whole MDX array.
 * if there's a way to filter within GraphQL query, that might be better in the future.
 */

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

const CollectionTemplate = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { title, subtitle, description, urls } = data.allCollectionsYaml.edges[0].node

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={title} description={subtitle} />

      <Grid>
        <Wrapper>
          <h1>{title} 글 모음</h1>
          <p>{description}</p>
          <p>
            <Link to="/">메인 페이지로 돌아가기</Link>
          </p>
          <Divider />
          <PostList>
            {urls.map(url => {
              const post = data.allMdx.nodes.filter(
                ({ fields: { slug } }) => slug === url
              )[0]

              return <PostListItem post={post} key={post.id} />
            })}
          </PostList>
        </Wrapper>
      </Grid>
    </Layout>
  )
}

export default CollectionTemplate

export const pageQuery = graphql`
  query($slug: String) {
    site {
      siteMetadata {
        title
      }
    }

    allCollectionsYaml(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          subtitle
          description
          urls
        }
      }
    }

    allMdx(sort: { fields: [frontmatter___date], order: ASC }, limit: 1000) {
      nodes {
        frontmatter {
          title
          description
        }
        id
        excerpt
        fields {
          slug
        }
      }
    }
  }
`
