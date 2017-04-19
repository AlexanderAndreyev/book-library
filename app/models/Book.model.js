import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  postDate: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model('Book', BookSchema);

export default Book;
