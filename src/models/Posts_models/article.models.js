const mongoose = require("mongoose");

//Create Post Schema for Tutorial
const articleSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please Title is required"]
        },
        description: {
            type: String,
            required: [true, "Please description is required"]
        },
        keywords: {
            type: String,
            required: [true, "Please keywords is required"]
        },
        articleTags: {
            type: String
        },
        contentData: {
            type: String,
            required: [true, "Please contentData is required"]
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        },
        subcategoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subcategory"
        },
        createBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    { timestamps: true });

module.exports = mongoose.model("Article", articleSchema);