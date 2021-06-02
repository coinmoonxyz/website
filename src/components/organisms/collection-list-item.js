import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
// import { css } from "@emotion/react"
// import { grid } from "styled-system"
import RoundBox from "../atoms/round-box"
import theme from "../../styles/theme"

const Box = styled.article`
  padding: ${({ theme }) => theme.spacing[7]} ${({ theme }) => theme.spacing[7]};

  color: ${({ theme }) => theme.colors.text};

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes[1]};
  }
`

const CollectionListItem = ({ collection }) => {
  const { title, subtitle, slug } = collection
  return (
    <li>
      <RoundBox bg={theme.colors.white} bgHover={theme.colors.logoLight}>
        <Link to={`collection/${slug}`}>
          <Box>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </Box>
        </Link>
      </RoundBox>
    </li>
  )
}

export default CollectionListItem
