import React from "react"
import { graphql } from "gatsby"
import Default from "../../default"
import Post from "../../post"
import SEO from "../../seo"
import "./style.scss"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import useSiteMetadata from "../../../utils/site-metadata"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

interface Props {
  title: string
  description: string
  keywords: string
  domain: string
  html: string
}
const BlogPost = props => {
  const { title, description, keywords, domain, html } = props.pageContext
  const { path } = props
  const { siteUrl } = useSiteMetadata()

  let disqusConfig = {
    url: `${siteUrl}${path}`,
    identifier: `${siteUrl}${path}`,
    title: title,
  }
  var iframe = document.querySelector(
    'iframe[src^="https://disqusads.com/enable-logging"]'
  )

  return (
    <section className="page-container">
      <SEO title={title} description={description} keywords={keywords} />
      <Default></Default>
      <div>
        <Post title={title}>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className="project-content"
          />
        </Post>
        <CommentCount config={disqusConfig} placeholder={"..."} />
        <Disqus config={disqusConfig} />
      </div>
    </section>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        keywords
      }
    }
  }
`
