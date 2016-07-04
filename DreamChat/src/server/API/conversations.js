var db = require('./DBconnect.js');

module.exports = {
  newMessage: function(user1, user2, message, callback){
    var code;
    var id;
    db.query("SELECT * FROM conversations WHERE (user1="+user1+" AND user2="+user2+") OR (user1="+user2+" AND user2="+user1+")", function(result){
      if(result && result.length>0){

        id=result[0].conversationID;
        db.nonQuery("INSERT INTO messages(conversationid,userid,message) VALUES("+id+","+user1+",'"+message+"')",function(success){
    		  if (typeof callback === "function") {
                  callback(success,id);
              }
        });
      }
      else{
        db.nonQuery("INSERT INTO conversations(user1,user2) VALUES('"+user1+"','"+user2+"')",function(success){
          console.log("sme tu?");
          if(success){
            db.nonQuery("INSERT INTO messages(conversationid,userid,message) VALUES((SELECT conversationid FROM conversations ORDER BY conversationid LIMIT 1),"
                        +user1+",'"+message+"')",function(success2){
              if (typeof callback === "function") {
                  db.query("SELECT * FROM conversations WHERE (user1="+user1+" AND user2="+user2+") OR (user1="+user2+" AND user2="+user1+")",function(result){
                    if(result.length!=0){
                      callback(success2,result.conversationid);
                    }
                    else{
                      callback(success, 0);
                    }
                  });

              }
            });
          }
          else{
            if (typeof callback === "function") {
                callback(false,0);
            }
          }
        });
      }
    });
  },

  get: function(userid, callback){
  var query = "SELECT conversations.conversationid,user1,user2,message,date,u1.userid AS userid1,u1.name AS name1 ,u1.surname AS surname1, u2.userid AS userid2,u2.name AS name2,u2.surname AS surname2 FROM conversations INNER JOIN (SELECT * FROM messages ORDER BY messageid DESC) msg ON msg.conversationid=conversations.conversationid"+
                           " INNER JOIN users u1 ON u1.userid=user1 INNER JOIN users u2 ON u2.userid=user2 WHERE user1="+userid+" OR user2="+userid+" GROUP BY conversations.conversationid";
                           console.log(query);
    db.query(query, function(results){
          if (typeof callback === "function") {
                callback(results);
          }
    });
  },

  getRecentMessages: function(conversationid, limit, callback){
    db.query("SELECT * FROM messages WHERE conversationid="+conversationid+" ORDER BY messageID DESC LIMIT "+limit, function(results){
      if (typeof callback === "function") {
            callback(results);
      }
    });
  },

  getMoreMessages: function(conversationid, limit, lastMessageId, callback){
    db.query("SELECT * FROM messages WHERE conversationid="+conversationid+" AND messageid<"+lastMessageId+" ORDER BY messageID DESC LIMIT "+limit, function(results){
      if (typeof callback === "function") {
            callback(results);
      }
    });
  }
}
