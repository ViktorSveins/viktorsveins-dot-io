const env = require('dotenv').config({path: './mailserver/.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mailService = require('./mailservice');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse all incoming request bodies to JSON
app.use(bodyParser.json());

// Set allowed origin
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Check if environment variables were loaded from the .env file
if(env.error) {
  console.log("dotenv: Environment variables could not be loaded");
}

// API endpoint: Send mail
app.post('/api/send', function(req, res){
  // Check if all required fields were received
  if(!req.body.name || req.body.name === '') { return res.status(400).send('Name missing'); }
  if(!req.body.email || req.body.email === '') { return res.status(400).send('Email missing'); }
  if(!req.body.message || req.body.message === '') { return res.status(400).send('Message missing'); }

  // Send to mailservice
  mailService.sendMail(req.body, function(mail){
    return res.status(200).json(mail);
  }, function(err, code){
    return res.status(code).json(err);
  });
});

// Start server
app.listen(PORT, function () {
	console.log('Server is listening on port ' + PORT);
});
