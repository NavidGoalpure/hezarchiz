import React from "react"
import "../WhatIsBlockchain/chapter2.scss"
//@ts-ignore
import BLOCKSpacer from "../WhatIsBlockchain/images/BLOCK-spacer.png"
//@ts-ignore
import Network from "../WhatIsBlockchain/images/network.jpg"
//@ts-ignore
import NetworkCentralSmall from "../WhatIsBlockchain/images/network-central-small.jpg"
//@ts-ignore
import NetworkDecentralSmall from "../WhatIsBlockchain/images/network-decentral-small.jpg"
//@ts-ignore
import Work from "../WhatIsBlockchain/images/work.jpg"
//@ts-ignore
import Stake from "../WhatIsBlockchain/images/stake.jpg"

const Chapter3: React.FC = props => {
  return (
    <div className="chapter-marker" data-id="chap-3">
      {/* <!-- chapter 3 CONTENT START --> */}
      <div className="pseudo-container">
        <div className="row justify-content-center">
          <img
            className="chapter-img img-responsive mx-auto d-block break full-width"
            src={BLOCKSpacer}
          />
          <h2 className="srepgfx-chapter full-width">نودها در شبکه</h2>

          <div className="col-md-5">
            <h3 className="srepgfx-chapter-intro">
              بلاکچین یک بانک اطلاعاتی غیرمتمرکز است که در آن همه نودها باهم
              برابرند.
            </h3>
          </div>
        </div>

        <div className="row justify-content-center">
          <img className="img-fluid break hidden-xs-down" src={Network} />

          <div className="row justify-content-center">
            <div className="col-sm-6 col-md-6 text-center text-sm-left">
              <img
                className="img-fluid break hidden-sm-up smaller-image"
                src={NetworkDecentralSmall}
              />
              <h4 className="srepgfx-label">شبکه غیرمتمرکز</h4>
              <p className="srepgfx-sublabel">
                دسترسی داشته باشند و در رقابت برای اضافه کردن اطلاعات به دیتابیس
                مشارکت کنند
              </p>
            </div>
            <div className="col-sm-6 col-md-6 text-center text-sm-left">
              <img
                className="img-fluid break hidden-sm-up smaller-image"
                src={NetworkCentralSmall}
              />

              <h4 className="srepgfx-label">شبکه متمرکز</h4>
              <p className="srepgfx-sublabel">
                اختیار همه امور بر عهده یک نود مرکزی است.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-7">
            <h3 className="srepgfx-chapter-intro break">اجازه عضویت</h3>
            <p className="srepgfx-dek">
              بدون دخالت یک نهاد مرکزی، چگونه به صحت اعتماد ذخیره شده اعتماد
              کنیم؟ یک راه حل این است که فقط به گروه محدودی اجازه دسترسی به
              اطلاعات را بدهیم و فقط همان‌ها اجازه ثبت اطلاعات را داشته باشند.
              مثل متدی که شرکت ها برای حفظ اطلاعات خود انتخاب می‌کنند. اما
              بیتکوین حاوی اطلاعات عمومی است و نمیخواهیم فقط عده مخصوصی قدرت
              کنترل اطلاعات عمومی را داشته باشند
            </p>
            <p className="srepgfx-dek">
              برای حل این مشکل بلاکچین بیتکوین شروطی را برای نودهایی که میخواهند
              به شبکه بپیوندند و در آن ثبت اطلاعات انجام دهند گذاشته است. به این
              شروط «مکانیزم اجماع» می‌گوییم
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-7">
            <h3 className="srepgfx-chapter-intro break">رسیدن به اجماع</h3>
            <p className="srepgfx-dek">
              این شروط از اعضای شبکه می‌خواهند که خود را «اثبات» نمایند.
            </p>
            <p className="srepgfx-dek">
              مکانیزهای اجماع متفاوتی وجود دارد که بیتکوین از معروف ترین و در
              عین حال «غیرمتمرکز ترین» آنها یعنی اثبات کار، استفاده می‌نماید.{" "}
            </p>
          </div>
        </div>

        <div className="row justify-content-around">
          <div className=" row text-sm-left">
            <img
              className="img-fluid smaller-image"
              style={{ height: "15rem", margin: "0 auto" }}
              src={Work}
            />
            <div>
              <h4 className="srepgfx-label">اثبات کار</h4>
              <p className="srepgfx-sublabel">
                هر نود برای اینکه بتواند یک بلاک به شبکه اضافه کند، باید نشان
                دهد که میزانی «کار» انجام داده است. این کار با حل پازل هایی با
                محاسبات سخت انجام می‌شود. این فرایند که «ماینینگ» نام دارد،
                نیازمند قدرت محاسباتی زیادی است. هر عضو در ازای «کار»ی که انجام
                می‌دهد، مقداری بیتکوین به عنوان پاداش دریافت می‌کند.. این پاداش
                است که ماینر ها را به سرمایه گذاری و مشارکت در حفظ و گسترش
                زنجیره بیتکوین تشویق می‌کند.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- chapter 3 CONTENT END --> */}
    </div>
  )
}

export default Chapter3
