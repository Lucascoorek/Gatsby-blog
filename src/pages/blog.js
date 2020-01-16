import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  const postsLists = data.allMarkdownRemark.edges.map((edge, i) => (
    <li key={i}>
      <h2>{edge.node.frontmatter.title}</h2>
      <p>{edge.node.frontmatter.date}</p>
    </li>
  ))

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>{postsLists}</ol>
    </Layout>
  )
}

export default BlogPage
