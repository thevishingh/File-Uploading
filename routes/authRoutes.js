const express = require("express");
const { register, login } = require("../controllers/authControllers");

// router for authentication-related routes
const router = express.Router();

// All router for authentication-related routes

router.post("/register", register);
router.post("/login", login);

module.exports = router;
