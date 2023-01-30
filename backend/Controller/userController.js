// import express
const express = require("express");
const router = express.Router();

// listen to get request
router.get("/", (req, res) => {
    res.send("");
});

// get document from database by id
router.get("/:id", (req, res) => {
    res.send("Hello World!");
});
