import React from 'react';
import { hashHistory, Link } from 'react-router';
import AddBookForm from './AddBookForm';

export default class AddBooksContainer extends React.Component {

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
      title: document.getElementsByClassName("title")[0].value,
      author: document.getElementsByClassName("author")[0].value,
      description: document.getElementsByClassName("description")[0].value,
      picture: document.getElementsByClassName("url")[0].value
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
