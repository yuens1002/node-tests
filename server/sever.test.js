const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');

describe('server requets', () => {
  describe('get /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        //accept a function that takes the response from app
        .expect((response) => {
          expect(response.body).toInclude({name: 'todo app v.1.0.0'});
        })
        .end(done);
    });
  });
  describe('get /users', () => {
    it('should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect(response => {
          expect(response.body)
            .toInclude({
              name: 'Sunny Yuen',
              age: 24
            });
        })
        .end(done);
    });
  });
});
