import React from "react"
import { isIos } from "../../utils/isIos"
import "./ListDeclimer.scss"

interface Props {
  category: string
}

export const ListDeclimer: React.FC<Props> = ({ category }) => {
  function getSmartSubtitle() {
    switch (category) {
      case "mentors":
        return `بهترین متخصصان هر حوزه در این صفحه خواهید یافت، به آن‌ها توجه کنید، اما به خاطر داشته باشید که قابل اعتماد ترین مشاور شما، فکر شماست. پس با «مسئولیت شخصی خودتان» از گفته های ایشان استفاده کنید `
      default:
        return `«هزارچیز» تنها واسطه آشنایی شما با این پروژه هاست و هیچ مسئولیت قانونی
        در قبال صحت عملکرد آنان ندارد.`
    }
  }
  return (
    <div className="green-glass bloglist-hint">
      <h6 className="bloglist-hint-title">توضیحات</h6>

      {!isIos() ? (
        <h6 className="bloglist-hint-subtitle">{getSmartSubtitle()}</h6>
      ) : (
        <h6 className="bloglist-hint-subtitle">{`اگر شاهد به هم‌ریختگی‌هایی در صفحات هستید و از سیستم عامل IOS استفاده می‌کنید، مشکل از تفکر مدیران سیستم عامل شماست که نسبت به رعایت استانداردهای صحفات وب بی تفاوت هستند و معتقدند بقیه دنیا باید خود را با کاستی های آن ها هماهنگ کنند. پیشنهاد می‌کنم از محصولی استفاده کنید که برای حقوق مصرف کننده احترام بیشتری قائل است.`}</h6>
      )}
    </div>
  )
}
