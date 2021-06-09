module.exports = {
  siteMetadata: {
    title: `هزارچیز`,
    description: `مرجع معرفی پروژه های بلاکچین ایران`,
    siteUrl: `https://hezarchiz.com`,
    keywords: ["هزارچیز", "لیست پروژه های بلاکچین", "بلاکچین"],
    social: {
      github: ``,
      email: `navid.goalpure@gmail.com`,
      linkedin: ``,
      formspree: "",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `هزارچیز`,
        short_name: `هزارچیز`,
        start_url: `/`,
        background_color: `#2d2a2a`,
        theme_color: `#2d2a2a`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/projects/categories`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `hezarchiz`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `hezarchiz`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ["**/*.{js,jpg,png,html,css}"],
        },
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
