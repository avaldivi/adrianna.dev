require("dotenv").config()

const lost = require("lost")
const pxtorem = require("postcss-pxtorem")
const { GATSBY_GOOGLE_ANALYTICS_TRACKING_ID } = process.env

module.exports = {
  siteMetadata: {
    siteUrl: "https://adrianna.dev",
    url: "https://adrianna.dev",
    title: "Adrianna Valdivia | adrianna.dev",
    subtitle: "Speaker, Writer, and UI Engineer",
    description: "Speaker, Writer, and UI Engineer",
    handle: "@driannavaldivia",
    keywords: ["technology blog", "ui engineer", "javascript"],
    meta: "",
    copyright: "© All rights reserved.",
    disqusShortname: "adriannavaldivia",
    menu: [
      {
        label: "About me",
        path: "/about/",
      },
      {
        label: "Articles",
        path: "/",
      },
      {
        label: "Slides",
        path: "/slides/",
      },
      {
        label: "Contact",
        path: "https://calendly.com/adrianna-valdivia/30min",
      },
    ],
    author: {
      name: "Adrianna Valdivia",
      email: "adrianna.valdivia@gmail.com",
      telegram: "",
      twitter: "driannavaldivia",
      github: "avaldivi",
      rss: "rss",
      linkedin: "adriannavaldivia",
      producthunt: "adriannavaldivi",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                site_url: url
                title
                description: subtitle
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.site_url + edge.node.fields.slug,
                  guid: site.siteMetadata.site_url + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              ),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        layout
                        draft
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: { wrapperStyle: "margin-bottom: 1.0725rem" },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: { trackingId: "UA-143246352-1" },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["roboto:400,400i,500,700"],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
            {
              site {
                siteMetadata {
                  siteUrl
                }
              }
              allSitePage(
                filter: {
                  path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
                }
              ) {
                edges {
                  node {
                    path
                  }
                }
              }
          }`,
        output: "/sitemap.xml",
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: "daily",
              priority: 0.7,
            }
          }),
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [
          lost(),
          pxtorem({
            rootValue: 16,
            unitPrecision: 5,
            propList: [
              "font",
              "font-size",
              "line-height",
              "letter-spacing",
              "margin",
              "margin-top",
              "margin-left",
              "margin-bottom",
              "margin-right",
              "padding",
              "padding-top",
              "padding-left",
              "padding-bottom",
              "padding-right",
              "border-radius",
              "width",
              "max-width",
            ],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
          }),
        ],
        precision: 8,
      },
    },
  ],
}
