const mongoose = require("mongoose");

//Create Post Schema for Tutorial
const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please Title is required"]
        },
        description: {
            type: String,
            required: [true, "Please description is required"]
        },
        baiseUrl: {
            type: String,
            required: [true, "Please description is required"]
        },
        keywords: {
            type: String,
            required: [true, "Please keywords is required"]
        },
        thumbnail: {
            type: String
        },
        isPublish: {
            type: Boolean,
        },
        contentPost: {
            type: String,
            required: [true, "Please contentData is required"]
        },
        views: {
            type: Number,
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
          },
    },
    { timestamps: true });

module.exports = mongoose.model("Post", postSchema);