const express = require('express');
const { bookController } = require('../controllers');

const router = express.Router();

router.route('/books')
.get(bookController.get)
.post(bookController.add);

router.use('/books/:id', (req, res, next) => {
  const { id } = req.params;
  BookModel.findById(id, (err, book) => {
    if (err) {
      res.status(501).send(err);
    } else if (book) {
      req.book = book;
      next();
    } else {
      res.status(404).send('no book found');
    }
  });
});

router.route('/books/:id')
.get(bookController.getById)
.put(bookController.put)
.patch(bookController.patch)
.delete(bookController.remove);

module.exports = router;
