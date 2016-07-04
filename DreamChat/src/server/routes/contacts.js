var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var authorization = require(appRoot + "/API/authorization");
var friends = require(appRoot + "/API/friends");

router.get('/',function(req,res){
  authorization.authorize(req, function (access) {

      if (access) {
        friends.getFriends(req.headers.userid,function(results){
          res.statusCode = 200;
          res.json(results);
        });
      }
      else{
        res.statusCode  = 401;
        res.json({
            "message": "authorization failed"
        });
      }
  });
});

router.delete('/',function(req,res){
  authorization.authorize(req, function (access) {
      if (access) {
        var friendid=req.body.friendid;;
        friends.removeFriend(req.headers.userid, friendid, function(success, code){
          res.statusCode  = code;
          res.json(success);
        });
      }
      else{
        res.statusCode  = 401;
        res.json({
            "message": "authorization failed"
        });
      }
  });
});

module.exports = router;
