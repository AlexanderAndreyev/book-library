import React from 'react';
import { Link } from 'react-router';

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p className="main-text">Press "Browse" to start exploring the library!</p>
        <button className="browse-btn"><Link to="/games">Browse</Link></button>
      </div>
    );
  }
}
