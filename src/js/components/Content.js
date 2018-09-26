import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import Sidebar from './Sidebar';
import Nav from './Nav.js';
import Footer from './Footer.js';


function Content(props) {
  return (
    <div>
      <Sidebar />
      <div className="content-wrapper">
        <Nav />
        <header className="hero">
          <div className="container">
            <div className="content">
              <h1 className="title">Front End <br/>Developer</h1>
              <p className="description">
                Passionate developer who loves creating
            captivating experiences for users. If you
            design it, I code it! Coding the web, one
            page at a time, since 2015.
              </p>
              <NavLink activeClassName="active" to="/portfolio">
                <button className="btn">Check Me Out!</button>
              </NavLink>
            </div>
            <div className="image">
              <img src="imgs/computer@2x.png" />
            </div>
          </div>
        </header>
        <Footer />
      </div>
    </div>
  )
}

module.exports = Content;
