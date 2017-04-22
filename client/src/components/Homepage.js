import React from 'react';
import { Link } from 'react-router';

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <ul className="menu">
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/about">About</Link></li>
          </ul>
        </div>
        <div className="content">
          { this.props.children }
        </div>
      </div>
    );
  }
}
