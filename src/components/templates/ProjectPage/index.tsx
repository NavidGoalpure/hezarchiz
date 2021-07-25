import React from "react"
import Post from "../../Post"
import SEO from "../../seo"
import "./style.scss"
import useSiteMetadata from "../../../utils/site-metadata"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import SideBar from "../../sidebar"
import { graphql, useStaticQuery } from "gatsby"

deckDeckGoHighlightElement()

interface Props {
  title: string
  description: string
  keywords: string
  domain: string
  socialNetworks: any
  html: string
}
const BlogPost = props => {
  const { title, description, keywords, domain, html, imgFluid } =
    props.pageContext
  const { path } = props
  const { siteUrl } = useSiteMetadata()
  const { site, allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                description
                keywords
                domain
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
              html
            }
          }
        }
      }
    `,
  )

  return (
    <section className="page-container">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        image={imgFluid.src}
      />
      <SideBar />
      <Post
        title={title}
        url={`${siteUrl}${path}`}
        identifier={`${siteUrl}${path}`}
        imageFluid={imgFluid}
        domain={domain}
        keywords={keywords}
      >
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="project-content"
        />
      </Post>
    </section>
  )
}

export default BlogPost

// export const query = graphql`
//   query BlogPostBySlug($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         description
//         keywords
//       }
//     }
//   }
// `
