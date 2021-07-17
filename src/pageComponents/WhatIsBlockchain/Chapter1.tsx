import React, { useRef } from "react"
//@ts-ignore
import BLOCKSpacer from "./images/BLOCK-spacer.png"
//@ts-ignore
import componentsWide from "./images/components-wide.jpg"
//@ts-ignore
import componentsSmall from "./images/components-small.jpg"
//@ts-ignore
import posterVideo1 from "./images/poster-video-1.png"
//@ts-ignore
import posterVideo2 from "./images/poster-video-2.png"
//@ts-ignore
import posterVideo3 from "./images/poster-video-3.png"
//@ts-ignore
import posterVideo4 from "./images/poster-video-4.png"
//@ts-ignore
import "./chapter1.scss"

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
        <p className="srepgfx-chapter">یک دیتابیس</p>
        <p className="srepgfx-chapter-intro">
          در این دیتابیس، رکورد‌ها در داخل «بلاک ها» ذخیره می‌شوند و این بلاک ها
          نیز به نوبه خود یکی پس از دیگری در زنجیره قرار می‌گیرند. این‌ها
          بخش‌های اساسی یک بلاکچین هستند:
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
              <div className="chapter1-row-item item1">
                <p className="srepgfx-label">رکورد</p>
                <p className="srepgfx-sublabel">
                  می‌تواند هرگونه اطلاعاتی باشد. مثلا اطلاعات یک معامله
                </p>
              </div>
              <div className="chapter1-row-item item2">
                <p className="srepgfx-label">بلاک</p>
                <p className="srepgfx-sublabel">مجموعه ای از رکوردها</p>
              </div>
              <div className="chapter1-row-item item3 ">
                <p className="srepgfx-label">زنجیره</p>
                <p className="srepgfx-sublabel">
                  همه بلاک‌ها به همدیگر متصل می‌شوند
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* chapter 1 - scn01 - the record */}

      <div className="row justify-content-center full-height">
        <div className="col-lg-9">
          <p className="srepgfx-chapter-intro break">
            برای ثبت یک معامله در بلاکچین، مراحل زیر طی می‌شود:
          </p>
          <p className="srepgfx-label centered ">مرحله اول</p>
        </div>
        <div className="col-md-7">
          <p className="srepgfx-dek centered">
            معامله ثبت می شود. به عنوان مثال ، بگذارید بگوییم آقای «صورتی» دو
            سکه خود را به قیمت 100 دلار به آقای «سبز» می فروشد. در این رکورد،
            جزییات تراکنش ، از جمله یک امضای دیجیتالی از هر طرف ثبت می‌گردد.
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
                  src="https://storageapi.fleek.co/navidgoalpure-team-bucket/video-1.mp4"
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
                  src="https://storageapi.fleek.co/navidgoalpure-team-bucket/sm-video-1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* chapter 1 - scn01 - the record */}
      <div className="scroll-item-container full-height">
        <div className="row justify-content-center">
          <p className="srepgfx-label centered">مرحله دوم</p>
          <p className="srepgfx-dek centered">
            رکورد (اطلاعات معامله) به وسیله شبکه بررسی می‌شود. کامپیوترهایی که
            به شبکه متصل هستند را «نود» می‌نامیم. این نود ها جزییات تراکنش را
            بررسی می‌کنند تا چیزی اشتباه نباشد.
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
                  src="https://storageapi.fleek.co/navidgoalpure-team-bucket/video-2.mp4"
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
                  src="https://storageapi.fleek.co/navidgoalpure-team-bucket/sm-video-3.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* chapter 1 - scn03  the block*/}
      <div className="scroll-item-container full-height">
        <div className="scroll-item-content">
          <div className="row justify-content-center">
            <p className="srepgfx-label centered">مرحله سوم</p>
            <p className="srepgfx-dek centered">
              رکوردی که توسط شبکه تایید شده، به یک بلاک اضافه می‌شود. هر بلاک
              شامل یک کد منحصر به فرد می‌باشد که «هش» (HASH) نامیده می‌شود. هر
              بلاک علاوه بر «هش خود»، «هش بلاک قبلی» را نیز در خود ذخیره می‌کند
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
                  src="https://storageapi.fleek.co/navidgoalpure-team-bucket/video-3.mp4"
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
                  src="https://storageapi.fleek.co/navidgoalpure-team-bucket/sm-video-3.mp4"
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
            <p className="srepgfx-label centered full-width">مرحله چهارم</p>
            <p className="srepgfx-dek centered">
              برای اضافه شدن بلاک جدید به بلاک چین، این بلاک از طریق تکنولوژی هش
              به بلاک قبلی متصل می‌شود <br /> (به خاطر دارید که گفتیم هش بلاک
              قبلی در بلاک جدید ذخیره می‌شود؟)
              <br /> در یک نمای کلی تمام بلاک های بلاک چین از طریق هش ها به
              یکدیگر متصل هستند.
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
                  src="https://storageapi.fleek.co/navidgoalpure-team-bucket/video-4.mp4"
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
                  src="https://storageapi.fleek.co/navidgoalpure-team-bucket/sm-video-4.mp4"
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
