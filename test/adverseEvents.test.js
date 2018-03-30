const { assert } = require('chai');
const request = require('supertest');
const app = require('../');
const { loadMockDatabase } = require('./fixtures');

loadMockDatabase();

describe('Adverse Events API', () => {

  describe('GET /adverse-events', () => {
    it('should return a list of 25 entries by default', () => request(app)
      .get('/adverse-events')
      .set('Accept', 'application/json')
      .expect(200)
      .then(results => assert.isEqual(results.length, 25, 'Number of results should match.'))
    );
  });
  it('should return a list of filtered results', () => request(app)
      .get('/adverse-events')
      .query({
        companyNumb: 'unknown'
      })
      .set('Accept', 'application/json')
      .expect(200)
  );

  describe('GET /adverse-event/:id');

  describe('POST /adverse-event/:id');

  describe('PUT /adverse-event/:id');

  describe('DELETE /adverse-event/:id');
});
