import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu.js';
import Nav from './Nav.js';
import Footer from './Footer.js';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="content-wrapper">
          <Nav />
          <section className="contact">
            <div className="container">
              <h1 className="text-large">Contact</h1>
              <form id="formArea" className="formArea" method="POST">
                <div className="main-group">
                  <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name"/>
                  </div>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email"/>
                  </div>
                </div>
                <div className="group">
                  <label htmlFor="message"> Message</label>
                  <textarea name="message" id="message" cols="30" rows="10"></textarea>
                  <button className="btn" id="submitbtn">Send</button>
                </div>
              </form>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    )
  }
}

module.exports = Contact;
