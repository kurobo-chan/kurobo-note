import React from "react"
import { Link } from "gatsby"

export default function Home() {
  const navFunc = () => {
    document.querySelector("html").classList.toggle("open")
  }
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
              <a href="/blog.html">
                <h2 className="contentTitle">
                  <i className="fas fa-pencil-alt" />
                  <span>LATEST ARTICLES</span>
                </h2>
              </a>
              <ul className="contentBody">
                <li>
                  <a href="#">最新記事タイトル</a>
                </li>
                <li>
                  <a href="#">最新記事タイトル</a>
                </li>
                <li>
                  <a href="#">最新記事タイトル</a>
                </li>
                <li>
                  <a href="#">最新記事タイトル</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content category">
            <div className="grid12">
              <h2 className="contentTitle">
                <i className="fas fa-folder-open" />
                <span>CATEGORY </span>
              </h2>
              <ul className="contentBody">
                <li>
                  <a href="#">カテゴリー名</a>
                </li>
                <li>
                  <a href="#">カテゴリー名</a>
                </li>
                <li>
                  <a href="#">カテゴリー名</a>
                </li>
                <li>
                  <a href="#">カテゴリー名</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content tag">
            <div className="grid12">
              <h2 className="contentTitle">
                <i className="fas fa-tag" />
                <span>TAG</span>
              </h2>
              <ul className="contentBody">
                <li>
                  <a href="#">タグ名</a>
                </li>
                <li>
                  <a href="#">タグ名</a>
                </li>
                <li>
                  <a href="#">タグ名</a>
                </li>
                <li>
                  <a href="#">タグ名</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
