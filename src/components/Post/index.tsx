import React from "react"
import PropTypes from "prop-types"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import Img from "gatsby-image"
import "./style.scss"
import { Reference } from "./Rreference"

const Post = ({
  title,
  children,
  identifier,
  url,
  imageFluid,
  domain,
  keywords,
}) => {
  let disqusConfig = {
    url: url,
    identifier: identifier,
    title: title,
  }

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
          <Reference title={title} domain={domain} keywords={keywords} />
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
