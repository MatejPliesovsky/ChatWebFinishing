var express = require('express');
var db = require('../API/DBconnect.js');
var conv = require('../API/conversations.js');
var authorization = require(appRoot + "/API/authorization");
var router = express.Router();

router.get('/', function (req, res) {
  authorization.authorize(req, function (access) {
      if (access) {
          var userid = req.headers.userid;
        	conv.get(userid, function(results){
              res.statusCode = 200;
              res.json(results);
          });
      }
      else{
          res.statusCode = 401;
          res.json(false);
      }
  });
});

router.get('/messages', function (req, res) {
console.log("fetch message request");
  authorization.authorize(req, function (access) {
      if (access) {
          var id = req.headers.conversationid;
        	conv.getRecentMessages(id, 20, function(results){
              res.statusCode = 200;
              res.json(results);
              console.log("message request response send");
          });
      }
      else{
          res.statusCode = 401;
          res.json(false);
          console.log("oh noes");
      }
  });
});

module.exports = router;
