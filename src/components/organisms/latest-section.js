import React from "react"
import PostListItem from "./post-list-item"
import RoundBoxItem from "./round-box-item"
import styled from "@emotion/styled"

const Section = styled.section`
  grid-column: 1;
  grid-row: 1;

  @media (max-width: ${({ theme }) => theme.widths.main}) {
    grid-row: 1;
  }
`

const OrderedList = styled.ol`
  list-style: none;
`

const LatestSection = ({ posts }) => {
  return (
    <Section>
      <h1>최신 글</h1>
      <OrderedList>
        {posts.map(post => (
          <PostListItem post={post} key={post.id} />
        ))}
        <RoundBoxItem slug={"/all-posts/"} short>
          모든 글 보기 →
        </RoundBoxItem>
      </OrderedList>
    </Section>
  )
}

export default LatestSection
