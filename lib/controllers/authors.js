const { Router } = require('express');
//const { run } = require('jest');
const Author = require('../models/Author');
const router = Router();

router
  .get('/', async (req, res) => {
    const authors = await Author.getAll();
    console.log(authors);
    res.json(authors);
  });




module.exports = router;
