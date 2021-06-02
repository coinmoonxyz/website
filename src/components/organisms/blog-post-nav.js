import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import RoundBoxItem from "./round-box-item"

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
  justify-content: space-between;
  gap: 0 ${({ theme }) => theme.spacing[6]};

  list-style: none;

  li {
    display: flex;
  }

  @media (max-width: ${({ theme }) => theme.widths.main}) {
    flex-wrap: wrap;

    li {
      flex: 1 1 auto;
    }
  }
`

const BlogPostNav = ({ previous, next }) => {
  return (
    <Nav>
      <StyledList>
        <li>
          {previous && (
            <RoundBoxItem slug={previous.fields.slug} short rel="prev">
              ← 이전 글: {previous.frontmatter.title}{" "}
            </RoundBoxItem>
          )}
        </li>
        <li style={{textAlign: "right"}}>
          {next && (
            <RoundBoxItem slug={next.fields.slug} short rel="next">
              다음 글: {next.frontmatter.title} →
            </RoundBoxItem>
          )}
        </li>
      </StyledList>
    </Nav>
  )
}

export default BlogPostNav
