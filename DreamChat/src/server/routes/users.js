var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var users = require(appRoot + "/API/users");
var authorization = require(appRoot + "/API/authorization");

/*router.post('/load', function (req, res) {
    var userid = req.body.userid;
    users.load(userid, function (user) {
        res.json(user);
    });
});*/

router.put('/', function (req, res) {
  authorization.authorize(req, function (access) {
    if(access && req.body.user.userid==req.headers.userid){
    var user = req.body.user;
    users.update(user, function (success) {
        res.json(success);
    });
  }
    else{
      res.statusCode = 401;
      res.json({});
  }});
});

router.get('/', function (req, res) {
  authorization.authorize(req, function (access) {
    if(access){
      var key = req.headers.key;
      var userid = req.headers.userid;
      if(isNaN(key)){
        users.search(key, userid, function(results){
          res.statusCode = 200;
          res.json(results);
        });
      }
      else{
        users.load(key,function(results){
          res.statusCode = 200;
          res.json(results);
        });
      }
    }
    else{
      res.statusCode = 401;
      res.json({
          "message": "authorization failed"
      });
    }
  });
});

router.put('/password',function (req, res){
  authorization.authorize(req, function (access){
    if(access) {
      var userid = req.headers.userid;
      var password = req.body.password;
      var passwordNew = req.body.newpassword;
      users.passwordChange(userid, password, passwordNew, function (success,code) {
        res.statusCode=code;
        res.json(success);
      });
    }
    else{
      res.statusCode = 401;
      res.json({
        "message": "authorization failed"
      });
    }
  });
});

module.exports = router;
