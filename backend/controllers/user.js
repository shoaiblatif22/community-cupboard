const User = require('../models/user')
const bcrypt = require('bcrypt');
const JWT = require("jsonwebtoken");


const saltRounds = 10; // Number of salt rounds for bcrypt hashing


const UsersController = {
    Create: (req, res) => {
      const { first_name, last_name, full_address, email, password} = req.body;
  
      // Generate a hash for the password
      bcrypt.hash(password, saltRounds, async (err, hashedPassword) => {
        if (err) {
          return res.status(500).json({ message: "Internal server error" });
        } //instead of passing a res.status, allow it to continue if hash password
        //matches the one in database
  
        const user = new User({
            
            first_name: first_name,
            last_name: last_name,
            full_address: full_address,
            email: email,
            password:  hashedPassword
        });
  
        
        const savedUser = await user.save()
      });
    }
  }

async function login(req, res) {
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
        
}
    


module.exports = UsersController