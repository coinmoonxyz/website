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
    `gatsby-plugin-image`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 70,
              showCaptions: ["title"],
              markdownCaptions: true, // caption uses MD, not raw text
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
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
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
  ],
  mapping: {
    // map author to author.yaml
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
  },
}
