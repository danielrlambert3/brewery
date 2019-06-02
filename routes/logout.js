var express = require("express");
var router = express.Router();
var request = require('request');
var passport = require("passport");
var User = require("../models/user");


// logout route
router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});



module.exports = router;