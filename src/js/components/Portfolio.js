import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Sidebar from './Sidebar';
=======
import Menu from './Menu.js';
>>>>>>> caeb8e58e7430e9d816bfa49ee44a96b5f8774df
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
<<<<<<< HEAD
      <Sidebar />
      <Nav />
      <section className="portfolio">
        <div className="container">
          <h1 className="text-large">Portfolio</h1>
          <div className='row'>
            {cards}
=======
      <Menu />
      <div className="content-wrapper">
        <Nav />
        <section className="portfolio">
          <div className="container">
            <h1 className="text-large">Portfolio</h1>
            <div className='row'>
              {cards}
            </div>
>>>>>>> caeb8e58e7430e9d816bfa49ee44a96b5f8774df
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}

module.exports = Portfolio;
