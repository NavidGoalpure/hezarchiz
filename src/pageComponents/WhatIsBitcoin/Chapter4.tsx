import React, { useRef } from "react"
import "../WhatIsBlockchain/chapter2.scss"
// @ts-ignore
import BLOCKSpacer from "../WhatIsBlockchain/images/BLOCK-spacer.png"
// @ts-ignore
import Bitcoin from "../WhatIsBlockchain/images/bitcoin.jpg"
// @ts-ignore
import SupplyChain from "../WhatIsBlockchain/images/supply_chain.jpg"
// @ts-ignore
import Banks from "../WhatIsBlockchain/images/banks.jpg"
// @ts-ignore
import Health from "../WhatIsBlockchain/images/health.png"
// @ts-ignore
import Vote from "../WhatIsBlockchain/images/vote.png"
// @ts-ignore
import Land from "../WhatIsBlockchain/images/land.png"

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
            <h2 className="srepgfx-chapter">موارد استفاده</h2>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-3 text-center text-sm-left">
            <img className="uses-img" src={SupplyChain} />
            <h4 className="srepgfx-label">زنجیره تامین</h4>
            <p className="srepgfx-sublabel">
              ثبت معاملات روی بلاکچین امکان بررسی تاریخچه یک محصول را برای ما به
              وجود می‌آورد. مثلا با استفاده از این روش مشتریان می‌توانند رد
              الماس های خود را دنبال کنند تا از مناطق جنگ خیز تامین نشده باشد
            </p>
          </div>
          <div className="col-md-3 text-center text-sm-left">
            <img className="uses-img" src={Banks} />
            <h4 className="srepgfx-label">سیستم های مالی</h4>
            <p className="srepgfx-sublabel">
              موسسات مالی در بلاکچین ها سرمایه گذاری می‌کنند تا بتوانند رکوردهای
              اطلاعاتی خود را به سادگی -و با امنیت- ذخیره کنند.
            </p>
          </div>
          <div className="col-md-3 text-center text-sm-left">
            <img className="uses-img" src={Bitcoin} />
            <h4 className="srepgfx-label">رمزارز</h4>
            <p className="srepgfx-sublabel">
              بلاکچین اساس بیت کوین و سایر ارزهای رمزهاست.
            </p>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-3 text-center text-sm-left">
            <img className="uses-img" src={Health} />
            <h4 className="srepgfx-label">بهداشت و درمان</h4>
            <p className="srepgfx-sublabel">
              بلاکچین می‌تواند کمک کند که سابقه درمانی بیماران به صورت امن و
              مطمئن ذخیره شود و کنترل آن به دست خود بیمار باشد.
            </p>
          </div>
          <div className="col-md-3 text-center text-sm-left">
            <img className="uses-img" src={Vote} />
            <h4 className="srepgfx-label">رای گیری</h4>
            <p className="srepgfx-sublabel">
              اسناد بلاکچین می تواند امکان برگزاری یک انتخابات بدون دستکاری را
              ایجاد کند.
            </p>
          </div>
          <div className="col-md-3 text-center text-sm-left">
            <img className="uses-img uses-img" src={Land} />
            <h4 className="srepgfx-label">اسناد دارایی</h4>
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
