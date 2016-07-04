var db = require('./DBconnect.js');


module.exports = {
	login: function (email, password, callback){
        db.query("SELECT userid, password FROM users WHERE email LIKE '" + email + "'", function(result) {
            var userid;
			var token;
            if (result.length != 0 && result[0].password==password) {
				userid = result[0].userid;
					console.log("login successful " + result[0].userid);
					require('crypto').randomBytes(15, function (err, buffer) {
						token = buffer.toString('hex');
						console.log(token);
                        db.nonQuery("INSERT INTO tokens VALUES(" + userid + ", '" + token + "')", function() {
							if (typeof callback === "function") {
                                callback(userid, token);
                            }}
						);
					});
                }
                else {
                    console.log("login failed");
                    token = undefined;
				if (typeof callback === "function") {
                    callback(0, "");
                }
                }
        });
	},

	access: function (userid, token, callback){
		db.query("SELECT COUNT(*) AS count FROM tokens WHERE userid = " + userid + " AND token LIKE '" + token + "'", function (result) {
			var access;
			if (result != undefined && result[0].count == 1) {
				console.log("access");
                if (typeof callback === "function") {
                    callback(true);
                }
			}
			else {
				console.log("access forbidden");
                if (typeof callback === "function") {
                    callback(false);
                }
			}
		});
	},

	logout: function (userid, token, callback) {
		db.nonQuery("DELETE FROM tokens WHERE userid = " + userid + " AND token LIKE '" + token + "'", function (success) {
			if (typeof callback === "function") {
				console.log("user " + userid + " has logged out");
				callback(success);
			}
		});
	}
};
