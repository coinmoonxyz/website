import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostListItem from "../components/organisms/post-list-item"
import Divider from "../components/atoms/divider"
import styled from "@emotion/styled"

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
  const { name, description, urls } = data.allCollectionsYaml.edges[0].node

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={"PAGE TITLE"} description={`DESCRIPTION`} />

      <Grid>
        <Wrapper>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>
            <Link to="/">메인 페이지로 돌아가기</Link>
          </p>
          <Divider />
          <PostList>
            {urls.map(url => {
              return (
                <li key={url}>
                  <article itemScope itemType="http://schema.org/Article">
                    {/* <Link to={post.fields.slug} itemProp="url">
                      <header>
                        <h2>
                          <span itemProp="headline">{title}</span>
                        </h2>
                        <p itemProp="description">
                          {post.frontmatter.description || post.excerpt}
                        </p>
                        <small>{post.frontmatter.date}</small>
                      </header>
                    </Link> */}
                  </article>
                </li>
              )
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
          name
          description
          urls
        }
      }
    }
  }
`
