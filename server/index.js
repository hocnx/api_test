var express = require('express');

var app = express();

var users = ['hoc', 'lan', 'hung'];

app.get('/api/users', function(req, res) {
  res.json(users);
});

module.exports = app;
