import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go to Home Page</Link>
      </p>
    </Layout>
  )
}

export default NotFound
