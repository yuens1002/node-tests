const express = require('express');

let app = express();

app.get('/', (request, response) => {
  response.status(404).send({
    error: 'page not found',
    name: 'todo app v.1.0.0'
  });
});

app.get('/users', (request, response) => {
  response.status(200)
  .send([
    {
      name: 'Thomas Yuen',
      age: 25
    }, {
      name: 'Sunny Yuen',
      age: 24
    }, {
      name: 'Bill Sewyer',
      age: 30
    }
  ]);
});

app.listen(3300);
module.exports.app = app;
