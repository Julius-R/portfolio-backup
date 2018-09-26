import React from 'react';
import ReactDOM from 'react-dom';

function Footer(props) {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/Julius-R" target="_blank">
            <img src="./imgs/github.svg" alt=""/>
            <p>Github</p>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/julius-robinson-495103110/" target="_blank">
            <img src="./imgs/linkedin-in.svg" alt=""/>
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a href="https://codepen.io/julisu-r/" target="_blank">
            <img src="imgs/codepen.svg" alt="Logo of codepen"/>
            <p>Codepen</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}

module.exports = Footer;
