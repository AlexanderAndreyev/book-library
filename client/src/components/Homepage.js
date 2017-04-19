import React from 'react';
import { Link } from 'react-router';

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}
