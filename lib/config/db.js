// db.js or connectDB.js (filename of your choice)
const mongoose = require('mongoose');

// Connection function
const ConnectDB = async () => {
  try {
    // Replace 'yourdbname' with the name of your database
    const uri = 'mongodb://localhost:27017/todowithnextjs';

    // Establishing the connection to the database
    await mongoose.connect(uri);

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = ConnectDB;
