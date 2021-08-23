import React from "react"
//@ts-ignore
import Chapter1 from "../WhatIsBlockchain/images/CHAPTER-01.jpg"
//@ts-ignore
import Chapter2 from "../WhatIsBlockchain/images/CHAPTER-02.jpg"
//@ts-ignore
import Chapter3 from "../WhatIsBlockchain/images/CHAPTER-03.jpg"
//@ts-ignore
import Chapter4 from "../WhatIsBlockchain/images/CHAPTER-04.jpg"

import "../WhatIsBlockchain/what-is-blockchain.scss"

const WhatIsBlockchainHeader: React.FC = props => {
  return (
    <>
      <div className="pseudo-container">
        <div className="row justify-content-center break">
          <div className="col-lg-10">
            <div>
              <h1 className="srepgfx-title break">بیتکوین چیست</h1>
              <p className="srepgfx-dek kicker">
                با الهام و استفاده از:
                <a href="https://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/index.html">
                  {" "}
                  رویترز گرافیک
                </a>
              </p>
              <br />
            </div>
            <div className="srepgfx-dek-large main-subhead">
              <div>
                برای فهم
                <span className="special selected">&nbsp;بیتکوین&nbsp;</span>
                اول باید بلاکچین را بشناسیم. بلاکچین&nbsp;
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
                قرار دارند، اختلافی ندارند، دائما آن‌ها را چک می‌کند. از بلاکچین
                برای ساختن ارز دیجیتال بیتکوین استفاده شده است، اما
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
