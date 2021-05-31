import * as React from "react"
import { ThemeProvider } from "@emotion/react"
import GlobalStyle from "../styles/global-style"
import theme from "../styles/theme"
import Header from "./organisms/header"
import Footer from "./organisms/footer"
import Consent from "./organisms/consent"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  margin: auto;
  min-width: 280px;
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
