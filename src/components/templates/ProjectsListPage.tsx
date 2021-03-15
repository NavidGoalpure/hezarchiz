import React from "react"
import SEO from "../seo"
import Default from "../default"
import BlogList from "../blogList"

interface Props {
  pageContext: { slug: string }
}
// const IndexPage: React.FC<Props> = ({ pageContext: { slug } }) => {
const IndexPage: React.FC<Props> = ({ pageContext }) => {
  const smartSlug = pageContext.slug?.replace("/", "") || "all"
  console.log("navid smartSlug= ", smartSlug)
  return (
    <section className="page-container">
      <SEO title="هزارچیز" />
      <Default></Default>
      <BlogList includePhrase={smartSlug}></BlogList>
    </section>
  )
}

export default IndexPage
