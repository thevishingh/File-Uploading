const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const router = express.Router();

router.get("/welcome", authMiddleware, (req, res) => {
  const { username, email, role, userId } = req.userInfo;
  res.json({
    message: "welcome to Home Page",
    userData: {
      _id: userId,
      username,
      email,
      role
    }
  });
}); 

module.exports = router;
