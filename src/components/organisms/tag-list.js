import React from "react"
import TagItem from "../molecules/tag-item"
import styled from "@emotion/styled"

const StyledTagList = styled.ul`
  margin-bottom: ${props => props.theme.spacing[4]};
  padding: 0;
  list-style-type: none;
  li {
    display: inline-block;
  }
`

const TagList = ({ tags, fontSize }) => (
  <StyledTagList>
    {tags.map(tag => (
      <TagItem key={tag} tag={tag} fontSize={fontSize}/>
    ))}
  </StyledTagList>
)

export default TagList
