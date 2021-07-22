import { Link } from "gatsby"
import React from "react"
import "./PostCard.scss"
import Img, { FluidObject } from "gatsby-image"

interface Props {
  slug: string
  title: string
  description: string

  domainName: string
  imageFluid: FluidObject[]
  logoFluid: FluidObject[]
  refCurrent: any
}
const PostCard: React.FC<Props> = ({
  slug,
  title,
  description,
  domainName,
  imageFluid,
  logoFluid,
  refCurrent,
}) => {
  return (
    <div className="h-card">
      <div className="container">
        <div className="out-div dark-glass">
          <div className="profile">
            <div className="img-box">
              <Img fluid={logoFluid} alt={`Icon for ${title}`} />
            </div>
            <div className="details">
              <h2>{title}</h2>
            </div>
            <h3>{domainName}</h3>
          </div>
        </div>
        <div className="top">
          <div className="img-box green-glass">
            <Img
              fluid={imageFluid}
              imgStyle={{ transition: "all 0.7s" }}
              alt={`Cover for ${title}`}
            />
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
