import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "D/M/Y")
          }
        }
      }
    }
  `)
  const postsLists = data.allContentfulBlogPost.edges.map((edge, i) => (
    <li key={i}>
      <Link to={`/blog/${edge.node.slug}`}>
        <h2>{edge.node.title}</h2>
        <p>{edge.node.publishedDate}</p>
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
