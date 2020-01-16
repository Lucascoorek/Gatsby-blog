import React from "react"
import { Link } from "gatsby"
import headerStyle from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <h1 className={headerStyle.title}>Lukasz Kurek</h1>
      <nav>
        <ul className={headerStyle.navList}>
          <li>
            <Link
              to="/"
              className={headerStyle.navItem}
              activeClassName={headerStyle.navItemActive}
            >
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={headerStyle.navItem}
              activeClassName={headerStyle.navItemActive}
            >
              {" "}
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={headerStyle.navItem}
              activeClassName={headerStyle.navItemActive}
            >
              {" "}
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={headerStyle.navItem}
              activeClassName={headerStyle.navItemActive}
            >
              {" "}
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
