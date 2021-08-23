import React, { useRef } from "react"
import "../WhatIsBlockchain/chapter2.scss"
//@ts-ignore
import BLOCKSpacer from "../WhatIsBlockchain/images/BLOCK-spacer.png"
//@ts-ignore
import TheTweet from "../WhatIsBlockchain/images/thetweet.jpg"
//@ts-ignore
import BookClosed from "../WhatIsBlockchain/images/book_closed.jpg"
//@ts-ignore
import BookOpen from "../WhatIsBlockchain/images/book_open.jpg"
//@ts-ignore
import posterVideo5 from "../WhatIsBlockchain/images/poster-video-5.png"

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
        <div className="full-width row justify-content-center">
          <img
            className="chapter-img img-responsive mx-auto d-block break"
            src={BLOCKSpacer}
          />
        </div>
        <h2 className="srepgfx-chapter full-width">
          تغییر دیتای ذخیره شده بسیار سخت است
        </h2>
        <h3 className="srepgfx-chapter-intro">
          «هش» امینت داده ها را تامین می‌کند
        </h3>
        <p className="srepgfx-dek break">
          «هش» برنامه ای است که رشته ای از اطلاعات را دریافت می‌کند و از طریق
          فرمول های ریاضی، آن را به رشته ای از حروف و اعداد تبدیل می‌کند. خروجی
          این برنامه دو خصوصیت کلیدی دارد:
        </p>
      </div>

      <div className="row justify-content-center">
        <p className="srepgfx-dek">
          خصوصیت اول:
          <br />
          اینکه اطلاعات ورودی چقدر طولانی یا کوتاه است، تاثیری در طول اطلاعات
          خروجی ندارد. رشته خروجی همیشه تعداد کاراکتر ثابتی دارد. مثلا کتاب «جنگ
          و صلح» تولستوی خیلی خیلی طولانی تر از اولین توییت جک دورسی است، اما
          اگر هش هرکدام را محاسبه کنیم، همواره طول یکسانی خواهند داشت.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="  break">
          <div className="text-center ">
            <img className="smaller" src={TheTweet} />
          </div>
          <h4 className="srepgfx-label smidge text-center">
            طول هش (۳۲ بایت) توییت جک دورسی:
          </h4>
          <p className="hash text-center ">
            c6f7257abff7b43959cd728f06c0c74230391640115cc3ea86a7e54be62aecc4
          </p>
        </div>

        <div className=" break-after">
          <div className="text-center">
            <img className="smaller" src={BookClosed} />
          </div>
          <h4 className="srepgfx-label smidge text-center">
            طول هش (۳۲ بایت) «جنگ و صلح»:
          </h4>
          <p className="hash text-center ">
            a948904f2f0f479b8f8197694b30184b0d2ed1c1cd2a1ec0fb85d299a192a447
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-7">
          <p className="srepgfx-dek">
            خصوصیت دوم:
            <br />
            اگر کوچکترین تغییری در اطلاعات ورودی بدهید، یک هش کاملا متفاوت را در
            خروجی خواهید داشت! در نتیجه اگر کسی تنها یک ویرگول از کتاب جنگ و صلح
            که حاوی ۵۸۵ هزار و ۲۸۷ کارکتر است حذف کند، یک هش کاملا تغییریافته را
            در خروجی تحویل خواهد گرفت.
          </p>
        </div>
        <div className="col-md-7">
          <div className="text-center">
            <img className="smaller" src={BookOpen} />
          </div>
          <h4 className="srepgfx-label smidge center text-center">هش اصلی: </h4>
          <p className="hash text-center ">
            a948904f2f0f479b8f8197694b30184b0d2ed1c1cd2a1ec0fb85d299a192a447
          </p>
          <h4 className="srepgfx-label smidge text-center">هش جدید:</h4>
          <p className="hash text-center ">
            40115cc2aecc43ea86a7e54be6f7257abff7b43959cd728f06c0c7423039166r
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-7">
          <h3 className="srepgfx-chapter-intro break">
            چنین تغییری زنجیره بلاک ها را که با هش های مرتبط به هم به یکدیگر
            متصل شده بودند را از هم می‌گسلد.
          </h3>
          <p className="srepgfx-dek break-after">
            چرا؟ خب از آنجایی که هکر، اطلاعات یک بلاک را تغییر داده (مثلا یک
            ویرگول از کتاب جنگ و صلح را حذف کرده) هش آن بلاک تغییر میکند.
            <br />
            اگر به خاطر داشته باشید گفته بودیم هش هر بلاک در بلاک قبلی ذخیره شده
            است.
            <br />
            درنتیجه دیگر اطلاعات هش بلاک هکر با هشی که در بلاک قبلی ذخیره شده
            همخوانی ندارد. برای حل این مشکل هکر مجبور است بلاک بعدی را هم از نو
            بنویسد و هش جدید را در آن قرار دهد
            <br />
            اما با این کار اطلاعات بلاک بعدی تغییر میکند و همانطور که احتمالا
            حدس زدید حالا هش بلاک بعدی هم تغییر کرده و با هش بلاک «بعد تر»
            متفاوت می شود و این چرخه تا انتها ادامه دارد.
            <br />
            محاسبه هش این حجم از بلاک، قدرت محاسباتی عظیمی احتیاج خواهد داشت و
            از توان هر هکری خارج است.
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
              <source
                src="https://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/images/videos-lg/video-5.mp4"
                type="video/mp4"
              />
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
              <source
                src="https://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/images/videos-sm/sm-video-5.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      {/* <!-- chapter 2 CONTENT END --> */}
    </div>
  )
}

export default Chapter2
