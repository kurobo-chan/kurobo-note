import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import Imgix from "react-imgix"

export default function RandomPosts(props) {
  const randomSelect = (array, num) => {
    let newArray = []
    while (newArray.length < num && array.length > 0) {
      const rand = Math.floor(Math.random() * array.length)
      newArray.push(array[rand])
      array.splice(rand, 1)
    }

    return newArray
  }
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsBlog {
        nodes {
          title
          slug
          id
          eyecatch {
            url
          }
          publishDate
          publishDateJP: publishDate(formatString: "YYYY.MM.DD")
          category {
            category
            id
            categorySlug
          }
        }
      }
    }
  `)
  const baseposts = data.allMicrocmsBlog.nodes.filter(
    node => node.id !== props.id
  )
  const randomposts = randomSelect(baseposts, props.a_number)
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
          {randomposts.map(node => {
            return (
              <article key={node.slug}>
                <div className="grid12">
                  <h3>
                    <Link to={`/blog/post/${node.slug}/`}>{node.title}</Link>
                  </h3>
                  <ul className="detailBody">
                    <li>
                      <time dateTime={node.publishDate}>
                        {node.publishDateJP}
                      </time>
                    </li>
                    {node.category.map(cat => (
                      <li key={cat.id}>
                        <Link to={`/cat/${cat.categorySlug}`}>
                          <i className="fas fa-folder-open" />
                          <span>{cat.category}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <figure className="eyecatch">
                    <Imgix
                      src={node.eyecatch.url}
                      imgixParams={{ ar: "16:9", fit: "fill" }}
                      htmlAttributes={{
                        alt: node.title,
                      }}
                    />
                  </figure>
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}
