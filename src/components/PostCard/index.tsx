import { Link } from "gatsby"
import React from "react"
import "./PostCard.scss"
interface Props {
  slug: string
  title: string
  date: string
  description: string
}
const PostCard: React.FC<Props> = ({ slug, title, date, description }) => {
  return (
    <div className="h-card">
      <div className="container">
        <div className="out-div">
          <div className="profile">
            <div className="img-box">
              <img src="https://drive.google.com/uc?export=view&id=1OpHCed5lRYE33pH55PsALZTpottPWIKN" />
            </div>
            <div className="details">
              <h3>{title}</h3>
            </div>
          </div>
        </div>
        <div className="top">
          <div className="img-box">
            <img src="https://drive.google.com/uc?export=view&id=1Vq3yJ0-pQaOJwryTfA0fseHEWXbCnHT0" />
          </div>
        </div>
        <div className="bottom">
          <p>{description}</p>

          <button>مشاهده بیشتر</button>
        </div>
      </div>
    </div>
  )
}
export default PostCard
