import React from 'react';
import { Link } from "gatsby";
import './_header.scss';
import { withPrefix } from 'gatsby'

const Header = ({isScrolled}) =>
  (
    <header id="header" className={isScrolled ? 'header-scrolled' : ''}>
      <div className="container">
        <div className="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <Link to="/"><img src={withPrefix("images/logo.png")} alt="Startup"/></Link>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="#services">Services</Link></li>
              <li><Link to="/blog/">Blog</Link></li>
              <li><Link to="/generic/">Generic</Link></li>
            </ul>
          </nav>
          {/* #nav-menu-container */}
        </div>
      </div>
    </header>
  )

export default Header
