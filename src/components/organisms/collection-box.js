import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
// import { css } from "@emotion/react"
import { grid } from "styled-system"

const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[7]};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.spacing[3]};

  a {
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.logoLight};
  }
`

const Box = styled.div`
  ${grid}

  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) =>
    theme.spacing[7]};

  color: ${({ theme }) => theme.colors.text};

  h2 {
    margin: 0;
  }
`

const CollectionBox = ({ collection }) => {
  const { name, description, slug } = collection
  return (
    <Wrapper>
      <Link to={`collection` + slug}>
        <Box>
          <div>글 모음</div>
          <h2>{name}</h2>
          <p>{description}</p>
        </Box>
      </Link>
    </Wrapper>
  )
}

export default CollectionBox
