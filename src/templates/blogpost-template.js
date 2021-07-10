import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFolderOpen,
  faCheck,
  faChevronLeft,
  faChevronRight,
  faTag,
} from "@fortawesome/free-solid-svg-icons"
import { Link, graphql } from "gatsby"
import { Facebook, Twitter } from "react-sharingbuttons"
import "react-sharingbuttons/dist/main.css"
import Imgix from "react-imgix"
import unified from "unified"
import parse from "rehype-parse"
import rehypeReact from "rehype-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {
    pre: props => {
      return <pre className="blackCode">{props.children}</pre>
    },
    h2: props => {
      return (
        <h2 id={props.id}>
          <FontAwesomeIcon icon={faCheck} />
          <span>{props.children}</span>
        </h2>
      )
    },
    img: props => {
      return (
        <figure>
          <Imgix
            src={props.src}
            imgixParams={{ ar: "16:9", fit: "fill" }}
            htmlAttributes={{
              alt: props.alt,
            }}
          />
          <figcaption>
            <span>{props.alt}</span>
          </figcaption>
        </figure>
      )
    },
  },
}).Compiler
export default function Home({ data, location, pageContext }) {
  const htmlAst = unified()
    .use(parse, { fragment: true })
    .parse(data.microcmsBlog.content)
  return (
    <Layout>
      <SEO
        pagetitle={data.microcmsBlog.title}
        pagedesc={`${data.microcmsBlog.preface.slice(0, 70)}...`}
        pagepath={location.pathname}
        blogimg={data.microcmsBlog.eyecatch.url}
      />
      <main className="main blogPost contentsGap">
        <article>
          <div className="partsGrid eyecatchBody">
            <div className="grid12">
              <figure className="eyecatch">
                <Imgix
                  src={data.microcmsBlog.eyecatch.url}
                  imgixParams={{ ar: "16:9", fit: "fill" }}
                  htmlAttributes={{
                    alt: `${data.microcmsBlog.preface.slice(0, 30)}...`,
                  }}
                />
              </figure>
            </div>
          </div>
          <div className="partsGrid postContent">
            <div className="grid12">
              <h1>{data.microcmsBlog.title}</h1>
              <ul className="detailBody">
                <li className="datetime">
                  <time dateTime={data.microcmsBlog.publishDate}>
                    {data.microcmsBlog.publishDateJP}
                  </time>
                </li>
                {data.microcmsBlog.category.map(cat => (
                  <li className="category" key={cat.id}>
                    <ul>
                      <li className={cat.categorySlug}>
                        <a href="#">
                          <FontAwesomeIcon icon={faFolderOpen} />
                          <span>{cat.category}</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
              <ul className="detailBody tag">
                {data.microcmsBlog.tag.map(cat => (
                  <li className={cat.tagSlug} key={cat.id}>
                    <a href="#">
                      <FontAwesomeIcon icon={faTag} />
                      <span>{cat.tag}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="preface contentsGap">{data.microcmsBlog.preface}</p>
              <div className="postbody">{renderAst(htmlAst)}</div>
            </div>
          </div>
          <div className="partsGrid">
            <div className="grid12">
              <ul className="snsShare contentsGap">
                <li className="twitter">
                  <Twitter
                    url={`${data.site.siteMetadata.siteUrl}${location.pathname}`}
                    shareText=""
                  />
                </li>
                <li className="facebook">
                  <Facebook
                    url={`${data.site.siteMetadata.siteUrl}${location.pathname}`}
                  />
                </li>
              </ul>
            </div>
          </div>
        </article>
        <div className="partsGrid">
          <div className="grid12">
            <ul className="pagination">
              {pageContext.next && (
                <li>
                  <Link to={`/blog/post/${pageContext.next.slug}/`} rel="prev">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <i className="fas fa-chevron-left" />
                    <span>{`${pageContext.next.title.slice(0, 20)}...`}</span>
                  </Link>
                </li>
              )}
              {pageContext.previous && (
                <li>
                  <Link
                    to={`/blog/post/${pageContext.previous.slug}/`}
                    rel="next"
                  >
                    <span>{`${pageContext.previous.title.slice(
                      0,
                      20
                    )}...`}</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    microcmsBlog(id: { eq: $id }) {
      title
      publishDateJP: publishDate(formatString: "YYYY.MM.DD")
      publishDate
      category {
        category
        categorySlug
        id
      }
      tag {
        tag
        tagSlug
        id
      }
      eyecatch {
        url
        height
        width
      }
      preface
      content
    }
  }
`
