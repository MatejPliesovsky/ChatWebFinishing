var express = require('express');
var router = express.Router();
// var authorization = require("../API/authorization");

/* GET home page. */
router.get('*', function (req, res) {
    // authorization.authorize(req, function (access) {
        // if (access) {
            res.render('index', { pageTitle: 'DREAM CHAT' });
        // }
        // else {
        //     res.render('login', { pageTitle: 'DREAM CHAT' });
        // }
    // });
});

module.exports = router;

