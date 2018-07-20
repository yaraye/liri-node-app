// var keys = require("./keys.js");
// var Spotify = require('node-spotify-api'); 

// // Spotify function, Spotify api
// function spotifyThis() {

// var spotify = new Spotify(keys.spotify);

//     if (!songName) {
//         songName = "The Sign Ace Of Base";
//     }

//     spotify.search({ type: 'track', query: songName }, function(err, data) {
//         if (err) {
//             console.log('Error occurred: ' + err);
//             return;
//         } else {
//             output = space + "================= LIRI FOUND THIS FOR YOU...==================" +
//                 space + "Song Name: " + "'" + songName.toUpperCase() + "'" +
//                 space + "Album Name: " + data.tracks.items[0].album.name +
//                 space + "Artist Name: " + data.tracks.items[0].album.artists[0].name +
//                 space + "URL: " + data.tracks.items[0].album.external_urls.spotify + "\n\n\n";
//             console.log(output);

//             fs.appendFile("log.txt", output, function(err) {
//                 if (err) throw err;
//                 console.log('Saved!');
//             });
//         };
//     });
// }
var keys = require("./keys.js");
var Spotify = require('node-spotify-api'); 
var spotify = new Spotify(keys.spotify);
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(JSON.stringify(data, null, 2)); 
});
	// If no song is provided, LIRI defaults to 'The Sign' by Ace Of Base
	var music;
	if (song === '') {
		music = 'The Sign Ace Of Base';
	} else {
		music = song;
    }

  


// console.log("------------------------------------------------------------------------------------------------")