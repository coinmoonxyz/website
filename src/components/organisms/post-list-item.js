import * as React from "react"
import { Link } from "gatsby"
// import styled from "@emotion/styled"
// import { css } from "@emotion/react"
import RoundBox from "../atoms/round-box"
import theme from "../../styles/theme"

const PostListItem = ({ post }) => {
  const title = post.frontmatter.title
  const tags = post.frontmatter.tags
  if (tags) tags.sort()

  return (
    <li key={post.fields.slug}>
      <article itemScope itemType="http://schema.org/Article">
        <RoundBox bg={theme.colors.brightgray}>
          <Link to={post.fields.slug} itemProp="url">
            <header>
              <h2>
                <span itemProp="headline">{title}</span>
              </h2>
              <p itemProp="description">
                {post.frontmatter.description || post.excerpt}
              </p>
              {post.frontmatter.date && <small>{post.frontmatter.date}</small>}
            </header>
          </Link>
        </RoundBox>
      </article>
    </li>
  )
}

export default PostListItem
