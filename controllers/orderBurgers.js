const express = require("express");

const router = express.Router();

const burger = require("../models/burgers.js");



router.get("/", function(req, res) {

    burger.all((data) => {
        var hbsObject = {
            burgers: data
        }
        res.render("index", hbsObject);
    });

});

router.post("/api/burgers", (req,res)=>{
    burger.create([
        "burger_name",
        "devoured"
    ],[
        req.body.burger_name,
        req.body.devoured
    ], (data) => {
        // res.json({ id: data.insertId });
        res.json({ id: data.insertId});
    });
});


module.exports = router;




