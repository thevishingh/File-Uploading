const fs = require("fs");
const Image = require("../models/image");
const { uploadFileTocloudinary } = require("../helpers/cloudinaryHelper");

const uploadImage = async (req, res) => {
  try {
    // Check if file is missing in req object
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "File is required. Please upload an image.",
      });
      }
      
      console.log("REQ.FILE:", req.file); // 🔍 Must log the file info


    // Upload to Cloudinary
    const { url, publicId } = await uploadFileTocloudinary(req.file.path);

    // Save URL, publicId and uploaded user ID in DB
    const uploadedImage = new Image({
      url,
      publicId,
      uploadedBy: req.userInfo.userId,
    });

    await uploadedImage.save();

    // Delete file from local uploads folder
    fs.unlinkSync(req.file.path);

    // Send response
    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      data: uploadedImage,
    });

  } catch (error) {
    console.error("Image Upload Error:", error);

    // Try to delete the file if it exists (cleanup on failure)
    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
};

module.exports = uploadImage;
