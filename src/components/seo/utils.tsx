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
        title: `آموزش ارزهای دیجیتال`,
        desc: `معرفی پروژه های آموزشی کریپتوکارنسی و ارزهای دیجیتال مانند بیتکوین و اتریوم`,
        keywords: [
          "آموزش ارز دیجیتال",
          "مربی ارز دیجیتال",
          "آموزش بیتکوین",
          "آموزش اتریوم",
          "سوال و جواب ارز دیجیتال",
        ],
      }
    case "exchanges":
      return {
        title: `متخصصان ارزهای دیجیتال`,
        desc: `معرفی صرافی‌های معتبر کریپتوکارنسی و ارزهای دیجیتال مانند بیتکوین و اتریوم`,
        keywords: [
          "آموزش ارز دیجیتال",
          "مربی ارز دیجیتال",
          "آموزش بیتکوین",
          "آموزش اتریوم",
          "سوال و جواب ارز دیجیتال",
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
    case "services":
      return {
        title: `سرویس‌ها و استارتاپ های ارزهای دیجیتال`,
        desc: `معرفی استارتاپ ها و سرویس های مرتبط با کریپتوکارنسی و ارزهای دیجیتال مانند بیتکوین و اتریوم`,
        keywords: [
          "آموزش ارز دیجیتال",
          "مربی ارز دیجیتال",
          "آموزش بیتکوین",
          "آموزش اتریوم",
          "سوال و جواب ارز دیجیتال",
        ],
      }
  }
  return res
}