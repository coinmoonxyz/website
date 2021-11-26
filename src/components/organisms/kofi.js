import React from "react"
// import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"

const StyledKofi = styled.div`
  margin-bottom: ${props => props.theme.spacing[8]};

  padding: 0 ${props => props.theme.spacing[5]};

  text-align: center;
`

const Kofi = () => (
  <StyledKofi>
    <p style={{ marginBottom: "1rem" }}>
      후원금은 블로그 유지에 큰 도움이 됩니다. Brave 브라우저 사용하시는 분들은 주소창 오른쪽 삼각형을 누르셔서 팁을 주실 수도 있어요. 감사합니다!
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