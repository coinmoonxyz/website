import * as React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
// import { css } from "@emotion/react"

const Article = styled.article`
  margin-bottom: ${props => props.theme.spacing[7]};

  header {
    margin-bottom: ${props => props.theme.spacing[4]};
  }

  h2 {
    margin-bottom: ${props => props.theme.spacing[2]};
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
        <header>
          {/* {tags && <TagList tags={tags} fontSize={0} />} */}
          <h2>
            <Link to={post.fields.slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h2>
          <p itemProp="description">
            {post.frontmatter.description || post.excerpt}
          </p>
          <small>{post.frontmatter.date}</small>
        </header>
      </Article>
    </li>
  )
}

export default PostListItem
