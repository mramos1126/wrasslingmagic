var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


 
var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Allows the serving of static content such as CSS.
app.use(express.static(__dirname + '/app/public'));




// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});