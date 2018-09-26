import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

class Menu extends React.Component {
  clickBtn() {
    const menu = document.querySelector('.mobileMenu');
    menu.style.left = "-10000px";
  }

  render() {
    return (
      <ul className="mobileMenu">
        <li id="closeBtn" onClick={this.clickBtn}>X</li>
        <NavLink activeClassName="active" exact to='/'><li onClick={this.clickBtn}>About</li></NavLink>
        <NavLink activeClassName="active" to="/portfolio" onClick={this.clickBtn}><li>Portfolio</li></NavLink>
        <NavLink activeClassName="active" to="/contact"><li onClick={this.clickBtn}>Contact</li></NavLink>
      </ul>
    )
  }
}

module.exports = Menu;
