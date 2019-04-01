var express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    request = require('request')

var indexRoutes = require("./routes/index"),
    searchRoutes = require("./routes/search")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(indexRoutes);
app.use(searchRoutes);


app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
});

// var server = app.listen(3000, function (){
//     console.log("Calling app.listen's callback function.");
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('Example app listening at http://%s:%s', host, port);
//     });
