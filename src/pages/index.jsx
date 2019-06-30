import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Post from "../components/Post"
import Sidebar from "../components/Sidebar"

class IndexRoute extends React.Component {
  render() {
    const items = []
    const {
      author,
      title,
      subtitle,
      description,
      handle,
      image,
      keywords,
      meta,
    } = this.props.data.site.siteMetadata
    const posts = this.props.data.allMarkdownRemark.edges
    posts.forEach(post => {
      items.push(<Post data={post} key={post.node.fields.slug} />)
    })

    return (
      <Layout>
        <div>
          <Helmet
            htmlAttributes={{
              lang: this.props.lang,
            }}
            title={title}
            titleTemplate={`${author.name} | ${title}`}
            meta={[
              {
                name: "description",
                content: description,
              },
              {
                property: "og:title",
                content: title,
              },
              {
                property: "og:image",
                content: image,
              },
              {
                property: "og:description",
                content: description,
              },
              {
                property: "og:type",
                content: "website",
              },
              {
                name: "twitter:card",
                content: "summary",
              },
              {
                name: "twitter:creator",
                content: handle,
              },
              {
                name: "twitter:title",
                content: title,
              },
              {
                name: "twitter:description",
                content: description,
              },
              {
                name: "twitter:image",
                content: image,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: "keywords",
                      content: keywords.join(", "),
                    }
                  : []
              )
              .concat(meta)}
          >
            <title>{title}</title>
            <meta name="description" content={subtitle} />
            <meta name="og:type" content="website" />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={handle} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
          </Helmet>
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">{items}</div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        description
        copyright
        keywords
        handle
        image
        meta
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
          rss
          linkedin
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`
