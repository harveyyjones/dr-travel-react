import React from 'react';

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>SaaS Product</h3>
          <p>Your solution for [problem your SaaS solves].</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} SaaS Product. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer; 