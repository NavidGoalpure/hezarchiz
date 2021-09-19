import React from "react"
import Post from "../../Post"
import SEO from "../../seo"
import "./style.scss"
import useSiteMetadata from "../../../utils/site-metadata"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import SideBar from "../../sidebar"
import { graphql, useStaticQuery } from "gatsby"

deckDeckGoHighlightElement()
function findSubProject(
  allMarkdownRemark,
  path,
): Record<string, any>[] | undefined {
  const subProjects = []
  for (let key in allMarkdownRemark.edges) {
    const splitedPath: string = allMarkdownRemark.edges[
      key
    ]?.node.fields?.slug.replace(path, "")
    const onlyChildSubProject = splitedPath.split("/")[1]
    const onlyChildSubProjectPath = path + "/" + onlyChildSubProject
    if (
      allMarkdownRemark.edges[key]?.node.fields?.slug?.includes(path) && // زیرمجموعه اون پروژه باشه
      allMarkdownRemark.edges[key]?.node.fields?.slug ===
        onlyChildSubProjectPath && // فقط فرزند رو نشون بده و نوه و ... رو نشون نده
      allMarkdownRemark.edges[key]?.node.fields?.slug !== path // خود پروژه نباشه
    ) {
      subProjects.push(allMarkdownRemark.edges[key])
    }
  }
  return subProjects
}
interface Props {
  title: string
  description: string
  keywords: string
  domain: string
  socialNetworks: any
  html: string
}
const BlogPost = props => {
  const { title, description, keywords, domain, html, imgFluid } =
    props.pageContext
  const { path } = props
  const { siteUrl } = useSiteMetadata()
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                description
                keywords
                domain
                img {
                  children {
                    ... on ImageSharp {
                      fluid(maxWidth: 1920) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                      }
                    }
                  }
                }
                logo {
                  children {
                    ... on ImageSharp {
                      fluid(maxWidth: 48) {
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                      }
                    }
                  }
                }
              }
              html
            }
          }
        }
      }
    `,
  )

  return (
    <section className="page-container">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        image={imgFluid.src}
      />
      <SideBar />
      <Post
        title={title}
        url={`${siteUrl}${path}`}
        identifier={`${siteUrl}${path}`}
        imageFluid={imgFluid}
        domain={domain}
        keywords={keywords}
        subProjects={
          findSubProject(allMarkdownRemark, path).length > 0
            ? findSubProject(allMarkdownRemark, path)
            : undefined
        }
      >
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="project-content"
        />
      </Post>
    </section>
  )
}

export default BlogPost

// export const query = graphql`
//   query BlogPostBySlug($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         description
//         keywords
//       }
//     }
//   }
// `
