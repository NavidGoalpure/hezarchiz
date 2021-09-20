import React from "react"

interface Props {
  title: string
  domain: string
  keywords: string
}

export const Reference: React.FC<Props> = ({ title, domain, keywords }) => {
  if (!keywords.includes("mentors"))
    return (
      <div id="post-page-refrence">
        <p>
          {`برای بازدید از`}
          <span>
            <a target="_blank" href={`${domain}`}>
              {" "}
              {title}{" "}
            </a>
          </span>
          {`اینجا کلیک کنید.`}
        </p>
      </div>
    )
  else return null
}
