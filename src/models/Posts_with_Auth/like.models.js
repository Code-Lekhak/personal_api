const mongoose = require("mongoose");

//Create Post Schema for Tutorial
const likeSchema = new mongoose.Schema({
    content: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    likedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    tweet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet"
    }

}, { timestamps: true });

module.exports = mongoose.model("Like", likeSchema);