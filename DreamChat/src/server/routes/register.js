var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
//var regex = require(appRoot + '/API/regex.js');

router.post('/', function (req, res) {
	var email = req.body.email;
	var password = req.body.password;
    var nickname = req.body.nickname;
    //var success1;
//var success2;

    /*regex.controlEmail(email, function (s) {
        success1=s;
    });*/

    /*regex.controlPassword(password, function (s) {
        success2 = s;
    });*/

    //if (success1 && success2) {
    //if(regex.controlPassword() && regex.controlEmail()) {
        var reg = require(appRoot + "/API/register");
        reg.register(nickname, email, password, function (success) {
            console.log(success);
            res.json(success);
        });
   /* }
    else {
        console.log("Wrong inserts");
        res.json(false);
    }*/
});



module.exports = router;
