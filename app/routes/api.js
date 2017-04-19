import express from 'express';
import Book from '../models/Book.model';

const router = express.Router();

router.get('/books', (req, res) => {
  Book.find({})
  .then(books => {
    res.json(books);
  });
});

router.get('/books/:id', (req, res) => {
  Book.findOne({ _id: req.params.id })
  .then(book => {
    res.json(book);
  });
});

router.post('/books', (req, res) => {
  Book.create(req.body)
  .then(book => {
    res.json(book);
  });
});

router.put('/books/:id', (req, res) => {
  Book.findByIdAndUpdate({ _id: req.params.id }, req.body)
  .then(() => {
    Book.findOne({ _id: req.params.id })
    .then(book => {
      res.json(book);
    });
  });
});

router.delete('/books/:id', (req, res) => {
  Book.findByIdAndRemove({ _id: req.params.id })
  .then(book => {
    res.json(book);
  });
});

export default router;
