const { Router } = require('express');
//const { run } = require('jest');
const Author = require('../models/Author');
const router = Router();

router
  .get('/:id', async (req, res) => { 
    console.log('id params:', req.params.id);
    const author = await Author.getById(req.params.id);
    res.json(author);
  })
  .get('/', async (req, res) => {
    const authors = await Author.getAll();
    console.log(authors);
    res.json(authors);
  });




module.exports = router;
