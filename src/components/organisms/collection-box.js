import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
// import { css } from "@emotion/react"
import { grid } from "styled-system"

const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[7]};
  /* border: 1px solid ${({ theme }) => theme.colors.accent}; */
  border-radius: ${({ theme }) => theme.spacing[3]};

  background: ${({ theme }) => theme.colors.accent};

  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.4s;

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
  const { name, description, slug } = collection
  return (
    <Wrapper>
      <Link to={`collection/${slug}`}>
        <Box>
          {/* <div>글 모음</div> */}
          <h2>{name}</h2>
          <p>{description}</p>
        </Box>
      </Link>
    </Wrapper>
  )
}

export default CollectionBox
