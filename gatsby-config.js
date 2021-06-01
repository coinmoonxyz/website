module.exports = {
  siteMetadata: {
    title: `coinmoon.xyz`,
    description: `코인문 코인가이드`,
    siteUrl: `https://coinmoon.xyz/`,
    social: {
      twitter: `coinmoonxyz`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/draft`,
        name: `draft`,
        ignore: process.env.NODE_ENV === `production` ? [`**/draft`] : [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/yml`,
        name: `yml`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: `UA-195886234-1`,
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true,
        },
        environments: ["production"],
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/templates/blog-post/index.js"),
        },
        puglins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              // offsetY: `100px`, // doesn't work
              isIconAfterHeader: true,
              elements: [`h2`, `h3`],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 70,
              showCaptions: ["title"],
              // markdownCaptions: true, // caption uses MD, not raw text
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
  ],
  // mapping: {
  //   // map author to author.yaml
  //   "Mdx.frontmatter.author": `AuthorYaml`,
  // },
}
