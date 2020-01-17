import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const postsLists = data.allMarkdownRemark.edges.map((edge, i) => (
    <li key={i}>
      <Link to={`/blog/${edge.node.fields.slug}`}>
        <h2>{edge.node.frontmatter.title}</h2>
        <p>{edge.node.frontmatter.date}</p>
      </Link>
    </li>
  ))

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.links}>{postsLists}</ol>
    </Layout>
  )
}

export default BlogPage
