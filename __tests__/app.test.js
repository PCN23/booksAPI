const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
//const { request } = require('express');
const request = require('supertest');
const app = require('../lib/app');
const Book = require('../lib/models/Book');

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

  it('should return a list of author', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(6);
    console.log(res);
  });

  it('/authors/:id should return author detail', async () => {
    const res = await request(app).get('/authors/1');
    console.log(res.body);
    const ray_dalio = {
      id: '1',
      name: 'Ray Dalio',
      dob: '5/5/1968',
      pob: 'Homie, Oregon',
    };
    expect(res.body).toEqual(ray_dalio);
  });
  it('should add a new book', async () => {
    const book = {
      title: 'Harry potter and the homies',
      released: '2029',
      
    };
    const res = await request(app).post('/books').send(book);
    expect(res.body.title).toEqual(book.title);
    expect(res.body.released).toEqual(book.released);
  });
  it('should add a new author', async () => {
    const author = {
      name: 'Don Julio',
      dob: '6/6/2029',
      pob: 'Hawaii'
      
    };
    const res = await request(app).post('/authors').send(author);
    expect(res.body.name).toEqual(author.name);
    expect(res.body.dob).toEqual(author.dob);
    expect(res.body.pob).toEqual(author.pob);
  });
  

  afterAll(() => {
    pool.end();
  });
});


