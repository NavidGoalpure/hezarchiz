import React from "react"
import PropTypes from "prop-types"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import "./style.scss"

const Post = ({ title, children, identifier, url }) => {
  let disqusConfig = {
    url: url,
    identifier: identifier,
    title: title,
  }

  return (
    <main className="post-content">
      <article className="post-page-article green-glass">
        <div className="wrap-content">
          <header className="page-header">
            <h1 className="page-title"> {title} </h1>
          </header>
          <div className="page-content">{children}</div>
        </div>
        <div id="discus-alert">
          سیستم کامنت گذاری این سایت از سرویس «دیسکس» نیرو می‌گیرد که متاسفانه
          کاربران ایرانی را تحریم کرده است. اگر در این قسمت نمی‌توانید بخش کامنت
          ها را مشاهده کنید، از سرویس های تغییر آی پی استفاده کنید.
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
