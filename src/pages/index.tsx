import React from "react"
import SEO from "../components/seo"
import Default from "../components/default"
import BlogList from "../components/blogList"

const IndexPage: React.FC = props => {
  console.log("navid inja")
  return (
    <section className="page-container">
      <SEO title="هزارچیز" />
      <Default></Default>
      <BlogList includePhrase="all"></BlogList>
    </section>
  )
}

export default IndexPage
