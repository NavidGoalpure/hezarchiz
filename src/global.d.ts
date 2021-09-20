declare module "*.svg" {
  import React = require("react")
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module "*.jpg" {
  //@ts-ignore
  export default "" as string
}

declare module "*.png" {
  //@ts-ignore
  export default "" as string
}
