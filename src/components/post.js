import React from "react"
import PropTypes from "prop-types"

const Post = ({ title, children }) => {
  return (
    <main className="content">
      <article className="page-article">
        <div className="wrap-content">
          <header className="page-header">
            <h1 className="page-title"> {title} </h1>
          </header>
          <div className="page-content">{children}</div>
        </div>
      </article>
    </main>
  )
}

Post.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Post
