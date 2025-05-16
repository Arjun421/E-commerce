import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ShopEasy</h3>
          <p>Your one-stop shop for everything you need. Quality products at unbeatable prices.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <p className="number">+91 3487383236</p><br />
            <p className="gmail">grabsy1@gmail.com</p><br />
            <a href="#"><i className="instagram">Instagram</i></a><br/>
            <a href="#"><i className="linkedin"></i>Linkedln</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ShopEasy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

