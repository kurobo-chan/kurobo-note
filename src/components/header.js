import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFolderOpen,
  faPencilAlt,
  faTag,
} from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
  const navFunc = () => {
    document.querySelector("html").classList.toggle("open")
  }
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsCategory {
        nodes {
          category
          categorySlug
          id
        }
      }
      allMicrocmsTag {
        nodes {
          tag
          tagSlug
          id
        }
      }
      allMicrocmsBlog(
        sort: { order: DESC, fields: publishDate }
        skip: 0
        limit: 5
      ) {
        nodes {
          title
          slug
          id
        }
      }
    }
  `)
  return (
    <div>
      <div className="partsGrid">
        <header className="header" id="pageTop">
          <div className="siteName">
            <Link to={`/`}>
              <span>
                KUROBO <br />
                NOTE
              </span>
            </Link>
          </div>
          <button type="button" className="navBtn" onClick={navFunc}>
            <span className="navBtnBar" />
            <span className="sr-only">MENU</span>
          </button>
        </header>
      </div>
      <div className="overlay partsGrid">
        <nav className="nav">
          <div className="content LatestArticles">
            <div className="grid12">
              <Link to={`/blog/`} onClick={navFunc}>
                <h2 className="contentTitle">
                  <FontAwesomeIcon icon={faPencilAlt} />
                  <span>LATEST ARTICLES</span>
                </h2>
              </Link>
              <ul className="contentBody">
                {data.allMicrocmsBlog.nodes.map(cat => (
                  <li>
                    <Link to={`/blog/post/${cat.slug}`} onClick={navFunc}>
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="content category">
            <div className="grid12">
              <h2 className="contentTitle">
                <FontAwesomeIcon icon={faFolderOpen} />
                <span>CATEGORY </span>
              </h2>
              <ul className="contentBody">
                {data.allMicrocmsCategory.nodes.map(cat => (
                  <li className={cat.categorySlug} key={cat.id}>
                    <Link to={`/cat/${cat.categorySlug}`} onClick={navFunc}>
                      {cat.category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="content tag">
            <div className="grid12">
              <h2 className="contentTitle">
                <FontAwesomeIcon icon={faTag} />
                <span>TAG</span>
              </h2>
              <ul className="contentBody">
                {data.allMicrocmsTag.nodes.map(cat => (
                  <li className={cat.tagSlug} key={cat.id}>
                    <Link to={`/tag/${cat.tagSlug}`} onClick={navFunc}>
                      {cat.tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
