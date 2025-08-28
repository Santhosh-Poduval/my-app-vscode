import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">Exclusive</div>
      <nav className="header-nav">
        <a href="/" className="header-link">Home</a>
        <a href="/about" className="header-link">About</a>
        <a href="/contact" className="header-link">Contact</a>
        <a href="/signup" className="header-link">Sign Up</a>
      </nav>
    </header>
  );
};

export default Header;
