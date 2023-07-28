import React, { useState } from "react";
import "./SignUp.css"; // Import the corresponding CSS file
import Modal from "../Modal/Modal";
const SignUpForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    full_address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Make the API call to the backend using fetch
    fetch("http://localhost:3000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message); // Handle the response as needed
        // Optionally, you can handle success here (e.g., show a success message, redirect, etc.)
        onClose(); // Close the modal on successful submission
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        // Optionally, you can handle the error here (e.g., show an error message)
      });
  };
  return (
    <Modal open={true} onClose={onClose}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="First Name"
              required // Adding required attribute to make it a required field
            />
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <input
              type="text"
              name="full_address"
              value={formData.full_address}
              onChange={handleChange}
              placeholder="Full Address"
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};
export default SignUpForm;