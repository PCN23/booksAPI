const { Router } = require('express');
//const { run } = require('jest');
const Book = require('../models/Book');
const router = Router();

router
    .get('/', async (req, res) => { 
        const authors = await Author.getAll();
        
    })




module.exports = router;
