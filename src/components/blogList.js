import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostCard from "./PostCard"

const BlogList = () => {
  const data = useStaticQuery(
    graphql`
      query BlogList {
        allMarkdownRemark(
          sort: { fields: [frontmatter___title], order: DESC }
          filter: { frontmatter: { blog: { eq: true } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                description
                domain
                keywords
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
              description={node.frontmatter.description}
              domain={node.frontmatter.domain || ""}
              keywords={node.frontmatter.keywords}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default BlogList
