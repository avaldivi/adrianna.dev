import React from "react"
import Sidebar from "../Sidebar"
import "./style.scss"

const PageTemplateDetails = props => {
  const page = props.data.markdownRemark

  return (
    <div>
      <Sidebar {...props} />
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">{page.frontmatter.title}</h1>
            <div
              className="page__body"
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{ __html: page.html }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTemplateDetails
