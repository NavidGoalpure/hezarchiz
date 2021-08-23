import React, { useEffect, useRef } from "react"
import SideBar from "../../components/sidebar"
import "../WhatIsBlockchain/what-is-blockchain.scss"
//@ts-ignore
import BLOCKSpacer from "../WhatIsBlockchain/images/BLOCK-spacer.png"
import WhatIsBitcoinHeader from "./WhatIsBitcoinHeader"
import Chapter1 from "./Chapter1"
import Chapter2 from "./Chapter2"
import Chapter3 from "./Chapter3"
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
        title={"بیتکوین چیست"}
        description={"بیتکوین چیست؟ یک آموزش جذاب"}
        keywords={["بیتکوین", "بیتکوین چیست"]}
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
              <WhatIsBitcoinHeader />
              <Chapter1 />
              <Chapter2 />
              <Chapter3 />
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
                    اگر به دنبال پروژه های مربوط به بیتکوین هستید، از صفحه
                    <a href={"/bitcoin"}>&nbsp;بیتکوین&nbsp;</a>
                    دیدن کنید
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
