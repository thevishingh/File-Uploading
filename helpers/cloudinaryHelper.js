const cloudinary = require("../config/cloudinary");

const uploadFileTocloudinary = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath);

        return {
            url: result.secure_url,
            publicId : result.public_id
        }

    } catch (error) {
        console.error("Got Error While Uploading File", error);
        throw new Error
    }
};

module.exports = {uploadFileTocloudinary};