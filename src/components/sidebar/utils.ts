function createTagPages(_projectsMetadata) {
  let allTags = []

  _projectsMetadata.map(project => {
    project?.node?.frontmatter?.keywords.split(",").map(keyword => {
      if (!allTags.includes(keyword.trim()) && keyword !== "")
        allTags.push(keyword.trim())
    })
  })
  return allTags
}
const convertTagToPersian = {
  "social-networks": "شبکه‌های اجتماعی",
  ethereum: "اتریوم",
  game: "بازی",
  articles: "مقالات",
  learning: "آموزش",
  defi: "دیفای",
  exchange: "صرافی",
  lightning: "لایتنینگ",
  bitcoin: "بیتکوین",
  payment: "ابزار پرداخت",
  shop: "فروشگاه",
  mentors: "مربیان",
  solidity: "سالیدیتی",
  video: "ویدئو",
  news: "اخبار",
  ltc: "لایت کوین",
  bnb: "بی ان بی",
  xrp: "ریپل",
  podcast: "پادکست",
  investment: "سرمایه گذاری",
  bsv: "بی اس وی",
  startup: "استارتاپ‌",
}
export { createTagPages, convertTagToPersian }
