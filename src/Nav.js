import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

function Nav() {
  return (
    <div className="nav-container">
      <h2>Cortex Media</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user-list">Employee List</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
