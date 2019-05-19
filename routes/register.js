var express = require("express");
var router = express.Router();
var request = require('request');
var User = require("../models/user");


// show register form
router.get("/register", function(req, res){
    res.render("./pages/register");
});

// handle sign up logic

router.post("/register", function(req, res){
    User.create({
        username: req.body.username,
        password: req.body.password
    });

    res.render("./pages/index");
});

// // Route
// router.post("/search", function(req, res){
//     let state = req.body.state;
//     let apiUrl = 'https://api.openbrewerydb.org/breweries/search?query=' + state;
//     console.log(apiUrl);

//     //Brewery State Search

// request(apiUrl, function (error, response, body) {
//     if(error){
//         console.log('error:', error); // Print the error if one occurred
//     } else {
//         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//         let parsedData = JSON.parse(body);
//         console.log(typeof parsedData);
//         console.log(parsedData);
//         // let brewery = body;
//         // console.log(brewery);
//         res.render("./pages/results", {parsedData: parsedData});
        
//     }
//     });

//     // res.redirect("/");
// });


module.exports = router;