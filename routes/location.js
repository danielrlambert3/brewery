var express = require("express");
var router = express.Router();
var request = require('request');


// Route
router.get("/location", function(req, res){
    let location = req.query.id;
    console.log(location);
    let apiUrl = 'https://api.openbrewerydb.org/breweries/' + location;
    console.log(apiUrl);

    //Brewery State Search

request(apiUrl, function (error, response, body) {
    if(error){
        console.log('error:', error); // Print the error if one occurred
    } else {
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        let locationData = JSON.parse(body);
        console.log(typeof locationData);
        console.log(locationData);
        // let brewery = body;
        // console.log(brewery);
       res.render("./pages/locations", {locationData: locationData,currentUser: req.user});

    }
    });

    // res.redirect("/");
});


module.exports = router;