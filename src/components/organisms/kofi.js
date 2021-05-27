import React from "react"
// import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"

const StyledKofi = styled.div`
  margin-top: ${props => props.theme.spacing[8]};
  margin-bottom: ${props => props.theme.spacing[8]};
  text-align: center;
`

const Kofi = () => (
  <StyledKofi>
    <p style={{ marginBottom: "1rem" }}>
      후원금은 블로그 유지에 큰 도움이 됩니다. 감사합니다!
    </p>
    <a href="https://ko-fi.com/V7V74G7ID" target="_blank" rel="noreferrer">
      <img
        height="36"
        style={{ border: 0, height: 36 }}
        src="https://cdn.ko-fi.com/cdn/kofi4.png?v=2"
        border="0"
        alt="Buy Me a Coffee at ko-fi.com"
      />
    </a>
  </StyledKofi>
)

export default Kofi