const env = require('dotenv').config({path: './mailserver/.env'});

// Check if environment variables were loaded from the .env file
if(env.error) {
  console.log("dotenv: Environment variables could not be loaded");
}

const API_KEY = process.env.api_key;
const DOMAIN = process.env.domain;
const RECEIVER = process.env.receiver_email;

// Get MailGun API helper module
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

// Send mail
const sendMail = (message, cb, errCb) => {
    var data = {
        from: `<${message.sender}>`,
        to: RECEIVER,
        subject: `viktorsveins.io Contact Form: ${message.subject}`,
        text: message.body
      };      
      
      mailgun.messages().send(data, function (error, body) {
        if(error) { errCb(error); }
        else { cb(body); }
      });
}

module.exports = {
    sendMail
}