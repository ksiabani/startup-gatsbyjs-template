import React from 'react';
import { Link } from "gatsby";

const Banner = ({ data: { heading, description, btnTxt }, elemId }) => (
  <section className="banner-area" id="{elemId}">
    <div className="container">
      <div className="row fullscreen d-flex align-items-center justify-content-center">
        <div className="banner-content col-lg-7">
          <h1>{heading}</h1>
          <p className="pt-20 pb-20">{description}</p>
          <Link className="primary-btn" to="">
            {btnTxt}
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default Banner;
