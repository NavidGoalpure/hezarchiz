import React from "react"
import SEO from "../seo"

import BlogList from "../blogList"
import { getMetaForListingPages } from "../seo/utils"
import SideBar from "../sidebar"

interface Props {
  path: string
  pageContext: {
    slug: string
  }
}
const IndexPage: React.FC<Props> = ({ pageContext, path }) => {
  const smartSlug = pageContext.slug?.replace("/", "") || "all"
  return (
    <section className="page-container">
      <SEO
        title={getMetaForListingPages(smartSlug)?.title}
        description={getMetaForListingPages(smartSlug)?.desc}
        keywords={getMetaForListingPages(smartSlug)?.keywords}
      />
      <SideBar />
      <BlogList includePhrase={smartSlug} path={path}></BlogList>
    </section>
  )
}

export default IndexPage
