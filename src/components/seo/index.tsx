/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import Logo from "../../assets/images/logo.png"
import useSiteMetadata from "../../utils/site-metadata"

interface Props {
  description?: string
  lang?: string
  meta?: ConcatArray<
    { name: string; content: any } | { property: string; content: any }
  >
  title?: string
  keywords?: string
  image?: string
}

function SEO({
  description: descriptionProps,
  lang = `en`,
  meta = [],
  title: titleProps,
  keywords: keywordsProps,
  image,
}: Props) {
  const { siteUrl, title, keywords, description } = useSiteMetadata()
  const smartTitle = titleProps || title
  const smartDescription = descriptionProps || description
  const smartKeywords = keywords || keywordsProps
  const smartImage = `${siteUrl}${image || Logo}`
  const schemaOrgWebPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "آیا پروژه های نمایش داده شده در این سایت، از طرف هزارچیز تایید شده اند؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "خیر! این پروژه ها تنها برای آشنایی اولیه شما با آن‌هاست و هزارچیز هیچ تضمینی بابت صحت عملکرد و یا صحت اطلاعات آن ها نمی‌دهد. مسئولیت اعتبارسنجی این پروژه ها با خود شماست",
        },
      },
      {
        "@type": "Question",
        name: "چطور می‌توانم پروژه خود را به هزارچیز اضافه کنم",
        acceptedAnswer: {
          "@type": "Answer",
          text: "برای تماس با ما می‌توانید از لینک هایی که در سایت قرارداده شده است، استفاده نمایید.",
        },
      },
      {
        "@type": "Question",
        name: "سیستم درآمدی هزارچیز بر چه اساسی است؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "درحال حاضر هیچ پلن درآمدی به صورت فعال نداریم و این پروژه را به صورت عام المنفعه ادامه می‌دهیم",
        },
      },
    ],
  }
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
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebPage)}
      </script>
    </Helmet>
  )
}

export default SEO
