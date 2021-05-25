import React from "react"
import { Link } from "gatsby"
// import { css, jsx } from "@emotion/react"
// import styled from "@emotion/styled"
import kebabCase from "lodash/kebabCase"

// a.tag {
//   margin-bottom: var(--spacing-0);
//   margin-right: var(--spacing-2);
//   border: 1px solid var(--color-tag);
//   border-radius: var(--fontSize-2);
//   padding: var(--spacing-1) var(--spacing-2);
//   font-size: var(--fontSize-0);
//   color: var(--color-text);
//   text-decoration: none;
// }

// a.tag:hover {
//   background: var(--color-logo-light);
// }

const TagItem = props => (
  <li>
    <Link to={`/tag/${kebabCase(props.tag)}/`} className="tag">
      {props.tag}
    </Link>
  </li>
)

export default TagItem
