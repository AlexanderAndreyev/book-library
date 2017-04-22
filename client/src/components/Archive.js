import React from 'react';
import { Link } from 'react-router';

export default class Archive extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="books">
          <ul className="menu">
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/games/add">Save</Link></li>
          </ul>
        </div>
        <div className="content-books">
          { this.props.children }
        </div>
      </div>
    );
  }
}
