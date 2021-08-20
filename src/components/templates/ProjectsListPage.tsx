import React from "react"
import SEO from "../seo"

import BlogList from "../blogList"
import { getMetaForListingPages } from "../seo/utils"
import SideBar from "../sidebar"

interface Props {
  pageContext: {
    slug: string
  }
}
const IndexPage: React.FC<Props> = ({ pageContext }) => {
  const smartSlug = pageContext.slug?.replace("/", "") || "all"
  return (
    <section className="page-container">
      <SEO
        title={getMetaForListingPages(smartSlug)?.title}
        description={getMetaForListingPages(smartSlug)?.desc}
        keywords={getMetaForListingPages(smartSlug)?.keywords}
      />
      <SideBar />
      <BlogList includePhrase={smartSlug}></BlogList>
    </section>
  )
}

export default IndexPage
