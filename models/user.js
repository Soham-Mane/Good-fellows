const mongoose= require("mongoose");

// Setting up a User Schema
const userSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        unique: true,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: 
        { 
            type: String,
            enum: ['Point']
        },
        coordinates: [Number]
    },
    img: {
        data: Buffer,
        contentType: String
    },
    imgName: {
        type: String
    },
    userType: {
        type: String
    }
}, {
    timestamps: true
});

userSchema.index({ location: "2dsphere" });
// Setting up a new user model
const User = new mongoose.model('User', userSchema);
module.exports= User;

