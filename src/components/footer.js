import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div className="partsGrid">
      <footer className="footer contentsGap">
        <div className="pagetopBtn">
          <a href="#pageTop">
            <FontAwesomeIcon icon={faChevronUp} />
            <i className="fas fa-chevron-up" />
          </a>
        </div>
        <p className="footMsg">Thanks you for coming!</p>
        <ul className="footLink">
          <li>
            <Link to={`/privacypolicy/`}>PrivacyPolicy</Link>
          </li>
          <li>©2021 KUROBO</li>
        </ul>
      </footer>
    </div>
  )
}
