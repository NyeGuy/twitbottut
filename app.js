console.log("Bot active");

var twit = require('twit');
var config = require('./config');

//make a new twitter object using the config file
var T = new twit(config);


// Tweet a dice roll to twitter
function tweetIt() {

	var r = Math.floor(Math.random()*6)+1;

	var tweet = {
	  status: 'dice roll: ' + r + '!'
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
	  if (err) {
	  	console.log("Something went wrong!");
	  } else {
	    console.log("It worked!");
	  }
	}
}

// stream() --- connect twitter api, continuous socket
// assign events to the stream


