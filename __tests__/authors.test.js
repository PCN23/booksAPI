const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
//const { request } = require('express');
const request = require('supertest');
const app = require('../lib/app');

describe('authors route', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('should return an author', async () => {
    const res = await request(app).get('/author');
    expect(res.body.length).toEqual(1);
    console.log(res);
  });
  afterAll(() => {
    pool.end();
  });
});
