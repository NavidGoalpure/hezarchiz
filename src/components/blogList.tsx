import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostCard from "./PostCard"

interface Props {
  includePhrase: string
}
const BlogList: React.FC<Props> = ({ includePhrase }) => {
  const data = useStaticQuery(
    graphql`
      query BlogList {
        allMarkdownRemark(
          sort: { fields: [frontmatter___title], order: DESC }
          filter: {
            frontmatter: { blog: { eq: true }, keywords: { regex: "//" } }
          }
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
                img {
                  children {
                    ... on ImageSharp {
                      fluid(maxWidth: 1920) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                      }
                    }
                  }
                }
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
      <main role="main" style={{ overflow: "auto", width: "100%" }}>
        <div className="content">
          {allMarkdownRemark.edges.map(({ node }) => {
            if (
              includePhrase === "all" ||
              node.frontmatter.keywords.includes(includePhrase)
            )
              return (
                <PostCard
                  slug={node.fields.slug}
                  title={node.frontmatter.title}
                  description={node.frontmatter.description}
                  domain={node?.frontmatter?.domain || ""}
                  imageFluid={node?.frontmatter?.img?.children[0].fluid}
                />
              )
          })}
        </div>
      </main>
    </>
  )
}

export default BlogList
