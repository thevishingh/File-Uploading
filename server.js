require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database/db");
const authRoutes = require("./routes/authRoutes");
const homeRoutes = require("./routes/homeRoutes");
const adminRoutes = require("./routes/adminRoutes");
const uploadimages = require("./routes/imageRoutes");

// creating an express app

const app = express();

// middleware to parse JSON requests
app.use(express.json());

// connect to the databaseconst connectToDatabase = require("./database/db");
connectToDatabase();

// degfine the Routes

app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/images/", uploadimages);

// start the server
PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
