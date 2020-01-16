import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>Hi I'm a web developer living in Warsaw, Poland</h2>
      <p>
        See my Github page:{" "}
        <a href="https://github.com/Lucascoorek" target="_blank">
          Github
        </a>
      </p>
      <p>
        Need to contact me directly? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
