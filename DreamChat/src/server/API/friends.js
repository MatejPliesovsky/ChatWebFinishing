var db = require('./DBconnect.js');

module.exports = {
  getFriends: function(userid, callback){
    db.query("SELECT userid,name,surname,nickname FROM friendships INNER JOIN users ON friendships.user2=users.userid WHERE user1="+userid+"",
    function (results1) {
      db.query("SELECT userid,name,surname,nickname FROM friendships INNER JOIN users ON friendships.user1=users.userid WHERE user2="+userid+"",
      function(results2){
        if (typeof callback === "function") {
            console.log(results1);
            console.log(results2);
            console.log(results1.concat(results2));
            callback(results1.concat(results2));
        }
      });
    });
  },

  removeFriend: function(userid, friendid, callback){
    var code;
    db.query("SELECT count(*) AS count FROM friendships WHERE (user1="+userid+" AND user2="+friendid+") OR "+
             "(user2="+userid+" AND user1="+friendid+")",function(result){
               console.log(result["count"]!=0);
               if(result["count"]!=0){
                 db.nonQuery("DELETE FROM friendships WHERE (user1="+userid+" AND user2="+friendid+") OR "+
                             "(user2="+userid+" AND user1="+friendid+")", function(success){
                   if (typeof callback === "function") {
                     if(success){
                       callback(success,200);
                     }
                     else{
                       callback(success,500)
                     }
                   }
                 });
               }
               else{
                 if (typeof callback === "function") {
                   callback(false,400);
                 }
               }
             });

  }

}
