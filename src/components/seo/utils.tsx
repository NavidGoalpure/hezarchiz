import { allTags } from "../../consts"
interface metaProps {
  title: string | undefined
  desc: string | undefined
  keywords: string[] | undefined
}

export function getMetaForListingPages(smartSlug: string): metaProps {
  let res: metaProps = {
    title: undefined,
    desc: undefined,
    keywords: undefined,
  }
  switch (smartSlug) {
    case "mentors":
      return {
        title: `متخصصان ارزهای دیجیتال`,
        desc: `معرفی متخصصان کریپتوکارنسی و ارزهای دیجیتال مانند بیتکوین و اتریوم`,
        keywords: [
          "آموزش ارز دیجیتال",
          "مربی ارز دیجیتال",
          "آموزش بیتکوین",
          "آموزش اتریوم",
          "سوال و جواب ارز دیجیتال",
        ],
      }
    case "learning":
      return {
        title: `آموزش بلاکچین`,
        desc: `معرفی پروژه های آموزشی کریپتوکارنسی و ارزهای دیجیتال مانند بیتکوین و اتریوم`,
        keywords: [
          "آموزش ارز دیجیتال",
          "مربی ارز دیجیتال",
          "آموزش بیتکوین",
          "آموزش اتریوم",
          "سوال و جواب ارز دیجیتال",
        ],
      }
    case "social-networks":
      return {
        title: `چنل و گروه ارز دیجیتال`,
        desc: ` معرفی کانال ها و گروه های مربوط به ارز دیجیتال| شبکه های اجتماعی ارز دیجیتال`,
        keywords: [
          "شبکه های اجتماعی ارز دیجیتال",
          "آموزش ارز دیجیتال",
          "کانال ارز دیجیتال",
          "چنل ارز دیجیتال",
          "گروه ارز دیجیتال",
        ],
      }
    case "news":
      return {
        title: `اخبار ارزهای دیجیتال`,
        desc: `معرفی سایت‌های خبری کریپتوکارنسی و ارزهای دیجیتال مانند بیتکوین و اتریوم`,
        keywords: [
          "آموزش ارز دیجیتال",
          "مربی ارز دیجیتال",
          "آموزش بیتکوین",
          "آموزش اتریوم",
          "سوال و جواب ارز دیجیتال",
        ],
      }
    case "ethereum":
      return {
        title: allTags["ethereum"],
        desc: `پروژه های مربوط به ارز دیجیتال اتریوم`,
        keywords: ["آموزش اتریوم", "پروژه اتریوم", "سولیدیتی"],
      }
    case "game":
      return {
        title: allTags["game"],
        desc: `پروژه های مربوط به بازی بلاکچین  `,
        keywords: [
          "بازی بلاکچین",
          "بازی های بلاکچینی",
          "کسب درآمد از بازی های بلاکچینی",
        ],
      }
    case "articles":
      return {
        title: allTags["articles"],
        desc: `مقالات مربوط به بلاکچین و ارز دیجیتال `,
        keywords: ["مقالات بلاکچین", "مقاله بلاکچین", "بلاکچین چیست"],
      }
    case "defi":
      return {
        title: allTags["defi"],
        desc: `پروژه های مربوط به دیفای و آموزش دیفای `,
        keywords: ["دیفای", "آموزش دیفای"],
      }
    case "exchange":
      return {
        title: allTags["exchange"],
        desc: `صرافی های ارز دیجیتال `,
        keywords: ["صرافی بیتکوین", "صرافی لایتنینگ", "صرافی دیسنترالایز"],
      }
    case "lightning":
      return {
        title: allTags["lightning"],
        desc: `پروژه های مربوط به لایتنینگ بیتکوین`,
        keywords: ["صرافی لایتنینگ بیتکوین", "صرافی لایتنینگ", "لایتنینگ"],
      }
    case "bitcoin":
      return {
        title: allTags["bitcoin"],
        desc: `پروژه های مربوط به بیتکوین`,
        keywords: ["بیتکوین", "آموزش بیتکوین"],
      }
    case "payment":
      return {
        title: allTags["payment"],
        desc: `ابزارهای پرداخت کریپتوکارنسی`,
        keywords: ["پرداخت بیتکوینی", "پرداخت کریپتوکارنسی"],
      }
  }
  return res
}
