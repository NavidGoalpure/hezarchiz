import React, { useEffect, useRef, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostCard from "../PostCard"
import { ListDeclimer } from "./ListDeclimer"
interface Props {
  includePhrase: string
}
const BlogList: React.FC<Props> = props => {
  const data = useStaticQuery(
    graphql`
      query BlogList {
        allMarkdownRemark(
          sort: { fields: [frontmatter___title], order: ASC }
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
                domainName
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

  const elementRef = useRef()
  useEffect(() => {
    elementRef.current.focus()
    //
    const xScrollPosition = sessionStorage.getItem("listPageScroll") || 0
    if (typeof elementRef !== undefined && window.innerWidth > 800)
      elementRef.current.scrollTop = xScrollPosition

    return sessionStorage.removeItem("listPageScroll")
  }, [elementRef])

  return (
    <>
      <main role="main" style={{ width: "100%" }}>
        <div className="content" ref={elementRef} tabIndex={1}>
          <ListDeclimer category={props.includePhrase} />
          {allMarkdownRemark.edges.map(({ node }) => {
            if (
              props.includePhrase === "all" ||
              node.frontmatter.keywords.includes(props.includePhrase)
            )
              return (
                <PostCard
                  key={node?.frontmatter?.domain}
                  slug={node.fields.slug}
                  title={node.frontmatter.title}
                  description={node.frontmatter.description}
                  domain={node?.frontmatter?.domain || ""}
                  domainName={node?.frontmatter?.domainName || ""}
                  imageFluid={node?.frontmatter?.img?.children[0].fluid}
                  logoFluid={node?.frontmatter?.logo?.children[0].fluid}
                  refCurrent={elementRef.current}
                />
              )
          })}
        </div>
      </main>
    </>
  )
}

export default BlogList
