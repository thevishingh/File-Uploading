const mongoose = require("mongoose");

// creating Schemas

const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        require: true,
    },
    publicId: {
        type: String,
        required: true,
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },

}, { timestamps: true });

module.exports = mongoose.model("Image", imageSchema);