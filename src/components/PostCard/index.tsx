import { Link } from "gatsby"
import React from "react"
import "./PostCard.scss"
import Img, { FluidObject } from "gatsby-image"

interface Props {
  slug: string
  title: string
  description: string
  domain: string
  imageFluid: FluidObject[]
  logoFluid: FluidObject[]
}
const PostCard: React.FC<Props> = ({
  slug,
  title,
  description,
  domain,
  imageFluid,
  logoFluid,
}) => {
  return (
    <div className="h-card">
      <div className="container">
        <div className="out-div dark-glass">
          <div className="profile">
            <div className="img-box">
              {/* <img src="projects/categories/learning/bitcoind/logo.png" /> */}
              <Img fluid={logoFluid} />
            </div>
            <div className="details">
              <h2>{title}</h2>
            </div>
            <h3>{domain}</h3>
          </div>
        </div>
        <div className="top">
          <div className="img-box">
            <Img fluid={imageFluid} imgStyle={{ transition: "all 0.7s" }} />
          </div>
        </div>
        <div className="bottom green-glass">
          <p>{description}</p>
          <Link to={slug} className="button">
            مشاهده بیشتر
          </Link>
        </div>
      </div>
    </div>
  )
}
export default PostCard
