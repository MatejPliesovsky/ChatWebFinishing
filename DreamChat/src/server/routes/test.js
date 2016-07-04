var express = require('express');
var db = require('../API/DBconnect.js');
var router = express.Router();

router.get('/', function (req, res) {
	res.send({"text": "test_get"});
});

router.post('/', function (req, res) {
	res.json({"text": "test_post"});
});

module.exports = router;