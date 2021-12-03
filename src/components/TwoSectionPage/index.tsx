import React from "react"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import { ListDeclimer } from "../blogList/ListDeclimer"
import CardsContainer from "../CardsContainer"
import LearningSpecificSection from "./LearningSpecificSection/learning"

interface Props {
  includePhrase: string
  projects: Record<any, any>[]
  ref: any
  title2: string
  pageTitle: string
  identifier: string
  url: string
}
const TwoSectionPage: React.FC<Props> = ({
  includePhrase,
  projects,
  ref,
  title2,
  pageTitle,
  url,
  identifier,
}) => {
  let disqusConfig = {
    url: url,
    identifier: identifier,
    title: pageTitle,
  }
  console.log("navid url=", url)
  return (
    <main role="main" style={{ width: "100%" }} id="main">
      <div className="content" ref={ref} tabIndex={1}>
        <ListDeclimer tag="learning" title={pageTitle} titleTag="H1" />
        <div style={{ position: "absolute", top: "8rem", width: "100%" }}>
          <LearningSpecificSection />
          <details className="dark-glass" open>
            <summary style={{ fontSize: "170%" }}>{title2}</summary>
            <div
              style={{
                width: "100%",
                marginLeft: "1.5rem",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <CardsContainer
                includePhrase={includePhrase}
                projects={projects}
                ref={ref}
              />
            </div>
          </details>
          {url === "https://hezarchiz.com/learning" && (
            <>
              <div id="discus-alert">
                سیستم کامنت گذاری وبسایت «هزارچیز» از سرویس «دیسکس» نیرو می‌گیرد
                که متاسفانه کاربران ایرانی را تحریم کرده است. اگر در این قسمت
                نمی‌توانید بخش کامنت ها را مشاهده کنید، از سرویس های تغییر آی پی
                استفاده کنید.
              </div>
              <Disqus config={disqusConfig} />
            </>
          )}
        </div>
      </div>
    </main>
  )
}
export default TwoSectionPage
