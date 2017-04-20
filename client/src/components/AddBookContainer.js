import React from 'react';
import { Link } from 'react-router';

export default class BooksContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      newGame: {}
    }
  }

  render() {
    return (
      <div>
        <p><Link to="/games">Return to books</Link></p>
        <div>Hey! I'm add book container</div>
      </div>
    );
  }
}
