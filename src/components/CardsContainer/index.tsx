import React from "react"
import PostCard from "../PostCard"
import "./style.scss"
interface Props {
  includePhrase: string
  projects: Record<any, any>[]
  ref: any
}
const CardsContainer: React.FC<Props> = ({ includePhrase, projects, ref }) => {
  return (
    <>
      {projects.map(({ node }) => {
        if (
          includePhrase === "all" ||
          node.frontmatter.keywords.includes(includePhrase)
        )
          return (
            <PostCard
              key={node?.frontmatter?.domain}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              domain={node?.frontmatter?.domain || ""}
              domainName={node?.frontmatter?.domainName || ""}
              imageFluid={node?.frontmatter?.img?.children[0].fluid}
              logoFluid={node?.frontmatter?.logo?.children[0].fluid}
              refCurrent={ref?.current || ""}
            />
          )
      })}
    </>
  )
}
export default CardsContainer
