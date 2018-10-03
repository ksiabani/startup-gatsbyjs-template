import React from 'react'
import { Link } from 'gatsby'

const Excerpt = ({ heading, html }) => (
  <div className="excerpt">
    <div className="excerpt__heading">{heading}</div>
    <div
      className="excerpt__content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
)

const Excerpts = ({ excerpts, elemId }) => (
  <section className="excerpts" id={elemId}>
    <div className="container">
      {excerpts.map(({ heading, html }, i) => {
        return <Excerpt heading={heading} html={html} key={i} />
      })}
    </div>
  </section>
)

export default Excerpts
