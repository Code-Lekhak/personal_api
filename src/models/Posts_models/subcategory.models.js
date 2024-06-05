const mongoose = require("mongoose");

//Create Post Schema for Tutorial
const subcategorySchema = new mongoose.Schema({
    subcategoryname: {
        type: String,
        required: [true, "Please subcategoryname is required"]
    },
    categoryid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }

}, { timestamps: true });

module.exports = mongoose.model("Subcategory", subcategorySchema);