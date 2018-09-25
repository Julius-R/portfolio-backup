import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

function Nav(props) {
  return (
    <nav className="navBar">
      <div className="container">
        <div className="logo">
          Julius <span className="purpleText">R.</span>
        </div>
        <ul className="menu">
          <NavLink activeClassName="active" exact to='/'><li>About</li></NavLink>
          <NavLink activeClassName="active" to="/portfolio"><li>Portfolio</li></NavLink>
          <NavLink activeClassName="active" to="/contact"><li>Contact</li></NavLink>
        </ul>
      </div>
    </nav>
  )
}

module.exports = Nav;
