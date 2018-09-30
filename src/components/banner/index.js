import React from 'react';

const Banner = ({ data: { heading, description, btnTxt }, elemId }) => (
  <section className="banner-area" id="{elemId}">
    <div className="container">
      <div className="row fullscreen d-flex align-items-center justify-content-center">
        <div className="banner-content col-lg-7">
          <h1>{heading}</h1>
          <p className="pt-20 pb-20">{description}</p>
          <a className="primary-btn" href="">
            {btnTxt}
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Banner;
