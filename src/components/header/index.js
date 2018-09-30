import React from 'react'
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
              <li><a href="#consulting">Consulting</a></li>
              <li><a href="#technology">Technology</a></li>
              <li className="menu-has-children"><a href>Open Source</a>
                <ul>
                  <li><a href="generic.html">Reboard</a></li>
                  <li><a href="elements.html">TippetCMS</a></li>
                </ul>
              </li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact-us">Contact</a></li>
            </ul>
          </nav>
          {/* #nav-menu-container */}
        </div>
      </div>
    </header>
  )

export default Header
