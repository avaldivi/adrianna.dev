import React from "react"
import Post from "../Post"

const TagTemplateDetails = props => {
  const items = []
  const tagTitle = props.pageContext.tag
  const posts = props.data.allMarkdownRemark.edges
  posts.forEach(post => {
    items.push(<Post data={post} key={post.node.fields.slug} />)
  })

  return (
    <div className="content">
      <div className="content__inner">
        <div className="page">
          <h1 className="page__title">
            All Posts tagged as &quot;
            {tagTitle}
            &quot;
          </h1>
          <div className="page__body">{items}</div>
        </div>
      </div>
    </div>
  )
}

export default TagTemplateDetails
