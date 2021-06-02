const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for each type of content
  const blogPostTemplate = path.resolve(`./src/templates/blog-post/index.js`)
  const tagTemplate = path.resolve(`./src/templates/tag-template.js`)
  const collectionTemplate = path.resolve(`./src/templates/collection-template.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }

        tagsGroup: allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }

        allCollectionsYaml {
          nodes {
            title
            subtitle
            description
            slug
            urls
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.nodes
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  // https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/
  const tags = result.data.tagsGroup.group
  // Make tag pages
  if (tags.length > 0) {
    tags.forEach(tag => {
      createPage({
        path: `/tag/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })
  }

  const collections = result.data.allCollectionsYaml.nodes
  if (collections.length > 0) {
    collections.forEach(collection => {
      createPage({
        path: `/collection/${collection.slug}/`,
        component: collectionTemplate,
        context: {
          slug: collection.slug,
        }
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    // reformat folder name for slug (remove date portion)
    const words = value.split("-")
    words.shift() // remove first element
    const newv = "/" + words.join("-")

    createNodeField({
      name: `slug`,
      node,
      value: newv,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
