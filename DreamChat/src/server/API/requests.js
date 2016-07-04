var db = require('./DBconnect.js');


module.exports = {
    sendRequest: function (senderid, receiverid, callback) {
        var code;
        db.query("SELECT COUNT(*) AS count FROM friend_requests WHERE (sender='" + senderid + "' AND receiver='" + receiverid + "') OR (sender='" + receiverid + "' AND receiver='" + senderid + "')",
        function (result) {
            var count = result[0].count;
            db.query("SELECT COUNT(*) AS count FROM friendships WHERE (user1='" + senderid + "' AND user2='" + receiverid + "') OR (user1='" + receiverid + "' AND user2='" + senderid + "')",
            function (result2) {
                if (parseInt(result2[0].count) + parseInt(count) != 0) {
                    if (typeof callback === "function") {
                        callback(false,409);
                    }
                }
                else {
                    db.nonQuery("INSERT INTO friend_requests(sender,receiver) VALUES(" + senderid + ", " + receiverid + ")", function (success) {
                        if (typeof callback === "function") {
                            if (success) {
                                callback(success, 200);
                            }
                            else {
                                callback(success, 500);
                            }
                        }
                    });
                }
            });
        })
	},

	cancelRequest: function (requestid, userid, callback) {
    db.query("SELECT * FROM friend_requests WHERE requestid="+requestid, function(result){
      if(result[0].sender==userid || result[0].receiver==userid){
        db.nonQuery("DELETE FROM friend_requests WHERE requestid="+requestid, function (success) {
    			if (typeof callback === "function") {
            if(success){
              callback(true,200);
            }
            else{
              callback(false,500);
            }
    			}
    		});
      }
      else{
        if (typeof callback === "function") {
          callback(false,401);
        }
      }
    });


	},

  acceptRequest: function (requestid, userid, callback) {
        var overallSuccess = true;
        var code;
        var message;
        db.query("SELECT * FROM friend_requests  WHERE requestid=" + requestid, function (results) {
            if(results.length!=0){
              var senderid = results[0].sender;
              var receiverid = results[0].receiver;
              console.log(userid+" "+receiverid);
              if (userid == receiverid) {
                  if (senderid != "undefined" && receiverid != "undefined") {
                      db.nonQuery("DELETE FROM friendships  WHERE  (user1='" + senderid + "' AND user2='" + receiverid + "') OR (user1='" + receiverid + "' AND user2='" + senderid + "')", function () {
                          db.nonQuery("INSERT INTO friendships(user1,user2) VALUES(" + senderid + ", " + receiverid + ")", function (success) {
                              if (success) {
                                  db.nonQuery("DELETE FROM friend_requests WHERE requestid=" + requestid, function (success) {
                                      if (success) {
                                          message="request accepted successfully";
                                          code = 200;
                                          if (typeof callback === "function") {
                                              callback(overallSuccess, code, message);
                                          }
                                      }
                                      else {
                                          message ="deletion failed while accepting request";
                                          overallSuccess = false;
                                          code = 200;
                                          if (typeof callback === "function") {
                                              callback(overallSuccess, code, message);
                                          }
                                      }
                                  });
                              }
                              else {
                                  message ="insertion failed while accepting request";
                                  overallSuccess = false;
                                  code = 500;
                                  if (typeof callback === "function") {
                                      callback(overallSuccess, code, message);
                                  }
                              }
                          });
                      });
                  }
                  else {
                      message ="request not found";
                      overallSuccess = false;
                      code = 400; //bad request
                      if (typeof callback === "function") {
                          callback(overallSuccess, code, message);
                      }
                  }
              }
              else {
                  message ="unauthorized access";
                  overallSuccess = false;
                  code = 401;
                  if (typeof callback === "function") {
                      callback(overallSuccess, code, message);
                  }
              }
            }
          else{
            message ="request not found";
            overallSuccess = false;
            code = 400; //bad request
            if (typeof callback === "function") {
                //console.log("overallsuccess: "+ overallSuccess+"message: " + message + "    code: " + code);
                callback(overallSuccess, code, message);
            }
          }

        });
},


	loadRequests: function (userid,callback) {
		db.query("SELECT requestid,userid,name,surname,nickname FROM friend_requests INNER JOIN users ON friend_requests.sender=users.userid WHERE receiver=" + userid, function (results) {
			if (typeof callback === "function") {
				callback(results);
			}
		});
	}
};
