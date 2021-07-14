import React, { useRef } from "react"
import "./chapter2.scss"
import BLOCKSpacer from "./images/BLOCK-spacer.png"
import Bitcoin from "./images/bitcoin.jpg"
import SupplyChain from "./images/supply_chain.jpg"

import Banks from "./images/banks.jpg"
import Health from "./images/health.png"
import Vote from "./images/vote.png"
import Land from "./images/land.png"

const Chapter4: React.FC = props => {
  return (
    <div className="chapter-marker" data-id="chap-4">
      {/* <!-- chapter 4 CONTENT START --> */}
      <div className="pseudo-container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <img
              className="chapter-img img-responsive mx-auto d-block break"
              src={BLOCKSpacer}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-9">
            <p className="srepgfx-chapter">موارد استفاده</p>
          </div>
          <div className="col-md-5">
            <p className="srepgfx-chapter-intro break-after">
              بلاکچین موارد استفاده متنوعی دارد اما باید آگاه باشید که بعضی از
              آنها فعلا در حد تبلیغات است و هنوز مشخص نیست راه حل هایی که عنوان
              می‌شود تا چه حد عملی خواهد بود.
            </p>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-3 text-center text-sm-left">
            <img className="uses-img" src={SupplyChain} />
            <p className="srepgfx-label">زنجیره تامین</p>
            <p className="srepgfx-sublabel">
              ثبت معاملات روی بلاکچین امکان بررسی تاریخچه یک محصول را برای ما به
              وجود می‌آورد. مثلا با استفاده از این روش مشتریان می‌توانند رد
              الماس های خود را دنبال کنند تا از مناطق جنگ خیز تامین نشده باشد
            </p>
          </div>
          <div className="col-md-3 text-center text-sm-left">
            <img className="uses-img" src={Banks} />
            <p className="srepgfx-label">سیستم های مالی</p>
            <p className="srepgfx-sublabel">
              موسسات مالی در بلاکچین ها سرمایه گذاری می‌کنند تا بتوانند رکوردهای
              اطلاعاتی خود را به سادگی -و با امنیت- ذخیره کنند.
            </p>
          </div>
          <div className="col-md-3 text-center text-sm-left">
            <img className="uses-img" src={Bitcoin} />
            <p className="srepgfx-label">رمزارز</p>
            <p className="srepgfx-sublabel">
              بلاکچین اساس بیت کوین و سایر ارزهای رمزهاست.
            </p>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-3 text-center text-sm-left">
            <img className="uses-img" src={Health} />
            <p className="srepgfx-label">بهداشت و درمان</p>
            <p className="srepgfx-sublabel">
              بلاکچین می‌تواند کمک کند که سابقه درمانی بیماران به صورت امن و
              مطمئن ذخیره شود و کنترل آن به دست خود بیمار باشد.
            </p>
          </div>
          <div className="col-md-3 text-center text-sm-left">
            <img className="uses-img" src={Vote} />
            <p className="srepgfx-label">رای گیری</p>
            <p className="srepgfx-sublabel">
              اسناد بلاکچین می تواند امکان برگزاری یک انتخابات بدون دستکاری را
              ایجاد کند.
            </p>
          </div>
          <div className="col-md-3 text-center text-sm-left">
            <img className="uses-img uses-img" src={Land} />
            <p className="srepgfx-label">اسناد دارایی</p>
            <p className="srepgfx-sublabel">
              ذخیره اسناد زمین در بلاکچین در مناطق ناآرام سیاسی می‌تواند برای
              اثبات مالکیت زمین به کار رود. این کار از هزینه‌های سرسام آوری
              جلوگیری خواهد کرد.
            </p>
          </div>
        </div>
      </div>
    </div>
    //  <!-- chapter 4 CONTENT END -->
  )
}

export default Chapter4
