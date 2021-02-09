import React from "react"
import SEO from "../components/seo"
import Default from "../components/default"
import Post from "../components/post"

const NotFoundPage = () => (
  <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
    <SEO title="404: Page Not Found" />
    <Default />
    <Post title="404 Page">
      <p>Nothing found! Try again.</p>
    </Post>
  </div>
)

export default NotFoundPage
