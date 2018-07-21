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


// `node liri.js my-tweets`
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

//node liri.js spotify-this-song '<song name here>'`
function spotifyThisSong(song){

  var song=process.argv[3];
 

  spotify.search({ type: 'track', query: song }, function(err, data) {
 
    if (!err) {
// console.log(JSON.stringify(data,null,2));
     
var songs = data.tracks.items;

for (var i = 0; i < songs.length; i++) {
  
  console.log("Artist(s): " + songs[0].artists[0].name);
  console.log("-----------------------------------");
  console.log("Song Name: " + songs[0].name);
  console.log("-----------------------------------");
  console.log("Preview Link: " + songs[0].preview_url);
  console.log("-----------------------------------");
  console.log("Album: " + songs[0].album.name);
  console.log("-----------------------------------");
  return;
}

    }else{
      console.log('Error occurred: ' + err);
      return;
    }
    if(song === "")
    {
      song = "The Sign";
    }
  
  });
};

//`node liri.js movie-this '<movie name here>'`
var movies = process.argv;


function movieThis(){
  //empty variable for holding the movie name
  var movieName="";

// Loop through all the words in the node argument
for (var i = 3; i < process.argv.length; i++) {

    movieName = movieName + "+" + process.argv[i];

}
if(movieName == "")
{
  movieName = "Nobody";
}

// console.log(movieName);
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

request(queryUrl, function(error, response, body) {

  // If the request is successful

  // console.log(JSON.stringify(body, null, 2));
  if (!error && response.statusCode === 200)
  {
      var movieObject = JSON.parse(body);
    console.log("------------------------------------------------------------------");
    console.log("Title: " + movieObject.Title);
    console.log("Year: " + movieObject.Year);
    console.log("IMDB Rating: " + movieObject.imdbRating);
    console.log("country where movie was produce: " + movieObject.Country);
    console.log("Language: " + movieObject.Language);
    console.log("Plot: " + movieObject.Plot);
    console.log("Actors: " + movieObject.Actors);
  }
  else {
    console.log("Error :"+ error);
    return;

  }
});
}

//node liri.js do-what-it-says`
function doWhatItSaya(){

fs.readFile("random.txt","utf8",function(error,data){
  if (error){
    return console.log(error);
    
        // console.log(data);
  
  } else {
    var data = data.split(',');
    if (data[0] === "spotify-this-song") {
      spotifyThisSong(data);

        // console.log(data);
    }
  }
});
}
