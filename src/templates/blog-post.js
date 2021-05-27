import * as React from "react"
import { graphql } from "gatsby"
import moment from "moment" // for date
import Layout from "../components/layout"
import Seo from "../components/seo"
import Kofi from "../components/organisms/kofi"
import TagList from "../components/organisms/tag-list"
import BlogPostNav from "../components/organisms/blog-post-nav"
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
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: ${props => props.theme.lineHeights.normal};
`

const StyledDates = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    flex-direction: column;
  }
`

const StyledDate = styled.div`
  margin-right: ${props => props.theme.spacing[3]};
  display: inline-block;
  font-size: ${props => props.theme.fontSizes[1]};
  font-family: ${props => props.theme.fonts.sansSerif};
`

const StyledDateUpdated = styled.div`
  color: ${props => props.theme.colors.textLight};
  font-style: italic;
`

const Dates = ({ date, modifiedTime, updated }) => (
  <StyledDates>
    <StyledDate>
      {moment(new Date(date)).format("dddd MMM Do, YYYY")}
    </StyledDate>
    {updated && (
      <StyledDateUpdated>
        last update: {moment(new Date(modifiedTime)).format("MMM Do")}
      </StyledDateUpdated>
    )}
  </StyledDates>
)

const PostBody = styled.section`
  h1,
  p,
  li {
    word-break: keep-all;
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
    @media (max-width: ${props => props.theme.breakpoints[0]}) {
      list-style-position: inside;
    }
  }

  ul ul {
    margin: ${props => props.theme.spacing[0]};
  }

  ul li,
  ol li {
    padding-left: ${props => props.theme.spacing[0]};
  }

  li > ul {
    margin-left: ${props => props.theme.spacing[7]};
  }

  li > p {
    margin-bottom: 0;
  }

  header {
    margin-bottom: ${props => props.theme.spacing[10]};
  }

  a {
    color: ${props => props.theme.colors.text};
  }

  figure {
    margin: 0;
  }

  img {
    margin-bottom: ${props=>props.theme.spacing[7]};
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
    border-left: ${props => props.theme.spacing[1]} solid ${props => props.theme.colors.logo};
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
    padding: ${props => props.theme.spacing[1]} ${props => props.theme.spacing[2]};
  }

  table thead tr th {
    border-bottom: 1px solid ${props => props.theme.colors.accent};
  }
  table td {
    border-bottom: 1px solid ${props => props.theme.colors.accent};
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
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

const StyledHeader = styled.header`
  margin-bottom: ${props=>props.theme.spacing[12]};
`

const Header = ({ data }) => {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags
  tags.sort()
  const date = post.frontmatter.date // string
  const modifiedTime = data.allFile.edges[0].node.modifiedTime // string
  // compare publish date vs. modified date
  const updated = moment(new Date(modifiedTime)).isAfter(new Date(date))

  return (
    <StyledHeader>
      <TagList tags={tags} />
      <Title itemProp="headline">{post.frontmatter.title}</Title>
      <Description itemProp="description">
        {post.frontmatter.description}
      </Description>
      <Dates date={date} modifiedTime={modifiedTime} updated={updated} />
    </StyledHeader>
  )
}

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article itemScope itemType="http://schema.org/Article">
        <Header data={data} />
        <PostBody
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <Kofi />
      </article>
      <BlogPostNav previous={previous} next={next} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author {
          id
          description
        }
        tags
      }
    }

    allFile(filter: { childMarkdownRemark: { id: { eq: $id } } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              date
            }
          }
          changeTime
          modifiedTime(formatString: "MMMM DD, YYYY")
        }
      }
    }

    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
