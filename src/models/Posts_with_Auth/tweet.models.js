const mongoose = require("mongoose");

//Create Post Schema for Tutorial
const tweetSchema = new mongoose.Schema({
    content: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true });

module.exports = mongoose.model("Tweet", tweetSchema);