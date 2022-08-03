const { Router } = require('express');
//const { run } = require('jest');
const Book = require('../models/Book');
const router = Router();

router
  .get('/:id', async (req, res) => { 
    console.log('id params:', req.params.id);
    const book = await Book.getById(req.params.id);
    res.json(book);
  })
  .get('/', async (req, res) => {
    const books = await Book.getAll();
    console.log(books);
    res.json(books);
  });

module.exports = router;
