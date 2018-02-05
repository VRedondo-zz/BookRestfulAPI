const { book: BookModel } = require('../models');

const bookController = () => {
  const get = (req, res) => {
    const { query } = req;
    BookModel.find(query, (err, books) => {
      if(err) {
        res.status(500).send(err);
      } else {
        res.json(books);
      }
    })
  };

  const add = (req, res) => {
    const book = new BookModel(req.body);
    book.save();
    res.status(201).send(book);
  };

  const getById = (req, res) => {
    res.json(req.book);
  };

  const put = (req, res) => {
    const { _id, __v, ...book } = req.body;
    const nextBook = Object.assign(book, req.body);
    nextBook.save();
    res.json(book);
  };
  
  const patch = (req, res) => {
    const { _id, _v, ...book } = req.body;
    const nextBook = Object.assign(req.book, book);
    nextBook.save();
    res.json(book);
  };

  const remove = (req, res) => {
    req.book.remove();
    res.status(204).send('Removed');
  };

  return {
    get,
    add,
    getById,
    put,
    patch,
    remove
  };
};

module.exports = bookController();

