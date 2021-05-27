import * as React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "@emotion/react"
import GlobalStyle from "../styles/global-style"
import theme from "../styles/theme"
import Footer from "./footer"
import Consent from "./organisms/consent"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  margin: ${props => props.theme.spacing[0]} auto;
  max-width: 42rem; // --maxWidth-2xl
  padding: ${props => props.theme.spacing[8]} ${props => props.theme.spacing[5]};

  > header {
    margin-bottom: ${props => props.theme.spacing[9]};

    > h1 {
      font-size: ${props => props.theme.fontSizes[3]};
      color: ${props => props.theme.colors.text};
      margin: 0;
    }
  }
`

const Layout = ({ location, title, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <header>
          <h1>
            <Link to="/">{title}</Link>
          </h1>
        </header>
        <main>{children}</main>
        <Footer />
        <Consent location={location} />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
