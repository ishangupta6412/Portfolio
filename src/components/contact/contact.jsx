import React from 'react';
import './contact.css';

import SocialLinks from './social-links/social-links.jsx'

function Contact (props) {
    return (
      <section id="contact">
        <div className="container">
          <div className="heading-wrapper">
            <div className="heading">
              <p className="title">
                Want to <br />
                contact me?
              </p>
              <p className="separator" />
              <p className="subtitle">
                Please, use the form below or send an email to {''}
                <span className="mail" style={{color:"#FF4C29"}}>
                  <strong>ishangupta641@gmail.com </strong>
                </span>
                :
              </p>
            </div>
            <SocialLinks />
          </div>
          <form id="contact-form" action="#">
            <input placeholder="Name" name="name" type="text" required />
            <input placeholder="Email" name="email" type="email" required />
            <textarea placeholder="Message" type="text" name="message" />
            <input className="button" id="submit" value="Submit" type="submit" />
          </form>
        </div>
      </section>
    );
  };
  
 export default Contact; 