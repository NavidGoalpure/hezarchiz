import { allTags } from "../../consts"
interface metaProps {
  title: string | undefined
  desc: string | undefined
  keywords?: string
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
        ].toString(),
      }
    case "learning":
      return {
        title: `آموزش بلاکچین + رمز ارز دیجیتال به زبان ساده pdf (سال 1400)`,
        desc: `معرفی پروژه ها و پادکست های آموزش کریپتوکارنسی و ارزهای دیجیتال مانند بیتکوین و اتریوم. آموزش دیفای و پروژه های مبتنی بر اتریوم `,
        keywords: [
          "آموزش ارز دیجیتال",
          "مربی ارز دیجیتال",
          "آموزش بیتکوین",
          "آموزش اتریوم",
          "سوال و جواب ارز دیجیتال",
        ].toString(),
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
        ].toString(),
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
        ].toString(),
      }
    case "ethereum":
      return {
        title: allTags["ethereum"].persianName,
        desc: `پروژه های مربوط به ارز دیجیتال اتریوم`,
        keywords: ["آموزش اتریوم", "پروژه اتریوم", "سولیدیتی"].toString(),
      }
    case "game":
      return {
        title: allTags["game"].persianName,
        desc: `پروژه های مربوط به بازی بلاکچین  `,
        keywords: [
          "بازی بلاکچین",
          "بازی های بلاکچینی",
          "کسب درآمد از بازی های بلاکچینی",
        ].toString(),
      }
    case "articles":
      return {
        title: allTags["articles"].persianName,
        desc: `مقالات مربوط به بلاکچین و ارز دیجیتال `,
        keywords: [
          "مقالات بلاکچین",
          "مقاله بلاکچین",
          "بلاکچین چیست",
        ].toString(),
      }
    case "defi":
      return {
        title: allTags["defi"].persianName,
        desc: `پروژه های مربوط به دیفای و آموزش دیفای `,
        keywords: ["دیفای", "آموزش دیفای"].toString(),
      }
    case "exchange":
      return {
        title: allTags["exchange"].persianName,
        desc: `صرافی های ارز دیجیتال `,
        keywords: [
          "صرافی بیتکوین",
          "صرافی لایتنینگ",
          "صرافی دیسنترالایز",
        ].toString(),
      }
    case "lightning":
      return {
        title: allTags["lightning"].persianName,
        desc: `پروژه های مربوط به لایتنینگ بیتکوین`,
        keywords: [
          "صرافی لایتنینگ بیتکوین",
          "صرافی لایتنینگ",
          "لایتنینگ",
        ].toString(),
      }
    case "bitcoin":
      return {
        title: allTags["bitcoin"].persianName,
        desc: `پروژه های مربوط به بیتکوین`,
        keywords: ["بیتکوین", "آموزش بیتکوین"].toString(),
      }
    case "payment":
      return {
        title: allTags["payment"].persianName,
        desc: `ابزارهای پرداخت ارز دیجیتال`,
        keywords: ["پرداخت بیتکوینی", "پرداخت ارز دیجیتال"].toString(),
      }
    case "shop":
      return {
        title: allTags["shop"].persianName,
        desc: `فروشگاه لوازم ارز دیجیتال`,
        keywords: [
          "اکسسوری بیتکوین ",
          "استیکر بیتکوین",
          "تیشرت بیتکوین",
          "ماگ بیتکوین",
        ].toString(),
      }
    case "mentors":
      return {
        title: allTags["mentors"].persianName,
        desc: `مربیان ارز دیجیتال`,
        keywords: ["حمید مرادی", "شایان شریف الحسینی", "میثم رضایی"].toString(),
      }
    case "solidity":
      return {
        title: allTags["solidity"].persianName,
        desc: `پروژه های سالیدیتی`,
        keywords: [
          "سالیدیتی ",
          "گروه سالیدیتی",
          "آموزش سالیدیتی",
          "گروه سالیدیتی",
        ].toString(),
      }
    case "video":
      return {
        title: allTags["video"].persianName,
        desc: `ویدئو ارز دیجیتال`,
        keywords: [
          "ویدئوی آموزش بیتکوین",
          "ویدئو آموزشی ارز دیجیتال",
        ].toString(),
      }
    case "news":
      return {
        title: allTags["news"].persianName,
        desc: `اخبار ارز دیجیتال`,
        keywords: [
          "سایت های اخبار بیتکوین",
          "سایت های اخبار ارز دیجیتال",
        ].toString(),
      }
  }
  return res
}
