import React from "react"
import get from "lodash/get"
import { Link } from "gatsby"
import Menu from "../Menu"
import Links from "../Links"
import profilePic from "../../pages/about_shot.jpg"
import "./style.scss"

const Sidebar = props => {
  const { location } = props
  const { author, subtitle, copyright, menu } = props.data.site.siteMetadata
  const isHomePage = get(location, "pathname", "/") === "/"

  const authorBlock = (
    <div>
      <Link to="/">
        <img
          src={profilePic}
          className="sidebar__author-photo"
          width="200"
          height="200"
          alt={author.name}
        />
      </Link>
      {isHomePage ? (
        <h1 className="sidebar__author-title">
          <Link className="sidebar__author-title-link" to="/">
            {author.name}
          </Link>
        </h1>
      ) : (
        <h2 className="sidebar__author-title">
          <Link className="sidebar__author-title-link" to="/">
            {author.name}
          </Link>
        </h2>
      )}
      <p className="sidebar__author-subtitle">{subtitle}</p>
    </div>
  )

  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <div className="sidebar__author">{authorBlock}</div>
        <div>
          <Menu data={menu} />
          <Links data={author} />
          <p className="sidebar__copyright">{copyright}</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
