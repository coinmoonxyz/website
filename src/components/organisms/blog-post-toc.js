import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Aside = styled.aside`
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  grid-column: 2;
  grid-row: 2;
  position: sticky;
  top: ${({ theme }) => theme.spacing[7]};
  align-self: start;

  h2 {
    margin-top: 0;
    font-size: ${({ theme }) => theme.fontSizes[2]};
  }

  li {
    margin: ${({ theme }) => theme.spacing[3]} 0;
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: ${({ theme }) => theme.lineHeights.normal};
  }

  @media (max-width: ${({ theme }) => theme.widths.full}) {
    display: none;
  }
`

const List = styled.ul`
  list-style-type: none;

  li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
`

const BlogPostToc = ({ toc }) => {
  return (
    <Aside
      css={css`
        grid-column: 2; // i need this to override * in blog template style
      `}
    >
      <h2>목차</h2>
      <List>
        {toc.items.map(item => (
          <li>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </List>
    </Aside>
  )
}

export default BlogPostToc
