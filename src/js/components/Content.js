import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.js';
import Footer from './Footer.js';


function Content(props) {
  return (
    <div>
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
            <button className="btn">Learn More</button>
          </div>
          <div className="image">
            <img src="imgs/computer@2x.png" />
          </div>
        </div>
      </header>
      <Footer />
    </div>
  )
}

module.exports = Content;
