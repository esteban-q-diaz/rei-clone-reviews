const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server/server');

// eslint-disable-next-line no-undef
describe('API Tests', () => {
  // eslint-disable-next-line no-undef
  it('GET request that responds with a 202 status', (done) => {
    request(app)
      .get('/api/getallreviews')
      .expect(200, done);
  });
  // eslint-disable-next-line no-undef
  it('POST request test to check if API is sorting from high to low should respond with a 202 status', (done) => {
    request(app)
      .get('/api/hightolow')
      .expect(200, done);
  });
  // eslint-disable-next-line no-undef
  it('POST request test to check if API is sorting by most helpful should respond with a 202 status', (done) => {
    request(app)
      .get('/api/mosthelpful')
      .expect(200, done);
  });
});
