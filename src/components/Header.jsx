import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
      <Link to="/" className="logo">BRR<span>Agency</span></Link>

      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className={isActive("/") ? "active" : ""} onClick={handleLinkClick}>Home</Link>
        <Link to="/services" className={isActive("/services") ? "active" : ""} onClick={handleLinkClick}>Services</Link>
        <Link to="/about" className={isActive("/about") ? "active" : ""} onClick={handleLinkClick}>About</Link>
        <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={handleLinkClick}>Contact</Link>
        <button className="btn-premium">Get Started</button>
      </nav>

      <div
        className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
