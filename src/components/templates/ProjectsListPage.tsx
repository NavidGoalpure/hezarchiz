import React from "react"
import SEO from "../seo"
import Default from "../default"
import BlogList from "../blogList"
import Img from "gatsby-image"

interface Props {
  pageContext: { slug: string }
}
// const IndexPage: React.FC<Props> = ({ pageContext: { slug } }) => {
const IndexPage: React.FC<Props> = ({ pageContext }) => {
  console.log("navid pageContext=", pageContext)
  const smartSlug = pageContext.slug?.replace("/", "") || "all"
  return (
    <section className="page-container">
      <SEO title="هزارچیز" />
      <Default></Default>
      <BlogList includePhrase={smartSlug}></BlogList>
    </section>
  )
}

export default IndexPage
