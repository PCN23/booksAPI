const { Router } = require('express');
//const { run } = require('jest');
const Book = require('../models/Book');
const router = Router();

router
  .get('/', async (req, res) => {
    const books = await Book.getAll();
    console.log(books);
    res.json(books);
  });

module.exports = router;
