import React, { ReactNode, useEffect, useRef } from "react"
// import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import Img, { FluidObject } from "gatsby-image"
import "./style.scss"
import { Reference } from "./Rreference"
import CardsContainer from "../CardsContainer"

interface Props {
  title: string
  children: ReactNode
  identifier: string
  url: string
  imageFluid: FluidObject
  domain: string
  keywords: string
  otherProjects: Record<any, any>[]
}
const Post = ({
  title,
  children,
  identifier,
  url,
  imageFluid,
  domain,
  keywords,
  otherProjects,
}: Props) => {
  let disqusConfig = {
    url: url,
    identifier: identifier,
    title: title,
  }
  const elementRef = useRef()
  useEffect(() => {
    //@ts-ignore
    elementRef.current?.focus()
    return sessionStorage.removeItem("listPageScroll")
  }, [elementRef])
  return (
    <main className="post-page-content" ref={elementRef} tabIndex={1}>
      <article className="post-page-article green-glass">
        <div className="wrap-content">
          <header className="page-header">
            <a target="_blank" className="page-title" href={domain}>
              <h1>{title}</h1>
            </a>
          </header>
          <Img
            fluid={imageFluid}
            imgStyle={{ transition: "all 0.7s" }}
            className="site-image"
            alt={`Cover for ${title}`}
          />
          <div className="post-content">{children}</div>
          <Reference title={title} domain={domain} keywords={keywords} />
        </div>
      </article>
      {otherProjects && (
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
            includePhrase={"all"}
            projects={otherProjects}
            ref={elementRef}
          />
        </div>
      )}
      {/* //////////comment disqus/////////////// */}
      {/* <div id="discus-alert">
        سیستم کامنت گذاری وبسایت «هزارچیز» از سرویس «دیسکس» نیرو می‌گیرد که
        متاسفانه کاربران ایرانی را تحریم کرده است. اگر در این قسمت نمی‌توانید
        بخش کامنت ها را مشاهده کنید، از سرویس های تغییر آی پی استفاده کنید.
      </div>
      <Disqus config={disqusConfig} /> */}
    </main>
  )
}

export default Post
