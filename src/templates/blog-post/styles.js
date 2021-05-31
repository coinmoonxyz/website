import styled from "@emotion/styled"

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes[5]};
  font-weight: ${props => props.theme.fontWeights.regular};
  margin: 0;
  margin-bottom: ${props => props.theme.spacing[3]};
  line-height: ${props => props.theme.lineHeights.normal};
`

const Description = styled.h2`
  margin: 0;
  margin-bottom: ${props => props.theme.spacing[3]};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes[3]};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: ${props => props.theme.lineHeights.normal};
`

const Dates = styled.div`
  font-size: ${props => props.theme.fontSizes[1]};
  display: flex;
  flex-direction: row;
  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    flex-direction: column;
  }
`

const Date = styled.div`
  margin-right: ${props => props.theme.spacing[3]};
  display: inline-block;
  font-family: ${props => props.theme.fonts.sansSerif};
`

const DateUpdated = styled.div`
  color: ${props => props.theme.colors.textLight};
  /* font-style: italic; */
`

const ArticleGrid = styled.article`
  display: grid;
  grid-template-columns: 1fr min(${({ theme }) => theme.widths.main}, 100%) ${({
      theme,
    }) => theme.widths.aside} 1fr;

  > * {
    grid-column: 2;
  }

  @media (max-width: ${({ theme }) => theme.widths.full}) {
    grid-template-columns: 1fr min(${({ theme }) => theme.widths.main}, 100%) 1fr;
  }
`

const Header = styled.header`
  margin-bottom: ${props => props.theme.spacing[8]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
  padding: 0 ${props => props.theme.spacing[5]};
  padding-bottom: ${({ theme }) => theme.spacing[8]};

  grid-column: 2 / span 2;

  /* background: ${({ theme }) => theme.colors.postHeaderBg}; */
`

const PostBody = styled.section`
  padding: 0 ${props => props.theme.spacing[5]};

  h2 {
    font-size: ${props => props.theme.fontSizes[3]};
    font-weight: ${props => props.theme.fontWeights.regular};
  }
  h3 {
    font-size: ${props => props.theme.fontSizes[2]};
    font-weight: ${props => props.theme.fontWeights.regular};
  }

  p {
    margin: 0;
    margin-bottom: ${props => props.theme.spacing[7]};
    padding: ${props => props.theme.spacing[0]};
    line-height: ${props => props.theme.lineHeights.relaxed};
  }

  ul,
  ol {
    margin-left: ${props => props.theme.spacing[0]};
    margin-bottom: ${props => props.theme.spacing[9]};
    margin-right: ${props => props.theme.spacing[0]};
    padding: ${props => props.theme.spacing[0]};
    list-style-position: outside;
    list-style-image: none;
    line-height: ${props => props.theme.lineHeights.relaxed};
    @media (max-width: ${({ theme }) => theme.widths.full}) {
      list-style-position: inside;
    }
  }

  ul ul {
    margin: ${({ theme }) => theme.spacing[0]};
  }

  ul li,
  ol li {
    padding-left: ${({ theme }) => theme.spacing[0]};
  }

  li > ul {
    margin-left: ${({ theme }) => theme.spacing[7]};
  }

  li > p {
    margin-bottom: 0;
  }

  header {
    margin-bottom: ${({ theme }) => theme.spacing[10]};
  }

  a {
    color: ${({ theme }) => theme.colors.text};
  }

  a.anchor {
    position: relative;
    left: 4px;

    svg {
      fill: ${({ theme }) => theme.colors.lightgray};
    }
  }

  figure {
    margin: 0;
  }
  figcaption {
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};
  }

  img {
    margin-bottom: ${props => props.theme.spacing[7]};
  }

  hr {
    margin: ${props => props.theme.spacing[9]} 0;
  }

  .gatsby-resp-image-wrapper {
    /* box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2); */
  }

  .gatsby-resp-image-figcaption * {
    margin-top: ${props => props.theme.spacing[3]};
    text-align: center;
    color: ${props => props.theme.colors.textLight};
  }

  blockquote {
    margin-left: calc(-1 * ${props => props.theme.spacing[6]});
    margin-right: ${props => props.theme.spacing[7]};
    margin-bottom: ${props => props.theme.spacing[7]};
    padding: 0;
    padding-left: ${props => props.theme.spacing[6]};
    border-left: ${({ theme }) => theme.spacing[1]} solid
      ${({ theme }) => theme.colors.logo};
    color: ${props => props.theme.colors.gray};
    font-size: ${props => props.theme.fontSizes[2]};
  }

  blockquote > :last-child {
    margin-bottom: ${props => props.theme.spacing[0]};
  }

  blockquote > ul,
  blockquote > ol {
    list-style-position: inside;
  }

  table {
    width: 100%;
    margin-bottom: ${props => props.theme.spacing[7]};
    border-collapse: collapse;
    border-spacing: 0.25rem;
  }

  table th,
  table td {
    padding: ${({ theme }) => theme.spacing[1]}
      ${({ theme }) => theme.spacing[2]};
  }

  table thead tr th {
    border-bottom: 1px solid ${props => props.theme.colors.accent};
  }
  table td {
    border-bottom: 1px solid ${props => props.theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.widths.full}) {
    ul > li p {
      /* line break fix */
      display: inline;
    }

    blockquote {
      margin-left: ${props => props.theme.spacing[0]};
      padding: 0;
      padding-left: ${props => props.theme.spacing[4]};
    }
  }
`

export {
  Title,
  Description,
  Dates,
  Date,
  DateUpdated,
  PostBody,
  ArticleGrid,
  Header,
}
