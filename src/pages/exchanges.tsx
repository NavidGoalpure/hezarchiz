import React from "react"
import SEO from "../components/seo"
import Default from "../components/default"
import BlogList from "../components/blogList"

const IndexPage: React.FC<Props> = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <SEO title="هزارچیز" />
      <Default></Default>
      <BlogList includePhrase="exchange"></BlogList>
    </div>
  )
}

export default IndexPage
