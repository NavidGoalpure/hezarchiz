import React from "react"
import SEO from "../../components/seo"
import "../../styles/pages/404.scss"
import SideBar from "../../components/sidebar"

const NotFoundPage = () => (
  <section className="page-container">
    <SEO title="404: Page Not Found" />
    <SideBar />
    <section className="page404-article">
      <div className="contaniner glass-container">
        <p>صفحه مورد نظر پیدا نشد</p>
      </div>
    </section>
  </section>
)

export default NotFoundPage
