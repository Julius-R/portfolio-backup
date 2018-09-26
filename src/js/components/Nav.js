import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

class Nav extends React.Component {
  openMenu() {
    const menu = document.querySelector('.mobileMenu');
    menu.style.left = "0px";
  }
  render() {
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
          <div className="menuBtn" onClick={this.openMenu}>
            <img src="imgs/bars.svg" alt="image of bars"/>
          </div>
        </div>
      </nav>
    )
  }
}

module.exports = Nav;
