const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js")

router.get("/", function(req, res) {
    burger.all(function(data) {
        res.render("index", {burgers: data});
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(req.body, function(result) {
        // send back the id of the new burger
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.update(req.body, req.params.id, function(result) {
            if(result.changeRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router