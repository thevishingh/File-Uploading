const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middlesware");
const upload = require("../middleware/upload-middleware");
const uploadImage = require("../controllers/imageControllers");

const router = express.Router();

// upload images
router.post(
  "/upload",
  authMiddleware,
  adminMiddleware,
  upload.single('image'),
  uploadImage
);

// get all images

module.exports = router;
