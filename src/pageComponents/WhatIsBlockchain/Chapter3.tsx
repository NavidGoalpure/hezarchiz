import React, { useRef } from "react"
import "./chapter2.scss"
import BLOCKSpacer from "./images/BLOCK-spacer.png"
import Network from "./images/network.jpg"
import NetworkCentralSmall from "./images/network-central-small.jpg"

import NetworkDecentralSmall from "./images/network-decentral-small.jpg"
import Work from "./images/work.jpg"
import Stake from "./images/stake.jpg"

const Chapter3: React.FC = props => {
  return (
    <div className="chapter-marker" data-id="chap-3">
      {/* <!-- chapter 3 CONTENT START --> */}
      <div className="pseudo-container">
        <div className="row justify-content-center">
          <img
            className="chapter-img img-responsive mx-auto d-block break fullwidth"
            src={BLOCKSpacer}
          />
          <p className="srepgfx-chapter fullwidth">کامپیوترها در شبکه</p>

          <div className="col-md-5">
            <p className="srepgfx-chapter-intro">
              بلاکچین یک بانک اطلاعاتی غیرمتمرکز است که در آن همه نودها باهم
              برابرند.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <img className="img-fluid break hidden-xs-down" src={Network} />

          <div className="row justify-content-center">
            <div className="col-sm-6 col-md-6 text-center text-sm-left">
              <img
                className="img-fluid break hidden-sm-up smaller-image"
                src={NetworkCentralSmall}
              />

              <p className="srepgfx-label">شبکه متمرکز</p>
              <p className="srepgfx-sublabel">
                اختیار همه امور بر عهده یک نود مرکزی است.
              </p>
            </div>
            <div className="col-sm-6 col-md-6 text-center text-sm-left">
              <img
                className="img-fluid break hidden-sm-up smaller-image"
                src={NetworkDecentralSmall}
              />
              <p className="srepgfx-label">شبکه غیرمتمرکز</p>
              <p className="srepgfx-sublabel">
                دسترسی داشته باشند و در رقابت برای اضافه کردن اطلاعات به دیتابیس
                مشارکت کنند
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-7">
            <p className="srepgfx-chapter-intro break">اجازه عضویت</p>
            <p className="srepgfx-dek">
              بدون کنترل نهاد مرکزی،‌ اعتماد مشکل می‌شود. از کجا بدانیم اطلاعات
              ثبت شده در دیتابیس درست است؟ یک پاسخ این است که فقط به عده محدودی
              اجازه دسترسی به اطلاعات طبقه بندی شده را بدهیم. مثل روشی که شرکت
              ها برای حفظ اطلاعات خود استفاده می‌کند. اما بلاکچین‌هایی مثل
              بیتکوین عمومی هستند و همه باید بتوانند به آن دسترسی داشته باشند.
              از طرفی اعضا ناشناس هستند. در نتیجه نمی‌توانیم افراد «قابل اعتماد»
              را از «افراد مخرب» تفکیک کنیم
            </p>
            <p className="srepgfx-dek">
              برای حل این مشکل بلاکچین ها شروطی را برای کامپیوترهایی که میخواهند
              به شبکه بپیوندند و به زنجیره، رکورد اضافه کنند قرار می‌دهند. این
              شروط را «الگوریتم اجماع» می‌نامیم.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-7">
            <p className="srepgfx-chapter-intro break">رسیدن به اجماع</p>
            <p className="srepgfx-dek">
              این شروط از اعضای شبکه می‌خواهند که خود را «اثبات» نمایند. در
              اینجا دو روش اجماع را ذکر می‌کنیم:
            </p>
          </div>
        </div>

        <div className="row justify-content-around">
          <div className="col-sm-4 col-md-4 text-center text-sm-left">
            <img className="img-fluid smaller-image" src={Work} />
            <p className="srepgfx-label">اثبات کار</p>
            <p className="srepgfx-sublabel">
              هر نود برای اینکه بتواند یک بلاک به شبکه اضافه کند، باید نشان دهد
              که میزانی «کار» انجام داده است. این کار با حل پازل هایی با محاسبات
              سخت انجام می‌شود. این فرایند که «ماینینگ» نام دارد، نیازمند قدرت
              محاسباتی زیادی است. هر عضو در ازای «کار»ی که انجام می‌دهد، مقداری
              پاداش - مثلا بیتکوین یا یک توکن خاص- دریافت می‌کند.
            </p>
          </div>

          <div className="col-sm-4 col-md-4 text-center text-sm-left">
            <img className="img-fluid smaller-image" src={Stake} />
            <p className="srepgfx-label">اثبات سهام</p>
            <p className="srepgfx-sublabel">
              شرکت کنندگان توکن هایی می‌خرند که به آنها اجازه می‌دهد به شبکه عضو
              شوند. هرچه توکن بیشتری تهیه کنند، پاداش بیشتری هم نصیبشان می‌شود.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- chapter 3 CONTENT END --> */}
    </div>
  )
}

export default Chapter3
