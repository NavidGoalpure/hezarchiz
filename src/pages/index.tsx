import React from "react"
import SEO from "../components/seo"
import SideBar from "../components/sidebar"
import DogVideo from "../assets/videos/topper.mp4"

const IndexPage: React.FC = props => {
  return (
    <section className="page-container">
      <SEO />
      <SideBar />
      <video playsInline autoPlay muted loop>
        <source src={DogVideo} type="video/mp4" />
      </video>
    </section>
  )
}

export default IndexPage
