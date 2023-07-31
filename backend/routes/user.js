//user routes
const User = require("../models/user");
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const jwt = require('jsonwebtoken'); // Import jwt module

// Define your secret key here (e.g., replace 'your-secret-key' with your actual secret)
const secret = 'your-secret-key';

router.post('/register', userController.Create);

router.post("/login", async (req, res) => {
  console.log("This is the user router")
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email });
  if (!user) {
    res.status(401).json({ message: "Invalid email or password" });
    return;
  }

  if (!user.comparePassword(password)) {
    res.status(401).json({ message: "Invalid email or password" });
    return;
  }
  console.log("Success")

  const token = jwt.sign({ userId: user._id }, secret, { expiresIn: 30 });
  res.json({ token });
});

module.exports = router;