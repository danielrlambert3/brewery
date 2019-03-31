var express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    request = require('request')

var server = app.listen(3000, function (){
    console.log("Calling app.listen's callback function.");
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
    });
    

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//Routes

app.get("/", function(req, res){
    res.render("pages/index");
});

app.post("/search", function(req, res){
    console.log(req.body.state);
    let state = req.body.state;
    let apiUrl = 'https://api.openbrewerydb.org/breweries/search?query=' + state;
    console.log(apiUrl);

    //Brewery State Search

request(apiUrl, function (error, response, body) {
    if(error){
        console.log('error:', error); // Print the error if one occurred
    } else {
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        let brewery = body;
        console.log(brewery);
    }
    });

    
    /*if(req){
        console.log('request');
        console.log(req.body.name);
    } else {
        console.log('not working');
    } */
    res.redirect("/");
});
