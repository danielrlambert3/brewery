var express = require("express");
var router = express.Router();


// Route
router.get("/", function(req, res){
    console.log(req.user);
    res.render("./pages/index");
});


module.exports = router;