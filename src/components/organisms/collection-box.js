import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
// import { css } from "@emotion/react"
import { grid } from "styled-system"

const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[5]};
  /* border: 1px solid ${({ theme }) => theme.colors.accent}; */
  border-radius: ${({ theme }) => theme.spacing[3]};

  background: ${({ theme }) => theme.colors.white};

  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.4s, background 0.3s;

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    background: ${({ theme }) => theme.colors.logoLight};
  }

  a {
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
`

const Box = styled.article`
  ${grid}

  padding: ${({ theme }) => theme.spacing[7]} ${({ theme }) =>
    theme.spacing[7]};

  color: ${({ theme }) => theme.colors.text};

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes[1]};
  }
`

const CollectionBox = ({ collection }) => {
  const { title, subtitle, slug } = collection
  return (
    <Wrapper>
      <Link to={`collection/${slug}`}>
        <Box>
          {/* <div>글 모음</div> */}
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Box>
      </Link>
    </Wrapper>
  )
}

export default CollectionBox
