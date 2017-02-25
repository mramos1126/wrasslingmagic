var path 			= require('path');
 var api_key = 'key-099e3c897cd1af01f2c7f2bac5051cc5';
var domain = 'sandboxb221f0ebbe734683b7bef8c35ca9bfef.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});



module.exports = function(app){


	app.post('/', function (req, res) {
		//console.log(req.body);
		var body = req.body;
 
		var data = {
		  from: 'mramos1126@gmail.com', // sender address
		  to: 'mramos1126@gmail.com',
		  subject: req.body.subject, // Subject line
		  text: 'New message from: ' + req.body.mess + ' : ' +req.body.email  // plaintext body
		};
		 
		mailgun.messages().send(data, function (error, body) {
		  console.log(body);
		});
	
	});
};