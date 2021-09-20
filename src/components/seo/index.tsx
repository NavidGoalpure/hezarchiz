/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "../../assets/images/logo.png"
import useSiteMetadata from "../../utils/site-metadata"

function SEO({
  description: descriptionProps,
  lang,
  meta,
  title: titleProps,
  keywords: keywordsProps,
  image,
}) {
  const { siteUrl, title, keywords, description } = useSiteMetadata()

  const smartTitle = titleProps || title
  const smartDescription = descriptionProps || description
  const smartKeywords = keywords || keywordsProps
  const smartImage = `${siteUrl}${image || Logo}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={smartTitle}
      meta={[
        {
          name: `description`,
          content: smartDescription,
        },
        {
          property: `og:title`,
          content: smartTitle,
        },
        {
          property: `og:image`,
          content: smartImage,
        },
        {
          property: `og:description`,
          content: smartDescription,
        },
        {
          property: `og:keywords`,
          content: smartKeywords,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
}

export default SEO
