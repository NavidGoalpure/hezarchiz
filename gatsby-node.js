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

// 1. This is called once the data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  // 1.1 Getting the method to create pages
  const { createPage } = actions
  // 1.2 Tell which layout Gatsby should use to thse pages
  const blogLayout = path.resolve(`./src/components/blogPost.js`)
  const blogListLayout = path.resolve(`./src/pages/index.js`)

  // 2 Return the method with the query
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
    }
  `).then(result => {
    // 2.1 Handle the errors
    if (result.errors) {
      console.error(result.errors)
      // reject(result.errors)
    }

    // 2.2 listing pages are here
    const allOfPages = result.data.allDirectory.edges
    const categoriesPage = []
    console.log(" allOfPages=", allOfPages)
    Object.entries(allOfPages).map(page => {
      if (page[1].node.relativePath !== "")
        categoriesPage.push(`/${page[1].node.relativePath}`)
    })
    console.log(" categoriesPage=", categoriesPage)
    // if (typeof page !== undefined && page?.node?.relativePath !== "")
    // categoriesPage.push(`/${page?.node?.relativePath}`)

    // allOfPages.map(page => {
    //   console.log("page=", page)
    // })

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
  })
}
