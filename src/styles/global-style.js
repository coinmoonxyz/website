import React from "react"
import { Global, css } from "@emotion/react"
import emotionNormalize from "emotion-normalize"

const GlobalStyle = props => (
  <Global
    styles={theme => css`
      ${emotionNormalize}

      *,
      :after,
      :before {
        box-sizing: border-box;
      }

      html {
        line-height: ${theme.lineHeights.normal};
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-y: scroll; /* force scrollbar to appear to avoid layout shift */
        /* scroll-behavior: smooth; */
      }

      body {
        font-family: ${theme.fonts.sansSerif};
        font-size: ${theme.fontSizes[2]};
        background: rgb(240, 240, 236);
        color: ${theme.colors.text};
      }

      a {
        color: ${theme.colors.primary};
        text-underline-offset: 2px;
      }

      hr {
        margin: ${theme.spacing[7]} 0;
        background: ${theme.colors.accent};
        height: 1px;
        border: 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: ${theme.fonts.sansSerif};
        font-weight: ${theme.fontWeights.regular};
        margin-top: ${theme.spacing[9]};
        margin-bottom: ${theme.spacing[6]};
        line-height: ${theme.lineHeights.tight};
        letter-spacing: 0;
        color: ${theme.colors.heading};
      }

      h1 {
        font-size: ${theme.fontSizes[4]};
      }

      h2 {
        font-size: ${theme.fontSizes[3]};
      }

      h3,
      h4,
      h5,
      h6 {
        font-size: ${theme.fontSizes[2]};
      }

      h1 > a,
      h2 > a,
      h3 > a,
      h4 > a,
      h5 > a,
      h6 > a {
        text-decoration: none;
        color: inherit;
      }

      h1,
      p,
      li {
        word-break: keep-all;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      iframe {
        background: ${theme.colors.lightgray};
      }

      .gatsby-highlight {
        margin-bottom: ${theme.spacing[7]};
      }
    `}
  />
)

export default GlobalStyle
