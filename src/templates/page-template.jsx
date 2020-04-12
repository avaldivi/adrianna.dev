import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PageTemplateDetails from "../components/PageTemplateDetails"

class PageTemplate extends React.Component {
  render() {
    const { title, subtitle, handle } = this.props.data.site.siteMetadata
    const page = this.props.data.markdownRemark
    const { title: pageTitle, description: pageDescription } = page.frontmatter
    const description = pageDescription !== null ? pageDescription : subtitle

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${pageTitle} - ${title}`}</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description} />
            <meta
              property="og:image"
              content={
                pageTitle === "Slides"
                  ? "https://i.ibb.co/Rj0BQ59/read-more.jpg"
                  : "https://i.ibb.co/sPGxhSb/nicole-honeywill-girl-boss.jpg"
              }
            />
            <meta property="twitter:card" content="summary" />
            <meta name="twitter:creator" content={handle} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta
              name="twitter:image"
              content={
                pageTitle === "Slides"
                  ? "https://i.ibb.co/Rj0BQ59/read-more.jpg"
                  : "https://i.ibb.co/sPGxhSb/nicole-honeywill-girl-boss.jpg"
              }
            />
          </Helmet>
          <PageTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`
