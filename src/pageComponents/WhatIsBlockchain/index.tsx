import React, { useEffect, useRef } from "react"
import SideBar from "../../components/sidebar"
import "./what-is-blockchain.scss"
//@ts-ignore
import BLOCKSpacer from "./images/BLOCK-spacer.png"
import WhatIsBlockchainHeader from "./WhatIsBlockchainHeader"
import Chapter1 from "./Chapter1"
import Chapter2 from "./Chapter2"
import Chapter3 from "./Chapter3"
import Chapter4 from "./Chapter4"
import SEO from "../../components/seo"

const WhatIsBlockchain: React.FC = props => {
  const elementRef = useRef()
  useEffect(() => {
    if (elementRef && elementRef.current) {
      //@ts-ignore
      elementRef.current.focus()
      //
    }
  }, [elementRef])
  return (
    <>
      <SEO
        title={"بلاکچین چیست ۱۴۰۰"}
        description={"آموزش کامل بلاکچین درسال 1400(به زبان ساده)هزارچیز"}
        keywords={["بلاکچین", "بلاکچین چیست"]}
      />
      <section className="page-container" ref={elementRef} tabIndex={1}>
        <SideBar />
        <div className="main ">
          <video
            className="video topper-video hidden-sm-down mtz-vlc-pboid"
            playsInline
            autoPlay
            muted
            loop
            height="154px"
          >
            <source
              src="https://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/images/videos-lg/topper.mp4"
              type="video/mp4"
            />
          </video>
          <video
            className="video topper-video hidden-md-up mtz-vlc-pboid"
            playsInline
            autoPlay
            muted
            loop
          >
            <source
              src="https://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/images/videos-sm/sm-topper.mp4"
              type="video/mp4"
            />
          </video>
          <div className="home-content">
            <div className="title-page">
              <WhatIsBlockchainHeader />
              <Chapter1 />
              <Chapter2 />
              <Chapter3 />
              <Chapter4 />
              <div className="row">
                <div className="col-12 mt-1 break">
                  <img
                    className="chapter-img img-responsive mx-auto d-block"
                    src={BLOCKSpacer}
                  />
                  <p className="credit text-center  break-after">
                    گرافیک: Maryanne Murray
                    <br />
                    ویرایش بصری: Sarah Slobin
                    <br />
                    ترجمه و اجرای فارسی: Navid Goalpure
                  </p>
                  <p className="text-center break-after">
                    اگر به دنبال پروژه های تخصصی آموزش بلاکچین هستید، از
                    صفحه&nbsp;
                    <a href={"/learning"}>آموزش بلاکچین</a>
                    &nbsp;دیدن کنید
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhatIsBlockchain
