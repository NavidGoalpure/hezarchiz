import React from "react"
import "./ListDeclimer.scss"

interface Props {
  tag: string
  titleTag?: "H1"
  title?: string
}

export const ListDeclimer: React.FC<Props> = ({ tag, title, titleTag }) => {
  function getSmartSubtitle() {
    switch (tag) {
      case "mentors":
        return `بهترین متخصصان هر حوزه در این صفحه خواهید یافت، به آن‌ها توجه کنید، اما به خاطر داشته باشید که قابل اعتماد ترین مشاور شما، فکر شماست. پس با «مسئولیت شخصی خودتان» از گفته های ایشان استفاده کنید `
      case "articles":
        return `مقالات این صفحه با هدف آشنایی تازه واردان به دنیای بلاکچین با مفاهیم پایه ای نوشته شده است.`
      case "learning":
        return `اگر به دنبال آموزش مختصر بلاکچین هستید، به بخش «توضیح مختصر» و اگر به دنبال آموزش های کامل هستید، به بخش «پروژه های آموزشی» مراجعه کنید.`

      default:
        return `«هزارچیز» تنها واسطه آشنایی شما با این پروژه هاست و هیچ مسئولیت قانونی
        در قبال صحت عملکرد آنان ندارد.`
    }
  }
  return (
    <div className="green-glass bloglist-hint">
      {titleTag === "H1" ? (
        <h1 className="bloglist-hint-title">{title || "توضیحات"}</h1>
      ) : (
        <h6 className="bloglist-hint-title">{title || "توضیحات"}</h6>
      )}
      <div className="bloglist-hint-subtitle">
        {getSmartSubtitle()}
        {tag !== "learning" && (
          <>
            <h6 className="bloglist-hint-subtitle">
              برای آموختن و تصمیم گیری بهتر به صفحه
            </h6>
            <a href="/learning">&nbsp;آموزش بلاکچین&nbsp; </a>
            <h6 className="bloglist-hint-subtitle">مراجعه کنید.</h6>
          </>
        )}
      </div>
    </div>
  )
}
