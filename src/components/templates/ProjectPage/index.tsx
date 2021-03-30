import React from "react"
import { graphql } from "gatsby"
import Default from "../../default"
import Post from "../../Post"
import SEO from "../../seo"
import "./style.scss"
import useSiteMetadata from "../../../utils/site-metadata"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

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
  const {
    title,
    description,
    keywords,
    domain,
    html,
    imgFluid,
  } = props.pageContext
  const { path } = props
  const { siteUrl } = useSiteMetadata()

  return (
    <section className="page-container">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        image={imgFluid.src}
      />
      <Default />
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
