import React from "react"
import Chapter1 from "./images/CHAPTER-01.jpg"
import Chapter2 from "./images/CHAPTER-02.jpg"
import Chapter3 from "./images/CHAPTER-03.jpg"
import Chapter4 from "./images/CHAPTER-04.jpg"
import "./what-is-blockchain.scss"

const WhatIsBlockchainHeader: React.FC = props => {
  return (
    <>
      <div className="pseudo-container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div>
              <p className="srepgfx-dek kicker">منبع: رویترز گرافیک</p>
              <h1 className="srepgfx-title">بلاکچین چیست</h1>
              <p className="credit">ترجمه توسط نوید گل پور</p>
            </div>
            <div className="srepgfx-dek-large main-subhead">
              <div>
                بلاکچین&nbsp;
                <span className="special selected">
                  یک دیتابیس (مجموعه‌ای از داده ها)
                </span>
                <img loading="lazy" className="subhead-img" src={Chapter1} />
                &nbsp;است که توسط شبکه ای از کامپیوترها به اشتراک گذاشته شده
                است. هرگاه رکوردی به این زنجیره اضافه شود،
                <span className="special"> تغییر آن بسیار دشوار خواهد بود</span>
                <img
                  loading="lazy"
                  className="subhead-img"
                  src={Chapter2}
                />{" "}
                برای اینکه
                <span className="special">&nbsp;شبکه&nbsp;</span>
                <img
                  loading="lazy"
                  className="subhead-img"
                  src={Chapter3}
                />{" "}
                مطمئن باشد‌، همه نسخه های دیتابیس که بر روی کامپیوترهای متفاوت
                است، اختلافی ندارند، همیشه آن‌ها را چک می‌کند. از بلاکچین برای
                ساختن ارز دیجیتال بیتکوین استفاده شده است، اما
                <span className="special"> &nbsp;کاربردهای&nbsp;</span>
                <img loading="lazy" className="subhead-img" src={Chapter4} />
                دیگر آن نیز درحال ظهور است.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatIsBlockchainHeader
