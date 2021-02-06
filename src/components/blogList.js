import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostCard from "./PostCard"

const BlogList = () => {
  const data = useStaticQuery(
    graphql`
      query BlogList {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { blog: { eq: true } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
              }
            }
          }
        }
      }
    `
  )
  const { allMarkdownRemark } = data

  return (
    <>
      <main role="main" style={{ overflow: "auto" }}>
        <div className="content">
          {allMarkdownRemark.edges.map(({ node }) => (
            <PostCard
              slug={node.fields.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              description={node.frontmatter.description}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default BlogList
