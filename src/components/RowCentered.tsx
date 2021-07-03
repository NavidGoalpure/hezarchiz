import React from "react"

const RowCentered: React.FC = props => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      {props.children}
    </div>
  )
}
export default RowCentered
