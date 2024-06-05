const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


//Create Schema for User Detailes
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        trim: true,
        lowercase: true,
    },
    
    fullName: {
        type: String,
        required: [true, "fullName is required"],
        trim: true,
        index: true
    },

     phone: {
        type: String,
        required: [true, "phone is required"],
        unique: true,
    },

    password: {
        type: String,
        required: [true, "password is required"]
    },
   
    designation:{
        type: String,
        enum: ['User', 'Admin'],
        default:'User'
    },

    refreshToken: {
        type: String
    }
},
    { timestamps: true })


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

//Create Generate Access Token 
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

//Create Generate refresh Token 
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

// exports cmd
module.exports = mongoose.model("User", userSchema);