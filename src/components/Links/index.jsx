import React from "react"
import "./style.scss"
import "../../assets/fonts/fontello-771c82e0/css/fontello.css"

const Links = props => {
  const author = props.data
  const links = {
    telegram: author.telegram,
    twitter: author.twitter,
    github: author.github,
    linkedin: author.linkedin,
    rss: author.rss,
    email: author.email,
    producthunt: author.producthunt,
  }

  return (
    <div className="links">
      <ul className="links__list">
        <li className="links__list-item">
          <a
            href={`https://www.twitter.com/${links.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-twitter" />
          </a>
        </li>
        <li className="links__list-item">
          <a
            href={`https://www.github.com/${links.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-github" />
          </a>
        </li>
        <li className="links__list-item">
          <a
            href={`https://www.linkedin.com/in/${links.linkedin}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-linkedin" />
          </a>
        </li>
        <li className="links__list-item">
          <a href={`mailto:${links.email}`}>
            <i className="icon-mail" />
          </a>
        </li>
      </ul>
      {/* <ul className="links__list">
          <li className="links__list-item">
            <a href={`telegram:${links.telegram}`}>
              <i className="icon-paper-plane" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a href={links.rss}>
              <i className="icon-rss" />
            </a>
          </li>
        </ul> */}
    </div>
  )
}

export default Links
