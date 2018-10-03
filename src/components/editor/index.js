import React from 'react'

const Editor = ({ data: { heading, description, html }, elemId }) => (
  <section className="about-generic-area section-gap" id={elemId}>
    <div className="container border-top-generic">
      <h3 className="about-title mb-30">{heading}</h3>
      <h4 className="about-description mb-30">{description}</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="img-text">
            {html}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Editor
