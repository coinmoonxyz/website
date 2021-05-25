import * as React from "react"
import { Link } from "gatsby"
// import { useLocation } from "@reach/router"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import CookieConsent from "react-cookie-consent" // getCookieConsentValue, // Cookies,
import { ThemeProvider } from "@emotion/react"
import theme from "../themes/theme"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  // console.log(getCookieConsentValue()) // not working

  const header = (
    <h1 className="main-heading">
      <Link to="/">{title}</Link>
    </h1>
  )

  return (
    <ThemeProvider theme={theme}>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
        <Footer />

        <CookieConsent
          location="bottom"
          buttonText="I understand"
          // enableDeclineButton
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics"
          containerClasses="consent"
          buttonClasses="btn accept"
          declineButtonClasses="btn decline"
          contentClasses="text"
          // disableButtonStyles
          buttonStyle={{
            borderRadius: "20px",
            margin: "0 15px 20px 15px",
          }}
          declineButtonStyle={{
            borderRadius: "20px",
            background: "#111",
            margin: "0 10px 20px 15px",
          }}
          onAccept={() => {
            initializeAndTrack(location)
          }}
          onDecline={() => {
            window[`ga-disable-UA-195886234-1`] = false
          }}
        >
          We use cookies to improve user experience, and analyze website
          traffic. For these reasons, we may share your site usage data with our
          analytics partners. By continuing to use our website, you consent
          their usage.
        </CookieConsent>
      </div>
    </ThemeProvider>
  )
}

export default Layout
