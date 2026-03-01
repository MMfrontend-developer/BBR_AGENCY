import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="premium-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">BRR<span>Agency</span></Link>
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
              The on-demand agency uniting the top 1% of freelancers with forward-thinking businesses. Escrow-secured, lightning-fast.
            </p>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Escrow Agreement</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:hello@brragency.com">hello@brragency.com</a></li>
              <li><a href="#">+234 (708) 352-8377</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} BRR Agency. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
