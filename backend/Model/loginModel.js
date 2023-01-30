// import required modules
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a schema
const loginSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    registerAt: { type: Date, default: Date.now },
    role: { type: String, required: true, enum: ['admin', 'user'], trim: true, default: "user" },
    isActive: { type: Boolean, required: true, default: true },
    lastLogin: { type: Date, default: Date.now }
});

// create a model 
const login = mongoose.model("Login", loginSchema);

// export the model
module.exports = login;