import React from "react"
import SEO from "../components/seo"
import BlogList from "../components/blogList"
import SideBar from "../components/sidebar"

const IndexPage: React.FC = props => {
  return (
    <section className="page-container">
      <SEO />
      <SideBar />
      <BlogList includePhrase="all"></BlogList>
    </section>
  )
}

export default IndexPage
