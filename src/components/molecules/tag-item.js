import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import styled from "@emotion/styled"

const ListItem = styled.li`
  a {
    margin-bottom: ${props => props.theme.spacing[0]};
    margin-right: ${props => props.theme.spacing[2]};
    border: 1px solid ${props => props.theme.colors.tag};
    border-radius: ${props => props.theme.fontSizes[2]};
    padding: ${props => props.theme.spacing[1]} ${props => props.theme.spacing[2]};
    font-size: ${props => props.theme.fontSizes[props.fontSize]};
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    &:hover {
      background: ${props => props.theme.colors.logoLight};
    }
  }
`

const TagItem = props => (
  <ListItem fontSize={props.fontSize}>
    <Link to={`/tag/${kebabCase(props.tag)}/`}>
      {props.tag} {props.count}
    </Link>
  </ListItem>
)

export default TagItem
