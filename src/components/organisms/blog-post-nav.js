import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const StyledList = styled.ul`
  margin: ${props => props.theme.spacing[0]};
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
`

const BlogPostNav = ({ previous, next }) => {
  return (
    <nav className="blog-post-nav">
      <StyledList>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </StyledList>
    </nav>
  )
}

export default BlogPostNav
