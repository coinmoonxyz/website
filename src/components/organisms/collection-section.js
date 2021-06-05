import React from "react"
import CollectionListItem from "./collection-list-item"
import styled from "@emotion/styled"

const Section = styled.section`
  grid-column: 2;
  grid-row: 1;

  @media (max-width: ${({ theme }) => theme.widths.main}) {
    grid-column: 1;
    grid-row: 2;
  }
`

const OrderedList = styled.ol`
  list-style: none;
`

const CollectionSection = ({ collections }) => {
  return (
    <Section>
      <h1>글 모음</h1>
      <OrderedList>
        {collections.map(collection => (
          <CollectionListItem collection={collection} />
        ))}
        {/* <RoundBoxItem title={"모든 글 모음 보기 →"} slug={"/all-posts/"} /> */}
      </OrderedList>
    </Section>
  )
}

export default CollectionSection
