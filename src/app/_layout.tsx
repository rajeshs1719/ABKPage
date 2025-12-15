import React, { useState, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import "../nav.css"; // Ensure this path points to where you created the file
import logoMain from "../assets/logo.png";

export default function Layout({ children }: { children?: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* LEFT LOGO */}
        <div className="nav-left">
          <img src={logoMain} alt="ABK Logo" className="logo-main" />
        </div>

        {/* NAV LINKS (Desktop + Mobile Slide-out) */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" className="nav-link" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className="nav-link" onClick={closeMenu}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className="nav-link" onClick={closeMenu}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="nav-link" onClick={closeMenu}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/course" className="nav-link" onClick={closeMenu}>
              Course
            </NavLink>
          </li>

          <li className="mobile-contact">
            <NavLink to="/contact" onClick={closeMenu}>
              <button className="btn-solid mobile-btn">Contact Us</button>
            </NavLink>
          </li>

          {/* Mobile Only: Show buttons inside menu on small screens if desired, 
              or keep separate. For now, I hid buttons on mobile to save space, 
              but we can add a 'Contact' link here easily. */}
        </ul>

        {/* RIGHT BUTTONS (Desktop Only) */}
        <div className="nav-buttons">
          <NavLink to="/contact">
            <button className="btn-solid">Contact Us</button>
          </NavLink>
        </div>

        {/* HAMBURGER ICON (Mobile Only) */}
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      <main>{children}</main>
    </>
  );
}
