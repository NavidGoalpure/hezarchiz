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
import Logo from "../../images/logo.png"

function SEO({ description, lang, meta, title, keywords, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `
  )

  const smartTitle = title || site.siteMetadata.description
  const smartDescription = description || site.siteMetadata.description
  const smartKeywords = keywords || site.siteMetadata.keywords
  const smartImage = image || Logo
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
  title: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
}

export default SEO
