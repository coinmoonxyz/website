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
  /* padding: ${props => props.theme.spacing[4]} ${props => props.theme.spacing[5]}; */
  min-width: 320px;
  /* max-width: ${({ theme }) => theme.widths.full}; */

  /* outline: 1px solid red; */

  @media(max-width: ${({theme})=>theme.widths.full}) {
    /* max-width: ${({ theme }) => theme.widths.main}; */
  }
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
