import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <div className="partsGrid">
        <main className="main top contentsGap">
          <div className="profile">
            <div className="grid12">
              <figure>
                <img src="image/kurobo.svg" alt="" />
                <figcaption>
                  <h1>KUROBO</h1>
                </figcaption>
              </figure>
              <ul className="link">
                <li>
                  <a
                    href="https://kurobo-site.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://kurobo-site.netlify.app
                  </a>
                </li>
                <li>
                  <a
                    href="https://kurobo-hobbyblog.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://kurobo-hobbyblog.netlify.app
                  </a>
                </li>
              </ul>
              <p className="msg">
                テキストがここに入ります。テキストがここに入ります。テキストがここに入ります。テキストがここに入ります。テキストがここに入ります。テキストがここに入ります。テキストがここに入ります。
              </p>
              <a
                href="https://twitter.com/kurobochan"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
