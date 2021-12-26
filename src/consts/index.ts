const allTags: Record<
  string,
  { persianName: string; isShowInSideBar: boolean }
> = {
  "social-networks": { persianName: "شبکه‌های اجتماعی", isShowInSideBar: true },
  ethereum: { persianName: "اتریوم", isShowInSideBar: true },
  game: { persianName: "بازی", isShowInSideBar: true },
  articles: { persianName: "مقالات", isShowInSideBar: true },
  learning: { persianName: "آموزش", isShowInSideBar: true },
  defi: { persianName: "دیفای", isShowInSideBar: true },
  exchange: { persianName: "صرافی", isShowInSideBar: true },
  lightning: { persianName: "لایتنینگ", isShowInSideBar: true },
  bitcoin: { persianName: "بیتکوین", isShowInSideBar: true },
  payment: { persianName: "ابزار پرداخت", isShowInSideBar: true },
  shop: { persianName: "فروشگاه", isShowInSideBar: true },
  solidity: { persianName: "سالیدیتی", isShowInSideBar: true },
  video: { persianName: "ویدئو", isShowInSideBar: true },
  news: { persianName: "اخبار", isShowInSideBar: true },
  ltc: { persianName: "لایت کوین", isShowInSideBar: false },
  bnb: { persianName: "بی ان بی", isShowInSideBar: false },
  xrp: { persianName: "ریپل", isShowInSideBar: false },
  podcast: { persianName: "پادکست", isShowInSideBar: true },
  investment: { persianName: "سرمایه گذاری", isShowInSideBar: true },
  bsv: { persianName: "بی اس وی", isShowInSideBar: false },
  startup: { persianName: "استارتاپ‌", isShowInSideBar: true },
  "bitcoin-concepts": { persianName: "مفاهیم بیتکوین", isShowInSideBar: false },
  zia: { persianName: "ضیا صدر", isShowInSideBar: false },
}
// هر تگی که اینجا اضافه میشه باید توی آدرس زیر هم تگ های سئوش اضافه بشه
// components/seo/utils
export { allTags }
