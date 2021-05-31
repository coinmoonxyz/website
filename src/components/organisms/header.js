import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const StyledHeader = styled.header`
  margin-bottom: ${props => props.theme.spacing[9]};

  display: grid;
  grid-template-columns: 1fr min(${({ theme }) => theme.widths.full}, 100%) 1fr;

  > * {
    grid-column: 2;
  }

  > h1 {
    padding: 0 ${props => props.theme.spacing[5]};

    font-size: ${props => props.theme.fontSizes[3]};
    color: ${props => props.theme.colors.text};
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.widths.full}) {
    grid-template-columns: 1fr min(${({ theme }) => theme.widths.main}, 100%) 1fr;
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
