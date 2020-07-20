const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js")

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// router.post("/api/burgers", function(req, res) {

// }) 

module.exports = router