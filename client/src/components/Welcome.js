import React from 'react';
import { Link } from 'react-router';

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Press "Browse" to start exploring the library!</p>
        <p><Link to="/games">Browse</Link></p>
      </div>
    );
  }
}
