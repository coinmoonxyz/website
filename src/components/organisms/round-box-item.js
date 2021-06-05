import * as React from "react"
import { Link } from "gatsby"
// import styled from "@emotion/styled"
// import { css } from "@emotion/react"
import RoundBox from "../atoms/round-box"
import theme from "../../styles/theme"

const RoundBoxItem = props => {
  const { children, slug, short } = props

  return (
    <RoundBox bg={theme.colors.brightgray} short={short}>
      <Link to={slug}>
        <header>
          <p>{children}</p>
        </header>
      </Link>
    </RoundBox>
  )
}

export default RoundBoxItem
