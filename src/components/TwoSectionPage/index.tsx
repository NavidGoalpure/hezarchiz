import React from "react"
import { ListDeclimer } from "../blogList/ListDeclimer"
import CardsContainer from "../CardsContainer"
import LearningSpecificSection from "./LearningSpecificSection/learning"
interface Props {
  includePhrase: string
  projects: Record<any, any>[]
  ref: any
  title2: string
  pageTitile: string
}
const TwoSectionPage: React.FC<Props> = ({
  includePhrase,
  projects,
  ref,
  title2,
  pageTitile,
}) => {
  return (
    <main role="main" style={{ width: "100%" }} id="main">
      <div className="content" ref={ref} tabIndex={1}>
        <ListDeclimer category="learning" title={pageTitile} titleTag="H1" />
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
        </div>
      </div>
    </main>
  )
}
export default TwoSectionPage
