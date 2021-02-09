import React from "react"
import SEO from "../../components/seo"
import Default from "../../components/default"
import "../../styles/pages/404.scss"

const NotFoundPage = () => (
  <section className="main-section">
    <SEO title="404: Page Not Found" />
    <Default />
    <section className="page404-article">
      <div className="contaniner glass-container">
        <p>صفحه مورد نظر پیدا نشد</p>
      </div>
    </section>
  </section>
)

export default NotFoundPage
