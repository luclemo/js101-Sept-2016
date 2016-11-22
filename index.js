const express = require ('express');
const superagent = require ('superagent');
const bodyParser = require('body-parser');


express()
      .get('/', function (req, res) {
        res.sendFile(__dirname + '/index.html');
      })
      .use(bodyParser.json())
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
