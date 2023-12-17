
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function Navbar() {
  return (
    <>
      <header>
        <h1>Bug Tracker</h1>
      </header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/buglist">Bug List</Link></li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;