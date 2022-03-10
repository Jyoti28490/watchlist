import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">Logo</div>
        <div className="navbar__pages">
          <Link to="/">
            <p>Movies</p>
          </Link>
          <Link to="/watchlist">
            <p>Watchlist</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
