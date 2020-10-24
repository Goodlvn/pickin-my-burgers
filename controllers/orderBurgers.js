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

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    burger.update({
        devoured: req.body.devoured
    }, condition, (data) => {
        if (data.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })

});


module.exports = router;




