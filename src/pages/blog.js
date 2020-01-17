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
      <Link className={blogStyles.link} to={`/blog/${edge.node.fields.slug}`}>
        <h2>{edge.node.frontmatter.title}</h2>
      </Link>
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
