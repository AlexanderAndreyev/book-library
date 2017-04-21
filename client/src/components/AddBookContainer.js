import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import AddBookForm from './AddBookForm';

export default class BooksContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      newGame: {}
    };
    this.setGame = this.setGame.bind(this);
    this.submit = this.submit.bind(this);
  }

  setGame() {
    const newGame = {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      description: document.getElementById("description").value,
      picture: document.getElementById("url").value
    };
    this.setState({ newGame });
  }

  submit() {
    const newGame = Object.assign({}, this.state.newGame);
    fetch('http://localhost:8080/api/books', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(newGame)
    })
    .then(response => response.json())
    .then(data => {
      console.log('The book ' + data.title + ' was succesfully added!');
      hashHistory.push('/games');
    });
  }

  render() {
    return (
      <AddBookForm submit={ this.submit } setGame={ this.setGame } />
    );
  }
}
