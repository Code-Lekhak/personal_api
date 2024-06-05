const mongoose = require("mongoose");

//Create Schema for Query form with only single page
const querySchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String,
        required:[true, "email is required"],
    },
    message:{
        type:String
    }
}, 
{timestamps:true})


module.exports = mongoose.model("Query", querySchema);