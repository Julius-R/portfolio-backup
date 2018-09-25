import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

function Menu(props) {
  return (
    <ul className="mobileMenu">
      <p id="close">Close</p>
      <NavLink activeClassName="active" exact to='/'><li>About</li></NavLink>
      <NavLink activeClassName="active" to="/portfolio"><li>Portfolio</li></NavLink>
      <NavLink activeClassName="active" to="/contact"><li>Contact</li></NavLink>
    </ul>
  )
}

module.exports = Menu;
