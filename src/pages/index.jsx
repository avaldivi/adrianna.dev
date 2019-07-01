import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Post from "../components/Post"
import Sidebar from "../components/Sidebar"
import MetaImage from "../assets/images/girl-boss.jpg"

class IndexRoute extends React.Component {
  render() {
    const items = []
    const {
      author,
      title,
      subtitle,
      description,
      handle,
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
              lang: 'en',
            }}
            title={title}
            titleTemplate={title}
          >
            <meta name="description" content={subtitle} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={MetaImage} />
            <meta property="twitter:card" content="summary" />
            <meta name="twitter:creator" content={handle} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={MetaImage} />
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
