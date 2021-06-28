import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFolderOpen,
  faChevronLeft,
	faChevronRight,
  faPencilAlt
} from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Link, graphql } from "gatsby"
import Imgix from "react-imgix"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data, location, pageContext }) {
  return (
    <Layout>
      <SEO
        pagetitle="ブログ一覧"
        pagedesc="KUROBO noteのブログ一覧です"
        pagepath={location.pathname}
      />
      <div className="partsGrid">
        <main className="main blog contentsGap">
          <div className="grid12">
            <h1 className="contentTitle">
              <FontAwesomeIcon icon={faPencilAlt} />
              <span>Latest Articles</span>
            </h1>
          </div>
          <div className="grid12">
            {data.allMicrocmsBlog.edges.map(({ node }) => (
              <article key={node.id}>
                <Link to={`/blog/post/${node.slug}/`} className="grid12">
                  <figure className="eyecatch">
                    <Imgix
                      src={node.eyecatch.url}
                      imgixParams={{ ar: "16:9", fit: "fill" }}
                      htmlAttributes={{
                        alt: `${node.preface.slice(0, 30)}...`,
                      }}
                    />
                  </figure>
                  <div className="text">
                    <h2>{node.title}</h2>
                    <ul className="detailBody">
                      <li>
                        <time dateTime={node.publishDate}>
                          {node.publishDateJP}
                        </time>
                      </li>
                      {node.category.map(cat => (
                        <li>
                          <Link to={`/cat/${cat.categorySlug}/`}>
                            <FontAwesomeIcon icon={faFolderOpen} />
                            <span>{cat.category}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </article>
            ))}
            <ul className="pagination">
              {!pageContext.isFirst && (
                <li>
                  <Link
                    to={
                      pageContext.currentPage === 2
                        ? `/blog/`
                        : `/blog/${pageContext.currentPage - 1}/`
                    }
                    rel="prev"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span>PREV</span>
                  </Link>
                </li>
              )}
              {!pageContext.isLast && (
                <li>
                  <Link to={`/blog/${pageContext.currentPage + 1}/`} rel="next">
                    <span>NEXT</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </main>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMicrocmsBlog(
      sort: { order: DESC, fields: publishDate }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          id
          eyecatch {
            url
          }
          preface
          slug
          publishDateJP: publishDate(formatString: "YYYY.MM.DD")
          publishDate
          category {
            category
            categorySlug
          }
        }
      }
    }
  }
`
