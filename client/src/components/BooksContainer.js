import React from 'react';
import { Link } from 'react-router';
import BooksList from './BooksList';

export default class BooksContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
    this.deleteBook = this.deleteBook.bind(this);
  }

  deleteBook(id) {
    fetch('http://localhost:8080/api/books/' + id, {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'DELETE' })
      .then(response => response.json())
      .then(data => {
        this.setState({ books: this.state.books.filter(book => book._id != id) });
        console.log('The book ' + data.title + ' has been succesfully deleted!');
      });
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/books', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({ books: data });
    });
  }

  render() {
    return (
        <BooksList books={ this.state.books } deleteBook={ this.deleteBook } />
    );
  }
}
