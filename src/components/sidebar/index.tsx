import React, { useEffect, useRef } from "react"

import { Link } from "gatsby"
import "./style.scss"
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTelegramPlane,
} from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import LogoIcon from "../LogoIcon"
import { createTagPages } from "./utils"
import { allTags } from "../../consts"

const SideBar = () => {
  const { site, allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            social {
              github
              email
              linkedin
            }
          }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                description
                keywords
                domain
                img {
                  children {
                    ... on ImageSharp {
                      fluid(maxWidth: 1920) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                      }
                    }
                  }
                }
              }
              html
            }
          }
        }
      }
    `,
  )

  const tags = createTagPages(allMarkdownRemark.edges)

  const github = "https://github.com/" + site.siteMetadata.social.github
  const email = "mailto:" + site.siteMetadata.social.email
  const linkedin =
    "https://linkedin.com/in/" + site.siteMetadata.social.linkedin
  const telegram = "https://t.me/" + site.siteMetadata.social.telegram
  const pathName = typeof window !== "undefined" ? window.location.pathname : ""

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Link to="/" className="logo ">
          <LogoIcon width="200" height="150" />
          <p id="sidebar-logo-text">نسخه آزمایشی</p>
        </Link>
      </div>

      <div className="btn-group1">
        <Link to="/">
          <button
            className="navbtn mob-menu-items dark-glass glass-reflex"
            style={
              pathName === `/`
                ? { background: "var( --secondari-color-normal)" }
                : {}
            }
          >
            همه
          </button>
        </Link>
        {tags.map(tag => {
          if (allTags[tag].isShowInSideBar)
            return (
              <Link to={`/${tag}`} className="glass-reflex ">
                <button
                  className="navbtn mob-menu-items dark-glass"
                  style={
                    pathName === `/${tag}` || pathName === `/${tag}/`
                      ? { background: "var( --secondari-color-normal)" }
                      : {}
                  }
                >
                  {allTags[tag].persianName}
                </button>
              </Link>
            )
        })}
      </div>

      <div className="sidebar-social">
        <li className="social-items">
          <a
            href={email}
            className="social-links glass-reflex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="social-icons" />
          </a>
        </li>
        <li className="social-items">
          <a
            href={github}
            className="social-links glass-reflex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icons" />
          </a>
        </li>
        <li className="social-items">
          <a
            href={linkedin}
            className="social-links glass-reflex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icons" />
          </a>
        </li>
        <li className="social-items">
          <a
            href={telegram}
            className="social-links glass-reflex "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane className="social-icons" />
          </a>
        </li>
      </div>
    </aside>
  )
}

export default SideBar
