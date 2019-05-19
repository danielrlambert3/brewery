var express = require("express");
var router = express.Router();


// Route
router.get("/", function(req, res){
    res.render("./pages/index");
});

// AUTH Routes

// show login form
router.get("/login", function(req, res){
    res.render("./pages/login");
});


module.exports = router;