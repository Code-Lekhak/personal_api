const mongoose = require("mongoose");

//Create Post Schema for Tutorial
const postcommentSchema = new mongoose.Schema({
    content: {
        type: String,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true });

module.exports = mongoose.model("Comment", postcommentSchema);