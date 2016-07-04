var express = require('express');
var db = require(appRoot + '/API/DBconnect.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
	
	res.render(appRoot + '/API/index.html',{"text": "test"});

});

router.post('/', function (req, res) {
	console.log(req.body);
	res.json(req.body);
});

module.exports = router;