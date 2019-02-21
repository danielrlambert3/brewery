var express = require("express");
    app = express(),
	bodyParser = require("body-parser")
    

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

// requiring routes
// var indexRoutes = require("./routes/index")


//test route
app.get("/", function(req, res){
    res.render("pages/index");
});


var server = app.listen(3000, function (){
    console.log("Calling app.listen's callback function.");
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
    });