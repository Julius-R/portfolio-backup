import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Nav from './Nav.js';
import Footer from './Footer.js';

function Portfolio(props) {
  const cards = props.links.map((link) =>
    <div className="card" key={link.key}>
      <div className="image"><img src={link.source}/></div>
      <div className="info"><a href={link.link} target="_blank">Click Here</a></div>
    </div>
  );

  return (
    <div>

      <div className="content-wrapper">
        <Sidebar />
        <Nav />
        <section className="portfolio">
          <div className="container">
            <h1 className="text-large">Portfolio</h1>
            <div className='row'>
              {cards}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}

module.exports = Portfolio;
