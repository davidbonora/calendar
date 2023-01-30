// import express
const express = require("express");
const router = express.Router();
// import bcrypt
const bcrypt = require("bcrypt");
// import model
const login = require("../Model/loginModel");
const { Model } = require("mongoose");

// listen to post request
router.post("/signup", async (req, res) => {
    const data = new Model({
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        role: req.body.role,
    });
    data.save()
        .then((data) =>
            res.status(201).json({
                status: "User created successfully",
                data,
                error: null,
            })
        )
        .catch((error) => {
            res.status(400).json({
                status: "User not created",
                data: null,
                error,
            });
        });
});
