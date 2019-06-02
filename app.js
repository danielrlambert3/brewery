var express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    request = require('request'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require("passport-local")

var indexRoutes = require("./routes/index"),
    searchRoutes = require("./routes/search"),
    locationRoutes = require("./routes/location"),
    registerRoutes = require("./routes/register"),
    loginRoutes = require("./routes/login"),
    logoutRoutes = require("./routes/logout"),
    User = require("./models/user")

mongoose.connect("mongodb://localhost/brewery");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//Passport Config

app.use(require("express-session")({
    secret: "Cooper is my boy",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(indexRoutes);
app.use(searchRoutes);
app.use(locationRoutes);
app.use(registerRoutes);
app.use(loginRoutes);
app.use(logoutRoutes);

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
});

// var server = app.listen(3000, function (){
//     console.log("Calling app.listen's callback function.");
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('Example app listening at http://%s:%s', host, port);
//     });
