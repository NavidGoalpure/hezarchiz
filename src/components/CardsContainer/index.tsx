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
      {projects.map(({ node, i }) => {
        if (
          includePhrase === "all" ||
          node.frontmatter.keywords.includes(includePhrase)
        )
          return (
            <PostCard
              key={i}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
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
