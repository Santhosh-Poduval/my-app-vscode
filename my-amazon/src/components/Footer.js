import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Exclusive. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Use</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
