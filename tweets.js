//Required Node Modules
//  access keys in local file, keys.js.
var keys = require("./keys.js");
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);


var params = {screen_name: 'Ynode'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(JSON.stringify(response,null, 2)); 
  }
});
console.log("------------------------------------------------------------------------------------------------")