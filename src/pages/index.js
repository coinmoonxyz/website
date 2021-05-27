import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TagList from "../components/organisms/tag-list"
import styled from "@emotion/styled"

const PostList = styled.ol`
  list-style: none;
`

const Article = styled.article`
  margin-bottom: ${props => props.theme.spacing[7]};
  margin-top: ${props => props.theme.spacing[7]};

  header {
    margin-bottom: ${props => props.theme.spacing[4]};
  }

  h2 {
    margin-bottom: ${props => props.theme.spacing[2]};
    margin-top: ${props => props.theme.spacing[0]};
    font-size: ${props => props.theme.fontSizes[4]};
    font-weight: ${props => props.theme.fontWeights.regular};
    color: ${props => props.theme.colors.black};
  }

  p {
    margin: 0;
    margin-bottom: ${props => props.theme.spacing[2]};
  }

`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="코인 가이드" />
      <PostList>
        {posts.map(post => {
          const title = post.frontmatter.title
          const tags = post.frontmatter.tags
          tags.sort()

          return (
            <li key={post.fields.slug}>
              <Article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <TagList tags={tags} />
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                  <small>{post.frontmatter.date}</small>
                </header>
              </Article>
            </li>
          )
        })}
      </PostList>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
