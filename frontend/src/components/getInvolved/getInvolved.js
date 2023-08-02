import React from 'react';
import './getInvolved.css';

const GetInvolved = () => {
  return (
    <div className="get-involved-container">
      <h1>Get Involved</h1>
      <div className="get-involved-box">
        <div className="get-involved-image">
          {/* Placeholder image */}
          <img src="path-to-image.jpg" alt="Volunteer" />
        </div>
        <div className="get-involved-text">
          <p>
          If you share our passion for making a positive impact, consider becoming a volunteer. Your time and effort can bring smiles to the faces of those facing challenges, making a meaningful difference in their lives. Together, we can create a brighter future for our community. Join us today and be a part of something incredible!
          </p>
        </div>
      </div>
      <div className="get-involved-form">
        <h2>Sign Up to Volunteer</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="tel" placeholder="Your Phone Number" />
          <textarea placeholder="Tell us about your interests and availability"></textarea>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default GetInvolved;
