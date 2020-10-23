const express = require("express");

const router = express.Router();

const burger = require("../models/burgers.js");



router.get("/", function(req, res) {

    burger.all((data) => {
        console.log(data);

        res.send(data);

    });

});




module.exports = router;

