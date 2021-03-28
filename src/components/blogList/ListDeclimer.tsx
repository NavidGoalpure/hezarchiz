import React from "react"
import "./ListDeclimer.scss"

interface Props {
  category: string
}

export const ListDeclimer: React.FC<Props> = ({ category }) => {
  function getSmartSubtitle() {
    switch (category) {
      case "all":
        return `«هزارچیز» تنها واسطه آشنایی شما با این پروژه هاست و هیچ مسئولیت قانونی
        در قبال صحت عملکرد آنان ندارد.`

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
