var Regex = require("regex");

module.exports = {
    controlEmail: function (email) {
       // var regexEmail = new Regex("/^(([^<>()\\[\\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/");
        /*if (typeof callback === "function") {
            callback(regexEmail.test(email));
        }*/
        //return regexEmail.test(email);
        var re = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
        console.log("ëmail :"+re.test(email));
        return re.test(email);

    },
    

    controlPassword: function (password) {
        //var regexPassword = new Regex(/\w{8,16}/);
           /* if (typeof callback === "function") {
                callback(regexPassword.test(password));
            }   */
          // return regexPassword.test(password);
            var re = /\w{8,16}/;
            console.log("passwôrd :" + re.test(password));
            return re.test(password);
        }
};