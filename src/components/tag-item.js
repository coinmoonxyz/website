import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import { space, layout, color } from "styled-system"

const ListItem = styled.li`
  ${space}
  ${layout}
  ${color}
`

const TagItem = props => (
  <ListItem>
    <Link
      to={`/tag/${kebabCase(props.tag)}/`}
      css={css`
        margin-bottom: var(--spacing-0);
        margin-right: var(--spacing-2);
        border: 1px solid var(--color-tag);
        border-radius: var(--fontSize-2);
        padding: var(--spacing-1) var(--spacing-2);
        font-size: var(--fontSize-0);
        color: var(--color-text);
        text-decoration: none;

        &:hover {
          background: var(--color-logo-light);
          text-decoration: none;
        }
      `}
    >
      {props.tag} {props.count}
    </Link>
  </ListItem>
)

export default TagItem
