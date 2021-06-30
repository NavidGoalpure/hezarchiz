import React from "react"
import "./ListDeclimer.scss"

interface Props {
  category: string
}

export const ListDeclimer: React.FC<Props> = ({ category }) => {
  function getSmartSubtitle() {
    switch (category) {
      case "mentors":
        return `بهترین متخصصان هر حوزه در این صفحه خواهید یافت، به آن‌ها توجه کنید، اما به خاطر داشته باشید که قابل اعتماد ترین مشاور شما، فکر شماست. پس با «مسئولیت شخصی خودتان» از گفته های ایشان استفاده کنید `
      case "articles":
        return `مقالات این صفحه با هدف آشنایی تازه واردان به دنیای بلاکچین با مفاهیم پایه ای نوشته شده است.`
      default:
        return `«هزارچیز» تنها واسطه آشنایی شما با این پروژه هاست و هیچ مسئولیت قانونی
        در قبال صحت عملکرد آنان ندارد.`
    }
  }
  return (
    <div className="green-glass bloglist-hint">
      <h6 className="bloglist-hint-title">توضیحات</h6>
      <h6 className="bloglist-hint-subtitle">{getSmartSubtitle()}</h6>
    </div>
  )
}
