var express = require("express");
var router = express.Router();
var request = require('request');
var passport = require("passport");
var User = require("../models/user");
var session = require("express-session");

//show login form
router.get("/login", function(req, res){
    res.render("./pages/login",{currentUser: req.user});
});

// handle login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function(req, res){
});

module.exports = router;