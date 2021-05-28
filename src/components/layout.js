import * as React from "react"
import { ThemeProvider } from "@emotion/react"
import GlobalStyle from "../styles/global-style"
import theme from "../styles/theme"
import Header from './organisms/header'
import Footer from "./footer"
import Consent from "./organisms/consent"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  margin: ${props => props.theme.spacing[0]} auto;
  max-width: 42rem; // --maxWidth-2xl
  padding: ${props => props.theme.spacing[4]} ${props => props.theme.spacing[5]};
`

const Layout = ({ location, title, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header title={title} />
        <main>{children}</main>
        <Footer />
        <Consent location={location} />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
