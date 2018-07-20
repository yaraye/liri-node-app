
//Required Node Modules
//  access keys in local file, keys.js.
var keys = require("./keys.js");
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

var params = {screen_name: 'Ynode'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
console.log("------------------------------------------------------------------------------------------------")

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotify);
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(JSON.spotify(data, null, 2)); 
});
	// If no song is provided, LIRI defaults to 'The Sign' by Ace Of Base
	// var music;
	// if (song === '') {
	// 	music = 'The Sign Ace Of Base';
	// } else {
	// 	music = song;
    // }


console.log("------------------------------------------------------------------------------------------------")

//node liri.js movie-this '<movie name here>'`
var request = require('request');
var movies = process.argv;

if(process.argv[2] == "movie-this")
{
  movieThis();
}
else if(process.argv[2] == "twitter-this")
{


}

function movieThis(){
   
  var movieName = "";
// Loop through all the words in the node argument
for (var i = 3; i < movies.length; i++) {
    movieName = movieName + "  " + process.argv[i];
}
console.log(movieName);

if(movieName == "")
{
  movieName = "Nobody";
}
 

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

request(queryUrl, function(error, response, body) {

  // If the request is successful
//   console.log(JSON.stringify(body, null, 2));
  if (!error && response.statusCode === 200)
  {
      var movieObject = JSON.parse(body);

    console.log("Title: " + movieObject.Title);
    console.log("Year: " + movieObject.Year);
    console.log("IMDB Rating: " + movieObject.imdbRating);
    console.log("country where movie was produce: " + movieObject.Country);
    console.log("Language: " + movieObject.Language);
    console.log("Plot: " + movieObject.plot);
    console.log("Actors: " + movieObject.Actors);

  }
  else {
    console.log("Error :"+ error);
    return;

  }
  function logInfo(movie) {
	// Append the command to the log file
	fs.appendFile('./log.txt', 'User Command: node liri.js movie-this ' + movie ,function(error)
       {
		if (error) throw error;
    });
}
});
  
}



console.log("------------------------------------------------------------------------------------------------")

var fs = require('fs');
var name = ('./log.txt');

console.log("------------------------------------------------------------------------------------------------")

var liriArgument = process.argv[2];
