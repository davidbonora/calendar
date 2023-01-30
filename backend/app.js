// import express, mongoose and dotenv
const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();
// set mongodb connection string
const mongoString = process.env.MONGO_STRING;
// connect to mongodb database
mongoose.connect(mongoString, { useNewUrlParser: true });
// save connection to a variable
const db = mongoose.connection;
// verify connection
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));
// disconnection alert
db.on("disconnected", () => console.log("Disconnected from Database"));

// create a port constant
const PORT = 3000;
// create an express app
const app = express();

// analyze json files
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});