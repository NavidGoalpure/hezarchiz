import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostCard from "./PostCard"

interface Props {
  includePhrase: string
}
const BlogList: React.FC<Props> = props => {
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
                logo {
                  children {
                    ... on ImageSharp {
                      fluid(maxWidth: 48) {
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
  // const { siteUrl } = useSiteMetadata()

  return (
    <>
      <main role="main" style={{ overflow: "auto", width: "100%" }}>
        <div className="content">
          {allMarkdownRemark.edges.map(({ node }) => {
            if (
              props.includePhrase === "all" ||
              node.frontmatter.keywords.includes(props.includePhrase)
            )
              return (
                <PostCard
                  slug={node.fields.slug}
                  title={node.frontmatter.title}
                  description={node.frontmatter.description}
                  domain={node?.frontmatter?.domain || ""}
                  imageFluid={node?.frontmatter?.img?.children[0].fluid}
                  logoFluid={node?.frontmatter?.logo?.children[0].fluid}
                />
              )
          })}
        </div>
      </main>
    </>
  )
}

export default BlogList
