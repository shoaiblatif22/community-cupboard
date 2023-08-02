import React, { useState } from "react";
import "./ContactUs.css";
import Modal from "../Modal/Modal";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Contact Us</h1>
      <motion.p className="contact-Us"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to our Contact Us page! We value your feedback, inquiries, and
        thoughts. Whether you have a question about our products or services,
        want to share your experience, or simply want to get in touch, we're
        here to listen and assist. Feel free to fill out the contact form
        below, and our dedicated team will get back to you as soon as possible.
        We appreciate your interest in our website and look forward to
        connecting with you. Thank you for visiting!
      </motion.p>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fa fa-map-marker"></i>
          <p>Our Address:</p>
          <p>1 Community Lane<br />Oxford, Oxfordshire. OX1 1XX<br />Postal Code</p>
        </div>
        <div className="contact-item">
          <i className="fa fa-phone"></i>
          <p>Our Telephone Number:</p>
          <p>+44 711223433</p>
        </div>
        <div className="contact-item">
          <i className="fa fa-envelope"></i>
          <p>Our Email address:</p>
          <p>info@communitycupboard.com</p>
        </div>
      </div>
      <div className="contactus">
      <motion.button
        className="contactUsButton"
        onClick={handleOpenModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Contact Us
      </motion.button>
      </div>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <motion.button
              className="contact-formButton"
              type="submit"
              whileHover={{ scale: 1.1 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </Modal>
    </motion.div>
  );
};

export default ContactUs;


