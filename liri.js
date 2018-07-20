require("dotenv").config(); 

//variables 
var keys = require("./keys.js");

var fs = require("fs");

var twitter = require("twitter");
var client = new twitter(keys.twitter);

var spotify = require("node-spotify-api");
var spotify = new spotify(keys.spotify);

var request = require("request");
var movieName = process.argv[3];

var liriReturn = process.argv[2];


//switches case

switch(liriReturn)
{

  case 'my-tweets':
  myTweets();
  break;
  
  case "spotify-this-song":
  spotifyThisSong();
  break;

  case 'movie-this':
  movieThis();
  break;

  case 'do-what-it-says':
  doWhatItSaya();
  break;
};


//tweets
function myTweets(){

var params = {screen_name: 'Ynode'};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for(var i=0; i < tweets.length; i++){
      console.log(tweets[i].text);
    }
  }
    else {
      console.log("Error:" +error);
      return;
    }
});
}

//spotify
function spotifyThisSong(song){

  var song="halo";

  spotify.search({ type: 'track', query: song }, function(err, data) {
    if (!err) {
console.log(song);
      var songInfo = data.track.items;

      for (var i=0; i < songInfo.length; i++){
        console.log("Artist:" + songInfo[i].name)
      }
    }else{
      console.log('Error occurred: ' + err);
      return;
    }
   
  
  });
};
