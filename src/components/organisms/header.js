import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
// import { css } from "@emotion/react"

const StyledHeader = styled.header`
  height: 40px;

  display: grid;
  grid-template-columns: 1fr min(${({ theme }) => theme.widths.full}, 100%) 1fr;

  background: ${({ theme }) => theme.colors.siteHeaderBg};

  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);

  > * {
    grid-column: 2;
  }

  @media (max-width: ${({ theme }) => theme.widths.main}) {
    grid-template-columns: 1fr min(${({ theme }) => theme.widths.main}, 100%) 1fr;
  }
`

const NestedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  nav {
    grid-column: 2 / -1;
    align-self: center;
    text-align: right;

    font-size: ${props => props.theme.fontSizes[1]};
  }

  nav a {
    margin-right: ${({ theme }) => theme.spacing[7]};
    padding: ${({ theme }) => theme.spacing[4]};

    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: ${({ theme }) => theme.widths.full}) {
      padding: ${({ theme }) => theme.spacing[0]};
    }
  }
`

const Logo = styled.h1`
  margin: 0;
  padding: 0 ${props => props.theme.spacing[5]};

  grid-column: 1 / span 1;
  align-self: center;

  font-size: ${props => props.theme.fontSizes[2]};
  /* font-weight: ${props => props.theme.fontWeights.bold}; */
  color: ${props => props.theme.colors.text};
`

const Header = ({ title }) => (
  <StyledHeader>
    <NestedGrid>
      <Logo>
        <Link to="/">{title}</Link>
      </Logo>
      <nav>
        <Link to="/all-posts/">모든 글</Link>
        {/* <Link to="/collections/">묶음 글</Link> */}
        <Link to="/tags">태그</Link>
      </nav>
    </NestedGrid>
  </StyledHeader>
)

export default Header
