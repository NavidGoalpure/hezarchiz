import React from "react"
import SEO from "../seo"
import Default from "../default"
import BlogList from "../blogList"
import { getSmartMeta } from "../seo/utils"

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
        title="هزارچیز"
        customTitle={getSmartMeta(smartSlug)?.title}
        customDescription={getSmartMeta(smartSlug)?.desc}
        customKeywords={getSmartMeta(smartSlug)?.keywords}
      />
      <Default></Default>
      <BlogList includePhrase={smartSlug}></BlogList>
    </section>
  )
}

export default IndexPage
