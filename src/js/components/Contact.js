import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Sidebar from './Sidebar';
=======
import Menu from './Menu.js';
>>>>>>> caeb8e58e7430e9d816bfa49ee44a96b5f8774df
import Nav from './Nav.js';
import Footer from './Footer.js';

function Contact() {
    return (
<<<<<<< HEAD
      <div className="content-wrapper">
        <Sidebar />
        <Nav />
        <section className="contact">
          <div className="container">
            <h1 className="text-large">Contact</h1>
            <form id="formArea" className="formArea" method="POST">
              <div className="main-group">
                <div className="form-group">
                  <label for="name">Name</label>
                  <input type="text" id="name"/>
=======
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
>>>>>>> caeb8e58e7430e9d816bfa49ee44a96b5f8774df
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

module.exports = Contact;
