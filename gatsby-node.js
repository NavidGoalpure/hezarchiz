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
    console.log(" categoriesPage=", categoriesPage)

    // const postsPerPage = 5
    // const numPages = Math.ceil(posts.length / postsPerPage)

    // Creating blog list with pagination
    // Array.from({ length: numPages }).forEach((_, i) => {
    //   createPage({
    //     path: i === 0 ? `/` : `/page/${i + 1}`,
    //     component: path.resolve(`./src/components/PageTemplate.tsx`),
    //     context: {
    //       limit: postsPerPage,
    //       skip: i * postsPerPage,
    //       currentPage: i + 1,
    //       numPages,
    //     },
    //   })
    // })

    // 3 Loop throught all posts
    categoriesPage.forEach((listingPage, index) => {
      // 3.1 Finally create posts

      createPage({
        path: listingPage,
        component: path.resolve(`./src/components/PageTemplate.tsx`),
        context: {
          slug: listingPage,
        },
      })
    })
    console.log("navid html=", markdownPages[0].node.html)
    markdownPages.map(page => {
      // 3.1 Finally create posts

      createPage({
        path: page.node.fields.slug,
        component: path.resolve(`./src/components/blogPost.tsx`),
        context: {
          title: page.node.frontmatter.title,
          description: page.node.frontmatter.description,
          keywords: page.node.frontmatter.keywords,
          domain: page.node.frontmatter.title,
          html: page.node.html,
        },
      })
    })
  })
}
