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

function SEO({
  description,
  lang,
  meta,
  title,
  keywords,
  customTitle,
  customDescription,

  customKeywords,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            image
          }
        }
      }
    `
  )

  const smartTitle = customTitle || description || site.siteMetadata.description
  const smartDescription =
    customDescription || description || site.siteMetadata.description
  const smartKeywords = customKeywords || keywords || site.siteMetadata.keywords
  const image = site.siteMetadata.image

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={smartTitle}
      description={smartDescription}
      meta={[
        {
          name: `description`,
          content: smartDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: image,
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
  title: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
  customTitle: PropTypes.string,
  customDescription: PropTypes.string,
  customKeywords: PropTypes.arrayOf(PropTypes.string),
}

export default SEO
