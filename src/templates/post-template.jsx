import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostTemplateDetails from "../components/PostTemplateDetails"

class PostTemplate extends React.Component {
  render() {
    const { title, subtitle, handle } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const {
      title: postTitle,
      description: postDescription,
      image: postImage,
    } = post.frontmatter
    const description = postDescription !== null ? postDescription : subtitle

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${postTitle} - ${title}`}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={postTitle} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={postImage} />
            <meta property="twitter:card" content="summary" />
            <meta name="twitter:creator" content={handle} />
            <meta name="twitter:title" content={postTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={postImage} />
          </Helmet>
          <PostTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        handle
        subtitle
        copyright
        author {
          name
          twitter
        }
        disqusShortname
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
        slug
      }
      frontmatter {
        title
        tags
        date
        description
        image
      }
    }
  }
`
