import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart,faFolderOpen } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <div className="partsGrid">
      <aside className="aside">
        <div className="grid12">
          <h2 className="contentTitle">
            <FontAwesomeIcon icon={faHeart} />
            <span>PICK UP</span>
          </h2>
        </div>
        <div className="cardBody">
          <article>
            <div className="grid12">
              <h3>
                ここにタイトルが入ります。ここにタイトルが入ります。ここにタイトル...
              </h3>
              <ul className="detailBody">
                <li>
                  <time dateTime="2018-07-07T20:00:00">2020.11.21</time>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFolderOpen} />
                    <span>カテゴリー名</span>
                  </a>
                </li>
              </ul>
              <figure className="eyecatch">
                <img src="image/test.jpg" alt="" />
              </figure>
            </div>
          </article>
          <article>
            <div className="grid12">
              <h3>
                ここにタイトルが入ります。ここにタイトルが入ります。ここにタイトル...
              </h3>
              <ul className="detailBody">
                <li>
                  <time dateTime="2018-07-07T20:00:00">2020.11.21</time>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-folder-open" />
                    <span>カテゴリー名</span>
                  </a>
                </li>
              </ul>
              <figure className="eyecatch">
                <img src="image/test.jpg" alt="" />
              </figure>
            </div>
          </article>
          <article>
            <div className="grid12">
              <h3>
                ここにタイトルが入ります。ここにタイトルが入ります。ここにタイトル...
              </h3>
              <ul className="detailBody">
                <li>
                  <time dateTime="2018-07-07T20:00:00">2020.11.21</time>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-folder-open" />
                    <span>カテゴリー名</span>
                  </a>
                </li>
              </ul>
              <figure className="eyecatch">
                <img src="image/test.jpg" alt="" />
              </figure>
            </div>
          </article>
        </div>
      </aside>
    </div>
  )
}
