var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var requests = require(appRoot + "/API/requests");
var authorization = require(appRoot + "/API/authorization");


//sending sender id and receiver id to database and creating row with requestid information
router.post('/', function (req, res) {
    authorization.authorize(req, function (access) {
        if (access) {
            var sender = req.headers.userid;
            var receiver = req.body.receiver;

            requests.sendRequest(sender, receiver, function (success,code) {
                if (success) {
                    res.statusCode = code;
                    res.json({
                        "message": "request sent successfully"
                    });
                }
                else {
                    res.statusCode = code;
                    res.json({
                        "message": "sending request failed, please try again later"
                    });
                }
            });
        }
        else {
            res.statusCode = 401;
            res.json({
                "message": "authorization failed"
            });
        }
    });
});

//delete row from database where there is a requestid
router.delete('/', function (req, res) {
    authorization.authorize(req, function (access) {
        if (access) {
            var requestid = req.body.requestid;
            var userid=req.headers.userid;
            requests.cancelRequest(requestid, userid, function (success,code) {
                if (success) {
                    res.statusCode = code;
                    res.json({
                        "message": "request canceled successfully"
                    });
                }
                else {
                    res.statusCode = code;
                    res.json({
                        "message": "unexpected error occured while deleting"
                    });
                }
            });
        }
        else {
            res.statusCode = 401;
            res.json({
                "message": "authorization failed"
            });
        }
    });
});

//adding friend to table friendships and deleting request from friend_requests
router.post('/accept', function (req, res) {
    var code;
    authorization.authorize(req, function (access) {
        if (access) {
            var requestid = req.body.requestid;
            requests.acceptRequest(requestid, req.headers.userid, function (success, code, message) {
                //code = statuscode;
                if (success) {
                    res.statusCode = code;
                    res.json({
                        "message": message
                    });
                }
                else {
                    var response= {
                        "message": message
                    }
                    res.statusCode = code;
                    res.json(response);
                }
            });
        }
        else {
            res.statusCode = 401;
            res.json({
                "message": "authorization failed"
            });
        }
    });
});

//load pending requests from table friend_requests
router.get('/', function (req, res) {
    var code;
    authorization.authorize(req, function (access) {
        if (access) {
            var userid = req.headers.userid;
            requests.loadRequests(userid, function (results) {
                var response = {
                    results: results,
                    message: "requests loaded successfully"
                };
                res.statusCode = 200;
                res.json(response);
            });
        }
        else {
            res.statusCode = 401;
            res.json({
                "message": "authorization failed"
            });
        }
    });
});

module.exports = router;
