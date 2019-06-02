var express = require("express");
var router = express.Router();
var request = require('request');
var passport = require("passport");
var User = require("../models/user");


// show register form
router.get("/register", function(req, res){
    res.render("./pages/register");
});

// handle sign up logic

router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err) {
            console.log(err);
            return res.render("./pages/register");
        }
        passport.authenticate("local")(req,res, function() {
            res.redirect("/");
        });
    });
    
});


module.exports = router;