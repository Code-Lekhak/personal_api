const mongoose = require("mongoose");

//Create Post Schema for Tutorial
const categorySchema = new mongoose.Schema({
    cotegoryname: {
        type: String,
        required: [true, "Please Add cotegoryname"]
    }
},
    { timestamps: true });

module.exports = mongoose.model("Category", categorySchema);