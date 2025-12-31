import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../images/RomarLogo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  const closeMenu = () => {
    setMobileMenu(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

useEffect(() => {
  if (mobileMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [mobileMenu]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Romarking Logo" />
        </Link>
      </div>

      <div className={`nav-links ${mobileMenu ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/company-profile"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Company Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/comparative-study"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Comparative Study
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dome House Models
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reachout"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Reach Out
            </NavLink>
          </li>
        </ul>
      </div>

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
