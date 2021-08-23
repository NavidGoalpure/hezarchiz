import React, { useRef } from "react"
//@ts-ignore
import BLOCKSpacer from "../WhatIsBlockchain/images/BLOCK-spacer.png"
//@ts-ignore
import componentsWide from "../WhatIsBlockchain/images/components-wide.jpg"
//@ts-ignore
import componentsSmall from "../WhatIsBlockchain/images/components-small.jpg"
//@ts-ignore
import posterVideo1 from "../WhatIsBlockchain/images/poster-video-1.png"
//@ts-ignore
import posterVideo2 from "../WhatIsBlockchain/images/poster-video-2.png"
//@ts-ignore
import posterVideo3 from "../WhatIsBlockchain/images/poster-video-3.png"
//@ts-ignore
import posterVideo4 from "../WhatIsBlockchain/images/poster-video-4.png"
//@ts-ignore
import "../WhatIsBlockchain/chapter1.scss"

const Chapter1: React.FC = props => {
  const video1El = useRef(null)
  const onVideo1Click = () => {
    //@ts-ignore
    if (video1El.current.currentTime == video1El.current.duration) {
      //@ts-ignore
      video1El.current.play()
    }
  }
  //
  const smVideo1El = useRef(null)
  const onSmVideo1Click = () => {
    //@ts-ignore
    if (smVideo1El.current.currentTime == smVideo1El.current.duration) {
      //@ts-ignore
      smVideo1El.current.play()
    }
  }
  /////////////////
  const video2El = useRef(null)
  const onVideo2Click = () => {
    //@ts-ignore
    if (video2El.current.currentTime == video2El.current.duration) {
      //@ts-ignore
      video2El.current.play()
    }
  }

  const smVideo2El = useRef(null)
  const onSmVideo2Click = () => {
    //@ts-ignore
    if (smVideo2El.current.currentTime == smVideo2El.current.duration) {
      //@ts-ignore
      smVideo2El.current.play()
    }
  }
  //////////////////////
  const video3El = useRef(null)
  const onVideo3Click = () => {
    //@ts-ignore
    if (video3El.current.currentTime == video3El.current.duration) {
      //@ts-ignore
      video3El.current.play()
    }
  }
  //
  const smVideo3El = useRef(null)
  const onSmVideo3Click = () => {
    //@ts-ignore
    if (smVideo3El.current.currentTime == smVideo3El.current.duration) {
      //@ts-ignore
      smVideo3El.current.play()
    }
  }
  /////////////////
  const video4El = useRef(null)
  const onVideo4Click = () => {
    //@ts-ignore
    if (video4El.current.currentTime == video4El.current.duration) {
      //@ts-ignore
      video4El.current.play()
    }
  }
  //
  const smVideo4El = useRef(null)
  const onSmVideo4Click = () => {
    //@ts-ignore
    if (smVideo4El.current.currentTime == smVideo4El.current.duration) {
      //@ts-ignore
      smVideo4El.current.play()
    }
  }
  /////////////////
  return (
    <div className="chapter-marker" data-id="chap-1">
      <div className="home-chapter1-container">
        <img
          loading="lazy"
          className="chapter-img img-responsive mx-auto d-block break"
          src={BLOCKSpacer}
        />
        <h2 className="srepgfx-chapter">یک دیتابیس</h2>
        <p className="srepgfx-chapter-intro">
          بلاکچین، دیتابیسی است که اطلاعات را داخل «بلاک» هایی ثبت می‌کند که
          زنجیروار پشت سر هم قرار می‌گیرند. بلاکچین از بخش های زیر تشکیل شده
          است:
        </p>

        <div className="chapter1-section-container">
          <div>
            <img
              loading="lazy"
              className="img-fluid d-md-none"
              src={componentsSmall}
            />
            <img
              loading="lazy"
              className="img-fluid d-none d-md-block"
              src={componentsWide}
            />
          </div>

          <div className="row">
            <div className="row justify-content-between home-chapter1-row">
              <div className="chapter1-row-item item3 ">
                <p className="srepgfx-label">زنجیره</p>
                <p className="srepgfx-sublabel">
                  مجموعه ای از بلاک های متصل به هم می‌باشد
                </p>
              </div>
              <div className="chapter1-row-item item2">
                <p className="srepgfx-label">بلاک</p>
                <p className="srepgfx-sublabel">مجموعه ای از رکوردها</p>
              </div>

              <div className="chapter1-row-item item1">
                <p className="srepgfx-label">رکورد</p>
                <p className="srepgfx-sublabel">
                  هر نوع اطلاعاتی که بخواهیم روی بلاکچین ثبت کنیم. مثل انتقال
                  بیتکوین بین دو حساب{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* chapter 1 - scn01 - the record */}
      <div className="scroll-item-container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <p className="srepgfx-chapter-intro break">
              برای ذخیره یک تراکنش در بلاکچین، مراحل زیر انجام می‌شود:
            </p>
            <h3 className="srepgfx-label centered ">مرحله ۱</h3>
          </div>
          <div className="col-md-7">
            <p className="srepgfx-dek centered">
              ثبت تراکنش. مثلا آقای «سگ سبیل» کالای خود را در ازای ۲۰۰ دلار به
              آقای «شیش تیغه» میفروشد. در این رکورد، جزییات تراکنش، شامل یک
              امضای دیجیتالی طرفین ذخیره می‌شود.
            </p>
          </div>
          <div className="scroll-item" id="scroll-video-0">
            <div
              className="row justify-content-center"
              style={{ height: "23rem" }}
            >
              <div className="col-xl-10 scroll-video-holder">
                <video
                  className="video master-video hidden-sm-down mtz-vlc-pboid"
                  playsInline
                  autoPlay
                  muted
                  poster={posterVideo1}
                  ref={video1El}
                  onClick={onVideo1Click}
                >
                  <source
                    src="https://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/images/videos-lg/video-1.mp4"
                    type="video/mp4"
                  />
                </video>
                <video
                  className="video master-video hidden-md-up mtz-vlc-pboid"
                  playsInline
                  autoPlay
                  muted
                  poster={posterVideo1}
                  ref={smVideo1El}
                  onClick={onSmVideo1Click}
                >
                  <source
                    src="https://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/images/videos-sm/sm-video-1.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* chapter 1 - scn01 - the record */}
      <div className="scroll-item-container">
        <div className="row justify-content-center">
          <h3 className="srepgfx-label centered">مرحله ۲</h3>
          <p className="srepgfx-dek centered">
            شبکه، اطلاعات تراکنش را توسط نودهایش بررسی می‌کند تا از صحت آن مطمئن
            شود. . این نودها همان کامپیوترهایی هستند که به شبکه متصل شده اند.
            <div className=""></div>
          </p>
        </div>
        <div className="scroll-item" id="scroll-video-1">
          <div
            className="row justify-content-center"
            style={{ height: "23rem" }}
          >
            <div className="col-xl-10 scroll-video-holder">
              <video
                className="video master-video hidden-sm-down mtz-vlc-pboid"
                playsInline
                autoPlay
                muted
                poster={posterVideo2}
                ref={video2El}
                onClick={onVideo2Click}
              >
                <source
                  src="https://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/images/videos-lg/video-2.mp4"
                  type="video/mp4"
                />
              </video>
              <video
                className="video master-video hidden-md-up mtz-vlc-pboid"
                playsInline
                autoPlay
                muted
                poster={posterVideo2}
                ref={smVideo2El}
                onClick={onSmVideo2Click}
              >
                <source
                  src="https://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/images/videos-sm/sm-video-2.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* chapter 1 - scn03  the block*/}
      <div className="scroll-item-container">
        <div className="scroll-item-content">
          <div className="row justify-content-center">
            <h3 className="srepgfx-label centered">مرحله ۳</h3>
            <p className="srepgfx-dek centered">
              اطلاعات هر بلاک، رمزنگاری شده و یک خروجی منحصر به فرد که (هش) نام
              دارد از آن به دست می‌آید. البته توجه کنید که هر بلاک، به جز هش
              خود، هش بلاک قبلی را هم در خود نگهداری می‌کند.
            </p>
          </div>
        </div>
        <div className="scroll-item" id="scroll-video-2">
          <div
            className="row justify-content-center"
            style={{ height: "23rem" }}
          >
            <div className="col-xl-10 scroll-video-holder">
              <video
                className="video master-video hidden-sm-down mtz-vlc-pboid"
                playsInline
                autoPlay
                muted
                poster={posterVideo3}
                ref={video3El}
                onClick={onVideo3Click}
              >
                <source
                  src="https://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/images/videos-lg/video-2.mp4"
                  type="video/mp4"
                />
              </video>
              <video
                className="video master-video hidden-md-up mtz-vlc-pboid"
                playsInline
                autoPlay
                muted
                poster={posterVideo3}
                ref={smVideo3El}
                onClick={onSmVideo3Click}
              >
                <source
                  src="https://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/images/videos-sm/sm-video-3.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* chapter 1 - scn04 - the chain */}
      <div className="scroll-item-container">
        <div className="scroll-item-content">
          <div className="row justify-content-center">
            <h3 className="srepgfx-label centered full-width">مرحله ۴</h3>
            <p className="srepgfx-dek centered">
              بلاک جدید به انتهاب بلاکچین اضافه می‌شود و از طریق تکنولوژی هش، به
              بلاک قبلی پیوند می‌خورد.
              <br />
              (اگر حواستان باشد، قبلا گفتیم هش بلاک قبلی در بلاک جدید ذخیره
              می‌شود)
              <br />
              در نهایت تمام بلاک های زنجیره، از طریق هش ها به یکدیگر زنجیر
              می‌شوند.
            </p>
          </div>
        </div>
        <div className="scroll-item" id="scroll-video-3">
          <div
            className="row justify-content-center"
            style={{ height: "23rem" }}
          >
            <div className="col-xl-10 scroll-video-holder">
              <video
                className="video master-video hidden-sm-down mtz-vlc-pboid"
                playsInline
                autoPlay
                muted
                poster={posterVideo4}
                ref={video4El}
                onClick={onVideo4Click}
              >
                <source
                  src="https://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/images/videos-lg/video-4.mp4"
                  type="video/mp4"
                />
              </video>
              <video
                className="video master-video hidden-md-up mtz-vlc-pboid"
                playsInline
                autoPlay
                muted
                poster={posterVideo4}
                ref={smVideo4El}
                onClick={onSmVideo4Click}
              >
                <source
                  src="https://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/images/videos-sm/sm-video-4.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* chapter 1 CONTENT END */}
    </div>
  )
}

export default Chapter1
