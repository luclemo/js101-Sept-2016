'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const superagent = require('superagent');
const Smooch = require('smooch-core');

// Fake data
const data = {
  "conversation": {
    "_id": "df0ebe56cbeab98589b8bfa7",
    "unreadCount": 0
  },
  "messages": [{
    "_id": "55c8c1498590aa1900b9b9b1",
    "authorId": "c7f6e6d6c3a637261bd9656f",
    "role": "appUser",
    "name": "Steve",
    "text": "Just put some vinegar on it",
    "avatarUrl": "https://www.gravatar.com/image.jpg",
    "received": 1439220041.586
  }],
  "next": "https://api.smooch.io/v1/appusers/c7f6e6d6c3a637261bd9656f/messages?after=1471995721"
}

let avatar = data.messages[0].avatarUrl;
let author = data.messages[0].name;
let text = data.messages[0].text;

// express()
// 	.use(express.static( __dirname + '/_dist'))
// 	.use(bodyParser.json())
// 	.post('/', function(req, res) {
// 		console.log(req.body);
// 		res.end();
// 	})
// 	.get('/', function(req, res) {
// 		// res.render('display', {title : 'home'});
// 		console.log(req.query);
// 		console.log('hello!');
// 	})
// 	.listen(8000, function() {
// 		console.log("running on 8000!")
// 	});

// superagent
// 	.get('/')
// 	.end(function(err, res) {
// 		console.log(res.body);
// 	});

// superagent
// 	.post('/')
// 	.send(data)
// 	.end(function(err, res) {
// 		console.log(res.body);
// 	});

