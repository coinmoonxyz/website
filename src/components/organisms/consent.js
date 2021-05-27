import * as React from "react"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import CookieConsent from "react-cookie-consent" // getCookieConsentValue
import styled from '@emotion/styled'

const Text = styled.p`
  font-size: ${props=>props.theme.fontSizes[1]};
`

const Consent = props => {
  const location = props.location
  // console.log(getCookieConsentValue()) // not working
  
  return (
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
      <Text>
        We use cookies to improve user experience, and analyze website traffic.
        For these reasons, we may share your site usage data with our analytics
        partners. By continuing to use our website, you consent their usage.
      </Text>
    </CookieConsent>
  )
}

export default Consent
