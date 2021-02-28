import React from "react"
import { Link } from "gatsby"
import "./style.scss"
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTelegramPlane,
} from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"

const SideBar = () => {
  const { site } = useStaticQuery(
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
      }
    `
  )

  const github = "https://github.com/" + site.siteMetadata.social.github
  const email = "mailto:" + site.siteMetadata.social.email
  const linkedin =
    "https://linkedin.com/in/" + site.siteMetadata.social.linkedin
  const telegram = "https://t.me/" + site.siteMetadata.social.telegram

  return (
    <aside className="sidebar">
      <div className="sidebar-logo glass-reflex">
        <Link to="/" className="logo ">
          {site.siteMetadata.title}
        </Link>
      </div>

      <menu className="sidebar-menu">
        <li className="menu-items">
          <Link to="/" className="menu-links" activeClassName="active">
            همه
          </Link>
        </li>

        <li className="menu-items">
          <Link to="/learning" className="menu-links" activeClassName="active">
            آموزشی
          </Link>
        </li>
        <li className="menu-items">
          <Link to="/exchanges" className="menu-links" activeClassName="active">
            صرافی
          </Link>
        </li>
        <li className="menu-items">
          <Link to="/news" className="menu-links" activeClassName="active">
            خبری
          </Link>
        </li>
        <li className="menu-items">
          <Link to="/tools" className="menu-links" activeClassName="active">
            ابزار
          </Link>
        </li>
      </menu>

      <div className="btn-group">
        <Link to="/" className="mob-menu-items" activeClassName="active">
          <button className="navbtn">همه</button>
        </Link>
        <Link
          to="/learning"
          className="mob-menu-items"
          activeClassName="active"
        >
          <button className="navbtn">آموزشی</button>
        </Link>
        <Link
          to="/exchanges"
          className="mob-menu-items"
          activeClassName="active"
        >
          <button className="navbtn">صرافی</button>
        </Link>
        <Link to="/news" className="mob-menu-items" activeClassName="active">
          <button className="navbtn">خبری</button>
        </Link>
        <Link to="/tools" className="mob-menu-items" activeClassName="active">
          <button className="navbtn">ابزار</button>
        </Link>
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
