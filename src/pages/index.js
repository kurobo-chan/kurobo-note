import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Link, graphql } from "gatsby"
import Imgix from "react-imgix"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({data}) {
  return (
    <Layout>
      <SEO />
      <div className="partsGrid">
        <main className="main top contentsGap">
          <div className="profile">
            {data.allMicrocmsProfile.edges.map(({ node }) => (
              <div className="grid12" key={node.id}>
                <figure>
                  <Imgix
                    src={node.profileImg.url}
                    imgixParams={{ ar: "16:9", fit: "fill" }}
                    htmlAttributes={{
                      alt: node.name,
                    }}
                  />
                  <figcaption>
                    <h1>{node.name}</h1>
                  </figcaption>
                </figure>
                <ul className="link">
                  {node.profileUrl.map(cat => (
                    <li key={cat.id}>
                      <a
                        href={cat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {cat.urlName}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="msg">{node.profileDesc}</p>
                <a
                  href={node.contact}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact"
                >
                  {node.contact}
                </a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMicrocmsProfile {
      edges {
        node {
          name
          profileImg {
            url
          }
          profileDesc
          profileUrl {
            id
            url
            urlName
          }
          id
          contact
        }
      }
    }
  }
`