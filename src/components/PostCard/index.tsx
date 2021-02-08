import { Link } from "gatsby"
import React from "react"
import "./PostCard.scss"
interface Props {
  slug: string
  title: string
  description: string
  domain: string
}
const PostCard: React.FC<Props> = ({ slug, title, description, domain }) => {
  return (
    <div className="h-card">
      <div className="container">
        <div className="out-div">
          <div className="profile">
            <div className="img-box">
              <img src="https://drive.google.com/uc?export=view&id=1OpHCed5lRYE33pH55PsALZTpottPWIKN" />
            </div>
            <div className="details">
              <h2>{title}</h2>
            </div>
            <h3>{domain}</h3>
          </div>
        </div>
        <div className="top">
          <div className="img-box">
            <img src="https://drive.google.com/uc?export=view&id=1Vq3yJ0-pQaOJwryTfA0fseHEWXbCnHT0" />
          </div>
        </div>
        <div className="bottom">
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
