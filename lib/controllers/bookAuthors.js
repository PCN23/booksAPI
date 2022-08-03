const { Router } = require('express');
const { BookAuthor } = require('../models/BookAuthor');

module.exports = Router()

  .post('/', async (req, res) => {
    const bookAuthor = await BookAuthor.insert(req.body);
    res.json(bookAuthor);
  });
