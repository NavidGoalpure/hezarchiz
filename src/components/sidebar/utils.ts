import { allTags } from "../../consts"

function createTagPages(_projectsMetadata) {
  let allTags = []

  _projectsMetadata.map(project => {
    project?.node?.frontmatter?.keywords.split(",").map(keyword => {
      if (!allTags.includes(keyword.trim()) && keyword !== "")
        allTags.push(keyword.trim())
    })
  })
  return allTags
}
const convertTagToPersian = allTags
export { createTagPages, convertTagToPersian }
