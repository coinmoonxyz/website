import * as React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
// import { css } from "@emotion/react"

const Article = styled.article`
  margin-bottom: ${props => props.theme.spacing[7]};

  /* border: 1px solid ${({ theme }) => theme.colors.accent}; */
  border-radius: ${({ theme }) => theme.spacing[3]};

  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.4s;

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  header {
    /* margin-bottom: ${props => props.theme.spacing[4]}; */
    padding: ${({ theme }) => theme.spacing[6]}
      ${({ theme }) => theme.spacing[7]};
  }

  h2 {
    margin-bottom: ${props => props.theme.spacing[1]};
    margin-top: ${props => props.theme.spacing[0]};
    font-size: ${props => props.theme.fontSizes[3]};
    font-weight: ${props => props.theme.fontWeights.regular};
    color: ${props => props.theme.colors.black};
  }

  p {
    margin: ${props => props.theme.spacing[0]};
  }
`

const PostListItem = ({ post }) => {
  const title = post.frontmatter.title
  const tags = post.frontmatter.tags
  if (tags) tags.sort()

  return (
    <li key={post.fields.slug}>
      <Article itemScope itemType="http://schema.org/Article">
        <Link to={post.fields.slug} itemProp="url">
          <header>
            <h2>
              <span itemProp="headline">{title}</span>
            </h2>
            <p itemProp="description">
              {post.frontmatter.description || post.excerpt}
            </p>
            <small>{post.frontmatter.date}</small>
          </header>
        </Link>
      </Article>
    </li>
  )
}

export default PostListItem
