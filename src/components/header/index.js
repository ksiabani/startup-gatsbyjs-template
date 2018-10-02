import React from 'react';
import { Link } from "gatsby";
import './_header.scss';

const Header = ({isScrolled}) =>
  (
    <header id="header" className={isScrolled ? 'header-scrolled' : ''}>
      <div className="container">
        <div className="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <a href="index.html"><img src="images/logo.png" alt="Startup"/></a>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              {/*<li className="menu-active"><a href="index.html#home">Home</a></li>*/}
              <li><Link to="#consulting">Consulting</Link></li>
              <li><Link to="#technology">Technology</Link></li>
              <li className="menu-has-children"><Link to="">Open Source</Link>
                <ul>
                  <li><Link to="generic.html">Reboard</Link></li>
                  <li><Link to="elements.html">TippetCMS</Link></li>
                </ul>
              </li>
              <li><Link to="#blog">Blog</Link></li>
              <li><Link to="#contact-us">Contact</Link></li>
            </ul>
          </nav>
          {/* #nav-menu-container */}
        </div>
      </div>
    </header>
  )

export default Header
