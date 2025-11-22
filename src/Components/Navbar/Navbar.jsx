import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../images/RomarLogo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  // ✅ Function to close menu when clicking a link
 

    const closeMenu = () => {
    setMobileMenu(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // adds smooth scrolling effect
    });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Romarking Logo" />
        </Link>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${mobileMenu ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
          <li><Link to="/company-profile" onClick={closeMenu}>Company Profile</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/comparative-study" onClick={closeMenu}>Comparative Study</Link></li>
          <li><Link to="/gallery" onClick={closeMenu}>Dome House Models</Link></li>
          <li><Link to="/reachout" onClick={closeMenu}>Reachout</Link></li>
        </ul>
      </div>

      {/* Mobile Toggle */}
      <div
        className={`mobile-toggle ${mobileMenu ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
