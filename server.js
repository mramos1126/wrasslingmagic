var express = require('express')
var app = express()
  var api_key = 'key-099e3c897cd1af01f2c7f2bac5051cc5';
var domain = 'wrasslingmagic.domain.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
app.get('/', function (req, res) {
 

  var data = {
  from: 'mramos1126@gmail.com',
  to: 'mramos1126@gmail.com',
  subject: 'Danzig',
  text: 'mother!'

}
console.log("work");

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
});


app.listen(3000)

