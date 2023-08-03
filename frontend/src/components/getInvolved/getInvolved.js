import React, { useState } from "react";
import Modal from "../Modal/Modal"; // Import the Modal component
import "./getInvolved.css";
import volunteerImage from "./volunteer.jpeg";

const GetInvolved = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="get-involved-container">
      <h1>Get Involved</h1>
      <div className="get-involved-box">
        <div className="get-involved-image">
          <img src={volunteerImage} alt="Volunteer" />
        </div>
        <div className="get-involved-text">
          <p>
            If you share our passion for making a positive impact, consider becoming a volunteer. Your time and effort can bring smiles to the faces of those facing challenges, making a meaningful difference in their lives. Together, we can create a brighter future for our community. Join us today and be a part of something incredible!
          </p>
          {/* Volunteer button to open the modal */}
          <button className='get-involvedButton' onClick={handleOpenModal}>Volunteer</button>
        </div>
      </div>

      {/* Modal for the sign-up form */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div className="get-involved-form">
          <h2>Sign Up to Volunteer</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="tel" placeholder="Your Phone Number" />
            <textarea placeholder="Tell us about your interests and availability"></textarea>
            <button className='get-involvedButton' type="submit">Sign Up</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default GetInvolved;
