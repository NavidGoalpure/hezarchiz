/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const slug = value.replace("/posts/", "").replace(/\/$/, "")
    const url = `${slug}`

    createNodeField({
      name: `slug`,
      node,
      value: url,
    })
  }
}

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query allPages {
      allDirectory {
        edges {
          node {
            base
            relativePath
            dir
          }
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___title], order: DESC }) {
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
            }
            html
          }
        }
      }
    }
  `).then(result => {
    // 2.1 Handle the errors
    if (result.errors) {
      console.error(result.errors)
      // reject(result.errors)
    }

    // 2.2 listing pages are here
    const markdownPages = result.data.allMarkdownRemark.edges

    const allOfPages = result.data.allDirectory.edges
    const categoriesPage = []
    Object.entries(allOfPages).map(page => {
      if (page[1].node.relativePath !== "")
        categoriesPage.push(`/${page[1].node.relativePath}`)
    })
    categoriesPage.forEach((listingPage, index) => {
      createPage({
        path: listingPage,
        component: path.resolve(
          `./src/components/templates/ProjectsListPage.tsx`
        ),
        context: {
          slug: listingPage,
        },
      })
    })
    // create project pages
    markdownPages.map(page => {
      createPage({
        path: page.node.fields.slug,
        component: path.resolve(
          `./src/components/templates/ProjectPage/index.tsx`
        ),
        context: {
          title: page.node.frontmatter.title,
          description: page.node.frontmatter.description,
          keywords: page.node.frontmatter.keywords,
          domain: page.node.frontmatter.domain,
          imgFluid: page.node.frontmatter.img.children[0].fluid,
          html: page.node.html,
        },
      })
    })
  })
}
