var express = require('express');

var app = express();

// Whenever there is a request, use this callback.
// nextFunction is "app.use(express.static('./public'));"
app.use(function(request, response, nextFunction) {
	console.log(`${request.method} request for '${request.url}'`);
	nextFunction();
});

app.use(express.static('./public'));

app.listen(3000);
console.log('Express running on port 3000');

module.exports = app;	// Now we can export app to use in other files.
