import React from "react"
import { Link } from "gatsby"
import "./style.scss"

const Menu = props => {
  const menu = props.data

  const menuBlock = (
    <ul className="menu__list">
      {menu.map(item => (
        <li className="menu__list-item" key={item.path}>
          {item.label === "Contact" ? (
            <a
              href={item.path}
              className="menu__list-item-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ) : (
            <Link
              to={item.path}
              className="menu__list-item-link"
              activeClassName="menu__list-item-link menu__list-item-link--active"
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )

  return <nav className="menu">{menuBlock}</nav>
}

export default Menu
