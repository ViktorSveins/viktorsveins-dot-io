const env = require('dotenv').config({path: './mailserver/.env'});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mailService = require('./mailservice');
const PORT = process.env.PORT || 3000;

// Parse all incoming request bodies to JSON
app.use(bodyParser.json());

// Check if environment variables were loaded from the .env file
if(env.error) {
  console.log("dotenv: Environment variables could not be loaded");
}

// API endpoint: Send mail
app.post('/api/send', function(req, res){
  mailService.sendMail(req.body, function(mail){
    return res.status(200).json(mail);
  }), function(err, code){
    return res.status(code).json(err);
  }
});

// Start server
app.listen(PORT, function () {
	console.log('Server is listening on port ' + PORT);
});
