const { Router } = require('express');
const { BookAuthor } = require('../models/BookAuthor');

module.exports = Router()

  .post('/', async (req, res) => {
    const bookAuthor = await BookAuthor.insert(req.body);
    res.json(bookAuthor);
  }).get('/:id', async (req, res) => {
    const bookAuthor = await BookAuthor.getById(req.params.id);
    res.json(bookAuthor);
  });
