import React from "react"
import PropTypes from "prop-types"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import Img from "gatsby-image"
import "./style.scss"

const Post = ({ title, children, identifier, url, imageFluid, domain }) => {
  let disqusConfig = {
    url: url,
    identifier: identifier,
    title: title,
  }
  console.log("navid domain=", domain)
  return (
    <main className="post-page-content">
      <article className="post-page-article green-glass">
        <div className="wrap-content">
          <header className="page-header">
            <a target="_blank" className="page-title" href={domain}>
              {title}
            </a>
          </header>
          <Img
            fluid={imageFluid}
            imgStyle={{ transition: "all 0.7s" }}
            className="site-image"
          />
          <div className="post-content">{children}</div>
          <div id="post-page-refrence">
            <p>{`برای بازدید از پروژه`}</p>
            <a target="_blank" href={domain}>
              {title}
            </a>
            <p>{`روی نام آن کلیک کنید.`}</p>
          </div>
        </div>
        <div id="discus-alert">
          سیستم کامنت گذاری وبسایت «هزارچیز» از سرویس «دیسکس» نیرو می‌گیرد که
          متاسفانه کاربران ایرانی را تحریم کرده است. اگر در این قسمت نمی‌توانید
          بخش کامنت ها را مشاهده کنید، از سرویس های تغییر آی پی استفاده کنید.
        </div>
      </article>

      <Disqus config={disqusConfig} />
    </main>
  )
}

Post.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Post
