var express = require("express");
var router = express.Router();


// Route
app.get('/', function(req, res) {
    res.render('pages/index');
});