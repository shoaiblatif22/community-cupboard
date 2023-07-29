import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../Routes";
import './App.css'; // Import the corresponding CSS file
import { motion } from "framer-motion";
import CClogo from "./cc-logo.jpg.png";
import SignUpForm from "../SignUp/SignUp.js";
import LogInForm from "../login/LoginForm";



const App = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignUpButtonClick = () => {
    setIsSignUpOpen(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
  };

  const [isLogInOpen, setIsLogInOpen] = useState(false);
 

  const handleLogInButtonClick = () => {
    setIsLogInOpen(true);
  };

  const handleCloseLogIn = () => {
    setIsLogInOpen(false);
  };

  const handleHomeButtonClick = () => {
    navigate("/home"); // Use navigate function to navigate to "/aboutus" path
  };


   const handleAboutButtonClick = () => {
    navigate("/aboutus"); // Use navigate function to navigate to "/aboutus" path
  };

  const handleContactUsButtonClick = () => {
    navigate("/contactus")
  };

  const handleGetInvolvedButtonClick = () => {
    navigate("/getinvolved")
  };

  const handleNotificationsButtonClick = () => {
    navigate("/notifications")
  };

  const handleBasketButtonClick = () => {
    navigate("/basket")
  };

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
            onClick={handleHomeButtonClick}
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
            onClick={handleAboutButtonClick}
  
          > 
            About
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={handleLogInButtonClick}
          >
            Login
          </motion.button>
          {/* Add the Signup button */}
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={handleSignUpButtonClick} // Open the sign-up form when clicked
          >
            Signup
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={handleGetInvolvedButtonClick}
          >
            Get Involved
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={handleContactUsButtonClick}
          >
            Contact Us
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={handleNotificationsButtonClick}
          >
            Notifications
          </motion.button>
           <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={handleBasketButtonClick}
          >
            Basket
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
        <AppRoutes /> 
        {isSignUpOpen && <SignUpForm onClose={handleCloseSignUp} />} {/* Render SignUpForm only when isSignUpOpen is true */}
        {isLogInOpen && <LogInForm onClose={handleCloseLogIn} />} 
        {/* Add your other content here */}
       
      </main>
    </div>
  );
};

export default App;
