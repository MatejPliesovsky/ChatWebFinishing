var login = require(appRoot + "/API/login");

module.exports = {
    authorize: function (req, callback){
        var userid = req.headers.userid;
        var token = req.headers.token;
        login.access(userid, token, function (success) {
            console.log(success);
            callback(success);
        });
    }
}
