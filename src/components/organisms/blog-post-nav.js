import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = styled.nav`
  margin-bottom: ${props => props.theme.spacing[9]};

  display: grid;
  grid-template-columns: 1fr min(${({ theme }) => theme.widths.full}, 100%) 1fr;

  > * {
    grid-column: 2;
  }

  @media (max-width: ${({ theme }) => theme.widths.full}) {
    grid-template-columns: 1fr min(${({ theme }) => theme.widths.main}, 100%) 1fr;
  }
`

const StyledList = styled.ul`
  margin: ${props => props.theme.spacing[0]};
  padding: 0 ${props => props.theme.spacing[5]};

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
`

const BlogPostNav = ({ previous, next }) => {
  return (
    <Nav>
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
    </Nav>
  )
}

export default BlogPostNav
