import React, { useEffect, useRef, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ListDeclimer } from "./ListDeclimer"
import TwoSectionPage from "../TwoSectionPage"
import CardsContainer from "../CardsContainer"

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
    `,
  )
  const { allMarkdownRemark } = data
  // const { siteUrl } = useSiteMetadata()

  const elementRef = useRef()
  useEffect(() => {
    if (elementRef && elementRef.current) {
      //@ts-ignore
      elementRef.current.focus()
      //
      const xScrollPosition = sessionStorage.getItem("listPageScroll") || 0
      if (typeof elementRef !== undefined && window.innerWidth > 800)
        //@ts-ignore
        elementRef.current.scrollTop = xScrollPosition
    }

    return sessionStorage.removeItem("listPageScroll")
  }, [elementRef])
  switch (props.includePhrase) {
    case "learning":
      return (
        <TwoSectionPage
          includePhrase="learning"
          projects={allMarkdownRemark.edges}
          ref={elementRef}
          pageTitle="آموزش بلاکچین"
          title2="پروژه های آموزشی"
        />
      )

    default:
      return (
        <main role="main" style={{ width: "100%" }}>
          <div className="content" ref={elementRef} tabIndex={1}>
            <ListDeclimer tag={props.includePhrase} />
            <CardsContainer
              includePhrase={props.includePhrase}
              projects={allMarkdownRemark.edges}
              ref={elementRef}
            />
          </div>
        </main>
      )
  }
}

export default BlogList
