import React from "react"
import { ListDeclimer } from "../blogList/ListDeclimer"
import CardsContainer from "../CardsContainer"
import LearningSpecificSection from "./LearningSpecificSection/learning"
interface Props {
  includePhrase: string
  projects: Record<any, any>[]
  ref: any
}
const GetPerCategorySections: React.FC<Props> = ({
  includePhrase,
  projects,
  ref,
}) => {
  return (
    <main role="main" style={{ width: "100%" }} id="main">
      <div className="content" ref={ref} tabIndex={1}>
        <ListDeclimer category={includePhrase} />
        <div style={{ width: "100%", position: "absolute", top: "8rem" }}>
          <details className="dark-glass">
            <summary style={{ fontSize: "170%" }}>پروژه های آموزشی</summary>
            <div
              style={{
                width: "100%",
                marginLeft: "1.5rem",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <CardsContainer
                includePhrase={includePhrase}
                projects={projects}
                ref={ref}
              />
            </div>
          </details>
          <LearningSpecificSection />
        </div>
      </div>
    </main>
  )
}
export default GetPerCategorySections
