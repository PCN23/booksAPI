const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
//const { request } = require('express');
const request = require('supertest');
const app = require('../lib/app');

describe('books/authors route', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('should return a book', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(6);
    console.log(res);
  });

  it('/books/:id should return book detail', async () => {
    const res = await request(app).get('/books/1');
    console.log(res.body);
    const principles = {
      id: '1',
      title: 'Principles',
      released: '2009',
    };
    expect(res.body).toEqual(principles);
  });

  it('should return an author', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(1);
    console.log(res);
  });
  

  afterAll(() => {
    pool.end();
  });
});


