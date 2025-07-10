require("dotenv").config();
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to the database successfully");
    return mongoose.connection;
  } catch (error) {
    console.log("Error connecting to the database:", error);
    throw error;
  }
};

// Export the connectToDatabase function
module.exports = connectToDatabase;