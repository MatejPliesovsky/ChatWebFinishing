var db = require('./DBconnect.js');

module.exports = {
	register: function (nickname, email, password, callback) {
        db.nonQuery("INSERT INTO users(nickname,email,password) VALUES ('" + nickname + "','" + email + "','" + password + "')",
        function (success){
			if (typeof callback === "function") {
				callback(success);
			}
        });		
    }
};