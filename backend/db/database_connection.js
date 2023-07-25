const mongoose = require('mongoose');


async function connectDB() {
  try {
    const connectionStr = process.env.CONNECTION_STRING;
    await mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB Atlas');
    return mongoose.connection;
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    return null;
  }
}

module.exports = connectDB;