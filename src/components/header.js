import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyle from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={headerStyle.header}>
      <h1 className={headerStyle.title}>{data.site.siteMetadata.title}</h1>
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
