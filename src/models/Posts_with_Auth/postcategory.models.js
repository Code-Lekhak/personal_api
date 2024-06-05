const mongoose = require("mongoose");

//Create Post Schema for Tutorial
const categorySchema = new mongoose.Schema({
    postcategory: {
        type: String,
        required: [true, "Please Add categoryname"]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    
      post:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Post",
      }
},
    { timestamps: true });

module.exports = mongoose.model("Category", categorySchema);