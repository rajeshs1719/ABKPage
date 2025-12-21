import React, { useState, ReactNode } from "react";
import { NavLink } from "react-router-dom";

import logoMain from "../assets/logo.png";

// Note: In your local environment, keep these imports
// import "../nav.css";
// import logoMain from "../assets/logo.png";
// import Footer from "../page/Footer/Footer";

// Mock Components for preview
const Footer = () => (
  <footer className="footer-mock">
    <p>© 2024 ABK Japanese Language School. All rights reserved.</p>
  </footer>
);

export default function App({ children }: { children?: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCourseDropdownOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsCourseDropdownOpen(false);
  };

  const toggleCourseDropdown = (e: React.MouseEvent) => {
    // Only toggle (prevent link navigation) on screens smaller than 960px (per your nav.css)
    if (window.innerWidth <= 960) {
      e.preventDefault();
      setIsCourseDropdownOpen(!isCourseDropdownOpen);
    }
  };

  return (
    <div className="layout-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

        :root {
          --white: #ffffff;
          --black-rgb: 0, 0, 0;
          --nav-text: #222222;
          --nav-green: #2F4B36;
        }

        .navbar {
          width: 100%;
          height: 80px;
          background: var(--white);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
          box-shadow: 0 1px 6px rgba(var(--black-rgb), 0.08);
          font-family: 'Poppins', sans-serif;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-sizing: border-box;
        }

        .logo-main {
          height: 52px;
          object-fit: contain;
        }

        .nav-links {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 48px;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          text-decoration: none;
          color: var(--nav-text);
          font-weight: 400;
          font-size: 18px;
          position: relative;
          transition: color 0.3s ease;
          padding-bottom: 5px;
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--nav-green);
          font-weight: 600;
        }

        /* --- DROPDOWN SPECIFIC STYLES --- */
        .nav-item-dropdown {
          position: relative;
        }

        .chevron {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: var(--white);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border-radius: 8px;
          min-width: 180px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          list-style: none;
          z-index: 1001;
        }

        .dropdown-item {
          display: block;
          padding: 0.8rem 1.5rem;
          color: var(--nav-text);
          text-decoration: none;
          font-size: 16px;
          transition: background 0.2s ease, color 0.2s ease;
          font-weight: 400;
        }

        .dropdown-item:hover {
          background: #f0fdf4;
          color: var(--nav-green);
        }

        /* Desktop Hover Behavior */
        @media (min-width: 961px) {
          .nav-item-dropdown:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
          }
          .nav-item-dropdown:hover .chevron {
            transform: rotate(180deg);
          }
        }

        /* --- BUTTONS & HAMBURGER --- */
        .nav-buttons {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .btn-solid {
          padding: 10px 26px;
          background: var(--nav-green);
          color: var(--white);
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .btn-solid:hover { background: #1e3324; }

        .hamburger {
          display: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          z-index: 1001;
        }

        .bar {
          width: 25px;
          height: 3px;
          background-color: var(--nav-text);
          transition: 0.3s ease;
          border-radius: 2px;
        }

        .mobile-contact{
        display:none;}

        /* --- MOBILE RESPONSIVENESS --- */
        @media screen and (max-width: 960px) {
          .navbar { padding: 0 20px; height: 70px; }
          .logo-main { height: 40px; }
          .hamburger { display: flex; }
          .nav-buttons { display: none; }
          .mobile-contact { display: block; width: 100%; }
          .mobile-btn { width: 100%; margin-top: 10px; }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background: var(--white);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 25px;
            box-shadow: -2px 0 10px rgba(0,0,0,0.1);
            transition: right 0.3s ease-in-out;
            padding: 20px;
          }

          .nav-links.open { right: 0; }

          /* Mobile Dropdown Interaction */
          .dropdown-menu {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            max-height: 0;
            overflow: hidden;
            width: 100%;
            padding: 0;
            transition: max-height 0.3s ease;
            background: #fcfcfc;
          }

          .dropdown-menu.mobile-open {
            max-height: 400px;
            padding: 10px 0;
          }

          .nav-item-dropdown { width: 100%; text-align: center; }
          .dropdown-trigger { justify-content: center; width: 100%; }
          .dropdown-item { padding: 0.5rem; font-size: 18px; }

          .hamburger.open .bar:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
          .hamburger.open .bar:nth-child(2) { opacity: 0; }
          .hamburger.open .bar:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }
        }

        .footer-mock {
          background: #1a1a1a;
          color: #999;
          padding: 2rem 5%;
          text-align: center;
          margin-top: 50px;
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-left">
          <img src={logoMain} alt="ABK Logo" className="logo-main" />
        </div>

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
            <NavLink to="/testimonials" className="nav-link" onClick={closeMenu}>
              Testimonials
            </NavLink>
          </li>

          {/* COURSE DROPDOWN */}
          <li className="nav-item-dropdown">
            <div
              className="nav-link dropdown-trigger"
              onClick={toggleCourseDropdown}
            >
              <span>JLPT & NAT</span>
              <svg
                className="chevron"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <ul
              className={`dropdown-menu ${
                isCourseDropdownOpen ? "mobile-open" : ""
              }`}
            >
              <li>
                <NavLink
                  to="/course"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  N5 Level
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/course"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  N4 Level
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/course/n3"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  N3 Level
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/course/n2"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  N2 Level
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/course/n1"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  N1 Level
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="mobile-contact">
            <NavLink to="/contact" onClick={closeMenu}>
              <button className="btn-solid mobile-btn">Contact Us</button>
            </NavLink>
          </li>
        </ul>

        <div className="nav-buttons">
          <NavLink to="/contact">
            <button className="btn-solid">Contact Us</button>
          </NavLink>
        </div>

        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      <main style={{ minHeight: "70vh" }}>
        {children || (
          <div style={{ padding: "100px 5%", textAlign: "center" }}>
            <h2>Japanese Language Excellence</h2>
            <p>Select a course level to begin your journey.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
