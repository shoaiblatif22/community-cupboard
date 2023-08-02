
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fa fa-map-marker"></i>
          <p>1 Community Lane<br />Oxford, Oxfordshire. OX1 1XX<br />Postal Code</p>
        </div>
        <div className="contact-item">
          <i className="fa fa-phone"></i>
          <p>+44 711223433</p>
        </div>
        <div className="contact-item">
          <i className="fa fa-envelope"></i>
          <p>info@communitycupboard.com</p>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button className="contact-formButton" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

