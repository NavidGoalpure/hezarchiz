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
  refCurrent: any
}
const PostCard: React.FC<Props> = ({
  slug,
  title,
  description,
  domain,
  imageFluid,
  logoFluid,
  refCurrent,
}) => {
  function getdomainTitle(domain: string): string {
    return domain
      .replace("https://wwww.", "")
      .replace("https://", "")
      .replace("http://wwww.", "")
      .replace("http://", "")
  }
  return (
    <div className="h-card">
      <div className="container">
        <div className="out-div dark-glass">
          <div className="profile">
            <div className="img-box">
              <Img fluid={logoFluid} />
            </div>
            <div className="details">
              <h2>{title}</h2>
            </div>
            <h3>{getdomainTitle(domain)}</h3>
          </div>
        </div>
        <div className="top">
          <div className="img-box green-glass">
            <Img fluid={imageFluid} imgStyle={{ transition: "all 0.7s" }} />
          </div>
        </div>
        <div className="bottom green-glass">
          <p>{description}</p>
          <Link
            to={slug}
            className="button"
            onClick={() => {
              sessionStorage.setItem("listPageScroll", refCurrent.scrollTop)
            }}
          >
            مشاهده بیشتر
          </Link>
        </div>
      </div>
    </div>
  )
}
export default PostCard
