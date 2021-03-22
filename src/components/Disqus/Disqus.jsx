import React, { useState } from "react"
import ReactDisqusComments from "react-disqus-comments"

const Disqus = props => {
  const [toasts, setToasts] = useState({ toasts: [] })

  const onSnackbarDismiss = () => {
    setToasts({ toasts })
  }

  const notifyAboutComment = () => {
    const newToasts = toasts.toasts.slice()
    newToasts.push({ text: "New comment available!!" })
    setToasts({ newToasts })
  }

  const { postNode, siteMetadata } = props

  if (!siteMetadata.disqusShortname) {
    return null
  }
  const post = postNode.frontmatter
  const url = siteMetadata.url + postNode.fields.slug

  return (
    <ReactDisqusComments
      shortname={siteMetadata.disqusShortname}
      identifier={post.title}
      title={post.title}
      url={url}
      category_id={post.category_id}
      onNewComment={notifyAboutComment}
    />
  )
}

export default Disqus
