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
    <div className="hezarxhiz-card">
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

        <button>See More</button>
      </div>
    </div>
  )
}
export default PostCard

// const Card = styled.article`
//   width: 240px;
//   height: 470px;
//   box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
//   background-color: rgba(255, 255, 255, 0.6);
//   border-radius: 12px;
//   backdrop-filter: blur(10);
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   transition: 0.6s ease-in-out;
//   transform: scale(0.8);
// `
// const OutDiv = styled.div`
//   position: absolute;
//   z-index: 3;
//   width: 200px;
//   transition: 0.6s ease-in-out;
//   background-color: rgba(0, 0, 0, 0.3);
//   height: 140px;
//   backdrop-filter: blur(12px);
//   top: 15%;
//   right: -25%;
//   box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.4);
//   border-radius: 12px;
//   display: flex;
//   flex-direction: column;
//   padding: 0.4rem 0.6rem;
//   justify-content: space-evenly;
// `
// const Profile = styled.div`
//   display: flex;
//   align-items: center;
//   .details {
//     margin-left: 0.4rem;
//     h3 {
//       font-family: "EB Garamond", serif;
//       color: white;
//     }
//   }
// `
// const ImageBox = styled.div`
//   width: 48px;
//   height: 48px;
//   overflow: hidden;
//   border-radius: 24px;
//   img {
//     width: 100%;
//     height: 100%;
//   }
// `

{
  /* <article classNameNameName="main-article">
      <div classNameNameName="wrap-content">
        <header classNameNameName="header-article">
          <h2 classNameNameName="title-article">
            <Link to={slug}>{title}</Link>
          </h2>
          <div classNameNameName="post-date">
            <span>{date}&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div>
        </header>
        <P>
          {description} <Link to={slug}>(Read more ...)</Link>
        </P>
      </div>
    </article> */
}
{
  /* <Card>
      <OutDiv>
        <Profile>
          <ImageBox>
            <img src="https://drive.google.com/uc?export=view&id=1OpHCed5lRYE33pH55PsALZTpottPWIKN"></img>
          </ImageBox>
          <div classNameName="details">
            <h3>Jacob Max</h3>
            <p>Senior Coach</p>
          </div>
        </Profile>
        <p>
          Good job everyone! We've completed 1/4 of the whole trip. We will
          depart 7am tomorrow.
        </p>
      </OutDiv>
      <div classNameName="top">
        <i classNameName="fa fa-arrow-left" aria-hidden="true"></i>
        <div classNameName="img-box">
          <img src="https://drive.google.com/uc?export=view&id=1Vq3yJ0-pQaOJwryTfA0fseHEWXbCnHT0" />
        </div>
      </div>
    </Card> */
}
