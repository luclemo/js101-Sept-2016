const express = require ('express');
const superagent = require ('superagent');
const bodyParser = require('body-parser');

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
    "avatarUrl": "https://i2.wp.com/d22assd9svjrp9.cloudfront.net/public/style_images/obsidian/profile/default_large.png?ssl=1",
    "received": 1439220041.586
  },
  {
      "_id": "55c8c1498590aa1900b7b8b2",
      "authorId": "c7f6e6d6c3a637261bd9438d",
      "role": "appUser",
      "name": "Alice",
      "text": "I like my chips salty",
      "avatarUrl": "https://cdn-images-1.medium.com/fit/c/100/100/1*OKgBaGWPGZdbLrzPvrW3nQ.jpeg",
      "received": 1439220158.622
    }],
  "next": "https://api.smooch.io/v1/appusers/c7f6e6d6c3a637261bd9656f/messages?after=1471995721"
}

express()
      .get('/', function (req, res) {
        res.sendFile(__dirname + '/index.html');
      })
      .use(bodyParser.json())
      .get('/messages', function(req, res) {
        res.json(data);
      })
      .post('/signin', function (req, res) {
        var token = signin(req.body.username, req.body.password);
        res.json({
          token: token,
          success: token ? true : false
        })
      })
      .listen(8000);

function signin (username, password) {
  var user = {
      jon: 'password1',
      stasi: 'password2'
  }
  if (password === user[username]) {
    return 'token';
  } else {
    return null;
  }
}
