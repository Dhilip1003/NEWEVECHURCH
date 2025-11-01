import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Praise Carmel Prayer House. All rights reserved.</p>
        <p className="footer-message">May God bless you abundantly!</p>
      </div>
    </footer>
  );
};

export default Footer;
