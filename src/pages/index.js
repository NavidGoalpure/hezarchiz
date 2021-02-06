import React from "react"
import SEO from "../components/seo"
import Default from "../components/default"
import BlogList from "../components/blogList"

const IndexPage = () => {
  return (
    <div>
      <SEO title="fresh" />
      <Default></Default>
      <BlogList></BlogList>
    </div>
  )
}

export default IndexPage
