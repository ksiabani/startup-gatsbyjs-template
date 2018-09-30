import React from 'react';

// Subcomponents
const Tile = ({ data: { heading, description, icon } }) => (
  <div className="single-offer d-flex flex-row pb-30">
    <div className="icon">
      <img src={`images/${icon}`} alt={heading} />
    </div>
    <div className="desc">
      <a href="#">
        <h4>{heading}</h4>
      </a>
      <p>{description}</p>
    </div>
  </div>
)

const components = {
  tile: Tile,
}

// Component
const Grid = ({ data: { heading, description, icon }, deps, elemId }) => (
  <section className="we-offer-area section-gap" id={elemId}>
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="menu-content pb-60 col-lg-10">
          <div className="title text-center">
            <h1 className="mb-10">{heading}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="row flex-wrap">
        {deps.map(dep => {
          const Component = components[dep.name]
          return dep.data.map((tile, i) => {
            return <Component data={tile} key={i} />
          })
        })}
      </div>
    </div>
  </section>
)

export default Grid
