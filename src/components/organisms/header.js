import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const StyledHeader = styled.header`
  margin-bottom: ${props => props.theme.spacing[9]};

  > h1 {
    font-size: ${props => props.theme.fontSizes[3]};
    color: ${props => props.theme.colors.text};
    margin: 0;
  }
`

const Header = ({ title }) => (
  <StyledHeader>
    <h1>
      <Link to="/">{title}</Link>
    </h1>
  </StyledHeader>
)

export default Header
