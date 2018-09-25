import React from 'react';
import ReactDOM from 'react-dom';

function Footer(props) {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/Julius-R"><img src="./imgs/github.svg" alt=""/></a>
          <a href="https://github.com/Julius-R">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/julius-robinson-495103110/"><img src="./imgs/linkedin-in.svg" alt=""/></a>
          <a href="https://www.linkedin.com/in/julius-robinson-495103110/">LinkedIn</a>
        </li>
        <li>
          <a href="https://codepen.io/julisu-r/"><img src="imgs/codepen.svg" alt="Logo of codepen"/></a>
          <a href="https://codepen.io/julisu-r/">Codepen</a>
        </li>
      </ul>
    </footer>
  )
}

module.exports = Footer;
