import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav.js';
import Content from './components/Content.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';



class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Content}/>
          <Route path="/portfolio" render={(props) => <Portfolio {...props} links={links} />} />
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    )
  }
}



const links = [
  {key: 1, source: "/imgs/img1.jpg", link: "/projects/portfolio/index.html"},
  {key: 2, source: "/imgs/img2.jpg", link: "/projects/psd1/index.html"},
  {key: 3, source: "/imgs/img3.png", link: "/projects/weight/index.html"},
  {key: 4, source: "/imgs/img4.png", link: "/projects/pinkpoint/index.html"},
  {key: 5, source: "/imgs/img5.jpg", link: "/projects/insta/index.html"},
  {key: 6, source: "/imgs/img7.jpg", link: "/projects/poke/index.html"}
];


ReactDOM.render(
    <App/>, document.getElementById("root")
)
