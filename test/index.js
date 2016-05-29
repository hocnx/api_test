var request = require('supertest');
var test = require('tape');

var app = require('../server');

test('Test api: GET api/users ', function(t) {
  var expectedUsers = ['hoc', 'lan', 'hung'];
  request(app)
    .get('/api/users')
    .expect(200)
    .end(function(err, res) {
      t.error(err, 'No error');
      t.same(res.body, expectedUsers, 'Users as expected');
      t.end();
    });
});
