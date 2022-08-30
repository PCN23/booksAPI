const pool = require('../utils/pool');

class BookAuthor { 
  id;
  author_id;
  constructor(row) { 
    this.id = row.id;
    this.author_id = row.author_id;
  }

  static async insert(bookAuthor) { 
    const { rows } = await pool.query(
      'INSERT into bookAuthors(book_id, author_id) values($1, $2) returning *; ', 
      [bookAuthor.book_id, bookAuthor.BookAuthor]);
    return new BookAuthor(rows[0]);
  }
}

module.exports = { BookAuthor };
