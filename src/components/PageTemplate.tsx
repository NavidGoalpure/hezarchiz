import React from "react"
import SEO from "../components/seo"
import Default from "../components/default"
import BlogList from "../components/blogList"

interface Props {
  pageContext: { slug: string }
}
const IndexPage: React.FC<Props> = ({ pageContext: { slug } }) => {
  const smartSlug = slug?.replace("/", "") || "all"
  return (
    <section className="main-section">
      <SEO title="هزارچیز" />
      <Default></Default>
      <BlogList includePhrase={smartSlug}></BlogList>
    </section>
  )
}

export default IndexPage
