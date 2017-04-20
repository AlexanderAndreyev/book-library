import React from 'react';
import { Link } from 'react-router';

export default class Archive extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/games/add">Save new book</Link></li>
          </ul>
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}
