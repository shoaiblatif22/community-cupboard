//user routes
const User = require("../models/user");
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');


router.post('/register', userController.Create);

router.post("/login", async (req, res) => {
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

  const token = jwt.sign({ userId: user._id }, secret, { expiresIn: 30 });
  res.json({ token });
});

module.exports = router;