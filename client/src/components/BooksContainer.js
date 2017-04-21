import React from 'react';
import { Link, hashHistory } from 'react-router';
import BooksList from './BooksList';

export default class BooksContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      updatedBook: {}
    };
    this.deleteBook = this.deleteBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.upBook = this.upBook.bind(this);
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

  upBook(number) {
    const updatedBook = {};
    updatedBook.title = document.getElementsByClassName("up-title")[number].value || this.state.books[number].title;
    updatedBook.author = document.getElementsByClassName("up-author")[number].value || this.state.books[number].author;
    updatedBook.description = document.getElementsByClassName("up-description")[number].value || this.state.books[number].description;
    updatedBook.picture = document.getElementsByClassName("up-url")[number].value || this.state.books[number].picture;
    this.setState({ updatedBook });
  }

  updateBook(id, number) {
    const updatedBook = Object.assign({}, this.state.updatedBook)
    fetch('http://localhost:8080/api/books/' + id, {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: "PUT",
      body: JSON.stringify(updatedBook) })
      .then(response => response.json())
      .then(data => {
        console.log('The game with id ' + id + ' has been succesfully updated');
        document.getElementsByClassName('update-form')[number].style.display = 'none';
        const newStateBooks = this.state.books.slice();
        for (let i = 0; i < newStateBooks.length; i++) {
          if (newStateBooks[i]._id === data._id) {
            newStateBooks.splice(i, 1, data);
          }
        }
        this.setState({ books: newStateBooks });
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
        <BooksList books={ this.state.books } deleteBook={ this.deleteBook } updateBook={this.updateBook} upBook={this.upBook} />
    );
  }
}
