import React, { useState, useEffect } from "react";
import AppRoutes from "../Routes";
import './App.css'; // Import the corresponding CSS file
import { motion } from "framer-motion";
import CClogo from "./cc-logo.jpg.png";
import SignUpForm from "../SignUp/SignUp.js";

const App = () => {
  const buttonVariants = {
    whileHover: { scale: 1.1 }, // Scale the button up on hover
    whileTap: { scale: 0.9 }    // Scale the button down on tap
  };

  const logoVariants = {
    animate: {
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }
  };

  return (
    <div className="app-container">
      {/* Header section */}
      <header className="header-container">
        <div className="header-left">
          {/* Home button */}
          <motion.button
            className="header-button"
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            Home
          </motion.button>
        </div>
        <div className="header-right">
          {/* Rest of the buttons */}
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            About
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            Login
          </motion.button>
          {/* Add the Signup button */}
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            Signup
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            Get Involved
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            Contact Us
          </motion.button>
        </div>
      </header>

      {/* Main content section */}
      <main>
        <div className="logo-container">
          {/* Add your logo image here */}
          <motion.img
            src={CClogo}
            alt="Logo"
            variants={logoVariants}
            animate="animate"
          />
        </div>
        <AppRoutes/>
        <SignUpForm />
    
        {/* Add your other content here */}
        <div className="aboutUs-container">
          <div className="aboutUs">
            Welcome to Community Cupboard!

            At Community Cupboard, we believe in the power of compassion and the strength of community. Our mission is to make a positive impact on the lives of those in need by providing a helping hand and nourishing their spirits.<br></br>

            <br></br>Our Story:
            Community Cupboard was born out of a shared vision among a group of passionate individuals who wanted to address the challenges faced by those who struggle to access essential resources, such as food, from food banks.<br>
            
            </br> We saw an opportunity to create a bridge between the generous resources available at the food bank and those who could benefit from them but face difficulties in accessing them due to various circumstances.<br></br>

            <br></br>Our Purpose:
            We understand that life's circumstances can sometimes make it challenging to collect packages from a food bank, whether it's due to physical limitations, vulnerability, or work commitments. <br></br>That's where we come in. Our purpose is to connect the caring hearts of our community members with those in need, creating a network of support that fosters a sense of belonging and empowerment.<br></br>

            <br></br>How It Works:
            Community Cupboard operates on a simple principle - volunteers from the community step up to lend a hand. If you need assistance in collecting a food package, our compassionate volunteers will be there to help.<br></br> They will not only deliver the package to your doorstep but will also unpack the goods for you, ensuring you receive the care and attention you deserve.

            {/* <br></br>Join Our Community:
            Whether you are someone in need of support or a community member looking to make a difference, there's a place for you at Community Cupboard. Together, we can build a stronger, more caring community where no one feels alone or goes hungry.

            <br></br>Get Involved:
            If you share our passion for making a positive impact, consider becoming a volunteer. Your time and effort can bring smiles to the faces of those facing challenges, making a meaningful difference in their lives.<br></br>

            <br></br>Contact Us:
            If you need assistance or want to join our cause, don't hesitate to reach out. You can find our contact information on the "Contact" page of our website.

            Thank you for being a part of the Community Cupboard family. Together, we can nourish not only bodies but also hearts and souls. */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
