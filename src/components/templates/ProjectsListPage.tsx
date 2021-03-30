import React from "react"
import SEO from "../seo"
import Default from "../default"
import BlogList from "../blogList"
import { getMetaForListingPages } from "../seo/utils"

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
      <Default></Default>
      <BlogList includePhrase={smartSlug}></BlogList>
    </section>
  )
}

export default IndexPage
