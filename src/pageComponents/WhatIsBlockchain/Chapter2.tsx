import React, { useRef } from "react"
import "./chapter2.scss"
//@ts-ignore
import BLOCKSpacer from "./images/BLOCK-spacer.png"
//@ts-ignore
import TheTweet from "./images/thetweet.jpg"
//@ts-ignore
import BookClosed from "./images/book_closed.jpg"
//@ts-ignore
import BookOpen from "./images/book_open.jpg"
//@ts-ignore
import posterVideo5 from "./images/poster-video-5.png"
//@ts-ignore
import Video5 from "./videos/video-5.mp4"
//@ts-ignore
import SmVideo5 from "./videos/sm-video-5.mp4"

const Chapter2: React.FC = props => {
  /////////////////
  const video5El = useRef(null)
  const onVideo5Click = () => {
    //@ts-ignore
    if (video5El.current.currentTime == video5El.current.duration) {
      //@ts-ignore
      video5El.current.play()
    }
  }
  //
  const smVideo5El = useRef(null)
  const onSmVideo5Click = () => {
    //@ts-ignore
    if (smVideo5El.current.currentTime == smVideo5El.current.duration) {
      //@ts-ignore
      smVideo5El.current.play()
    }
  }
  /////////////////
  return (
    <div className="chapter-marker" data-id="chap-2">
      {/* <div className="break break-after"></div>
      <div className="break break-after"></div> */}
      {/* <!-- chapter 2 CONTENT START --> */}
      <div className="row justify-content-center break">
        <div className="fullwidth row justify-content-center">
          <img
            className="chapter-img img-responsive mx-auto d-block break"
            src={BLOCKSpacer}
          />
        </div>
        <p className="srepgfx-chapter fullwidth">
          تغییر آن بسیار دشوار خواهد بود
        </p>
        <p className="srepgfx-chapter-intro">
          «هش» رکوردها رو امن نگه می‌دارد.
        </p>
        <p className="srepgfx-dek break">
          «هش» برنامه ای است که از فرمول های ریاضی استفاده میکند تا بر اساس
          اطلاعات ورودی، رشته ای از حروف و اعداد تولید کند. بیایید نگاهی عمیق تر
          به دو خصوصیت مهم این برنامه بیندازیم:
        </p>
      </div>

      <div className="row justify-content-center">
        <p className="srepgfx-dek">
          خصوصیت اول: مهم نیست سایز فایل ورودی چقدر می‌باشد. تابع هش، همیشه یک
          خروجی با مقدار کاراکتر ثابت می‌سازد. برای مثال اولین توییت جک دورسی
          بسیار کوتاه تر از کتاب «جنگ و صلح» است که توسط لئو تولستوی نوشته شده،
          اما «هش» هردو نوشته، طول یکسانی دارد
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="  break">
          <div className="text-center ">
            <img className="smaller" src={TheTweet} />
          </div>
          <p className="srepgfx-label smidge text-center">
            طول هش (۳۲ بایت) توییت جک دورسی:
          </p>
          <p className="hash text-center ">
            c6f7257abff7b43959cd728f06c0c74230391640115cc3ea86a7e54be62aecc4
          </p>
        </div>

        <div className=" break-after">
          <div className="text-center">
            <img className="smaller" src={BookClosed} />
          </div>
          <p className="srepgfx-label smidge text-center">
            طول هش (۳۲ بایت) «جنگ و صلح»:
          </p>
          <p className="hash text-center ">
            a948904f2f0f479b8f8197694b30184b0d2ed1c1cd2a1ec0fb85d299a192a447
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-7">
          <p className="srepgfx-dek">
            خصوصیت دوم: هر تغییری -حتی کوچک- در مقدار ورودی، باعث ساختن یک هش
            کاملا متفاوت خواهد شد. بنابراین اگر کسی تنها یک «،» از کتاب تولستوی
            که شامل ۵۸۵ هزار و ۲۸۷ کاراکتر است حذف کند، خروجی تابع، یک هش کاملا
            جدید خواهد بود
          </p>
        </div>
        <div className="col-md-7">
          <div className="text-center">
            <img className="smaller" src={BookOpen} />
          </div>
          <p className="srepgfx-label smidge center text-center">هش اصلی: </p>
          <p className="hash text-center ">
            a948904f2f0f479b8f8197694b30184b0d2ed1c1cd2a1ec0fb85d299a192a447
          </p>
          <p className="srepgfx-label smidge text-center">هش جدید:</p>
          <p className="hash text-center ">
            40115cc2aecc43ea86a7e54be6f7257abff7b43959cd728f06c0c7423039166r
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-7">
          <p className="srepgfx-chapter-intro break">
            این تغییر زنجیره ای را که با هش ها به هم متصل شده بوده، در هم
            می‌شکند.
          </p>
          <p className="srepgfx-dek break-after">
            بلاک بعدی در بلاکچین، هنوز هش قبلی را در خود ذخیره کرده است،
            بنابراین هکر مجبور است بلاک قبلی را با هش جدید از نو بسازد اما با
            این کار، بلاک قبل تر از آن به مشکل می‌خورد و این مشکل تا بلاک
            ابتدایی ادامه خواهد داشت! محاسبه هش همه بلاک های بلاکچین از ابتدا تا
            انتها مقدار به مقدار عظیمی از قدرت محاسباتی احتیاج خواهد داشت و این
            کار از توان هر هکری خارج است.
          </p>
        </div>
      </div>

      {/* <!-- scn04 - the hash --> */}
      <div className="scroll-item  " id="scroll-video-4">
        <div className="row justify-content-center">
          <div className="col-xl-10 scroll-video-holder">
            <video
              className="video master-video hidden-sm-down mtz-vlc-pboid"
              playsInline
              autoPlay
              muted
              poster={posterVideo5}
              ref={video5El}
              onClick={onVideo5Click}
            >
              <source src={Video5} type="video/mp4" />
            </video>
            <video
              className="video master-video hidden-md-up mtz-vlc-pboid"
              playsInline
              autoPlay
              muted
              poster={posterVideo5}
              ref={smVideo5El}
              onClick={onSmVideo5Click}
            >
              <source src={SmVideo5} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* <!-- chapter 2 CONTENT END --> */}
    </div>
  )
}

export default Chapter2
