// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <button>Homepage</button>
          </Link>
        </li>
        <li>
          <Link to="/features">
            <button>Features</button>
          </Link>
        </li>
        <li>
          <Link to="/about-us">
            <button>About Us</button>
          </Link>
        </li>
        <li>
          <Link to="/testimonials">
            <button>Testimonials</button>
          </Link>
        </li>
        <li>
          <Link to="/download">
            <button>Download</button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
