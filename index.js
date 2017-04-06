var express = require('express');
var path = require('path');
var app = express();

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log('Magic happens on port ' + port);
});

// app.use(express.static('public'));

// var port = process.env.PORT || 3000;
// app.listen(port);