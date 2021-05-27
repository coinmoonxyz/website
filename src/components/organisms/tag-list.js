import React from "react"
import TagItem from "../molecules/tag-item"
import styled from "@emotion/styled"

const StyledTagList = styled.ul`
  margin-bottom: ${props => props.theme.spacing[4]};
  list-style-type: none;
  li {
    display: inline-block;
  }
`

const TagList = ({ tags }) => (
  <StyledTagList>
    {tags.map(tag => (
      <TagItem key={tag} tag={tag} />
    ))}
  </StyledTagList>
)

export default TagList
