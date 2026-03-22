import React, { useState, ReactNode } from "react";
import { NavLink } from "react-router-dom";

// Note: In your local environment, uncomment these imports
import logoMain from "../assets/logo.png";
import "../nav.css";
import Footer from "../page/Footer/Footer";

// --- DYNAMIC COURSES LIST ---
const coursesList = [
  { id: "genban-nihongo", title: "Genban Nihongo" },
  { id: "kaiwa-mastery", title: "Business Kaiwa" },
  { id: "ssw", title: "SSW" },
  { id: "summercamp", title: "Summer Camp" },
  { id: "jlptandnat", title: "JLPT and NAT" },
];

export default function Layout({ children }: { children?: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCourseDropdownOpen(false);
    setIsAboutDropdownOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsCourseDropdownOpen(false);
    setIsAboutDropdownOpen(false);
  };

  const toggleCourseDropdown = (e: React.MouseEvent) => {
    if (window.innerWidth <= 1100) {
      e.preventDefault();
      setIsCourseDropdownOpen(!isCourseDropdownOpen);
    }
  };

  const toggleAboutDropdown = (e: React.MouseEvent) => {
    if (window.innerWidth <= 1100) {
      e.preventDefault();
      setIsAboutDropdownOpen(!isAboutDropdownOpen);
    }
  };

  const handleAboutMouseEnter = () => {
    if (window.innerWidth > 1100) setIsAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    if (window.innerWidth > 1100) setIsAboutDropdownOpen(false);
  };

  return (
    <div className="layout-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

        :root {
          --white: #ffffff;
          --black-rgb: 0, 0, 0;
          --nav-text: #333333;
          --nav-green: #2F4B36;
        }

        .navbar {
          width: 100%;
          height: 85px; /* Slightly taller for breathing room */
          background: var(--white);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4%; /* Gives comfortable breathing room on edges */
          box-shadow: 0 2px 10px rgba(0,0,0,0.06); /* Softer, modern shadow */
          font-family: 'Poppins', sans-serif;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-sizing: border-box;
        }

        .nav-left {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .logo-main {
          height: 55px; /* Optimized height */
          max-width: 320px; /* Prevents extremely wide logos from breaking layout */
          object-fit: contain;
        }

        .nav-links {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 32px; /* Reduced from 48px to fit the wide logo better */
          margin: 0;
          padding: 0;
        }

        .nav-link {
          text-decoration: none;
          color: var(--nav-text);
          font-weight: 500; /* Set to 500 for better readability */
          font-size: 16px; /* Reduced from 18px for a cleaner look */
          position: relative;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 6px; /* Spacing between text and chevron */
          cursor: pointer;
          height: 100%;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--nav-green);
        }

        /* --- DROPDOWN SPECIFIC STYLES --- */
        .nav-item-dropdown {
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
        }

        .dropdown-trigger {
          display: flex;
          align-items: center;
        }

        .chevron {
          width: 14px;
          height: 14px;
          transition: transform 0.3s ease;
          margin-top: 2px; /* Optical alignment fix */
        }

        .dropdown-menu {
          position: absolute;
          top: 45px; /* Positioned slightly below the text */
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: var(--white);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          border-radius: 12px;
          border: 1px solid #f0f0f0;
          min-width: 220px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          padding: 0.8rem 0;
          list-style: none;
          z-index: 1001;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.7rem 1.5rem;
          color: var(--nav-text);
          text-decoration: none;
          font-size: 15px; /* Slightly smaller than main nav */
          transition: background 0.2s ease, color 0.2s ease;
          font-weight: 400;
        }

        .dropdown-item:hover, .dropdown-item.active {
          background: #f4fbf6;
          color: var(--nav-green);
          font-weight: 500;
        }

        /* Desktop Hover Behavior */
        @media (min-width: 1101px) {
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
          margin-left: 10px;
        }

        .btn-solid {
          padding: 11px 26px;
          background: var(--nav-green);
          color: var(--white);
          border: none;
          border-radius: 50px; /* Modern pill shape */
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(47, 75, 54, 0.2);
        }

        .btn-solid:hover { 
          background: #233a29; 
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(47, 75, 54, 0.3);
        }

        .hamburger {
          display: none;
          cursor: pointer;
          flex-direction: column;
          justify-content: space-between;
          height: 18px;
          width: 26px;
          z-index: 1001;
        }

        .bar {
          width: 100%;
          height: 2px;
          background-color: var(--nav-text);
          transition: 0.3s ease;
          border-radius: 2px;
        }

        .mobile-contact {
          display: none;
        }

        /* --- MOBILE RESPONSIVENESS --- */
        /* Increased breakpoint to 1100px to accommodate the wide logo and many links */
        @media screen and (max-width: 1100px) {
          .navbar { padding: 0 5%; height: 75px; }
          .logo-main { height: 45px; }
          .hamburger { display: flex; }
          .nav-buttons { display: none; }
          .mobile-contact { display: block; width: 100%; margin-top: 15px; }
          .mobile-btn { width: 100%; text-align: center; }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            max-width: 400px;
            height: 100vh;
            background: var(--white);
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 20px;
            box-shadow: -5px 0 15px rgba(0,0,0,0.1);
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 90px 40px 40px 40px;
            overflow-y: auto;
          }

          .nav-links.open { right: 0; }

          .nav-link { font-size: 18px; width: 100%; }

          /* Mobile Dropdown Interaction */
          .nav-item-dropdown { flex-direction: column; align-items: flex-start; width: 100%; }
          .dropdown-trigger { width: 100%; justify-content: space-between; }
          
          .dropdown-menu {
            position: relative;
            top: 0;
            left: 0;
            transform: none;
            box-shadow: none;
            border: none;
            max-height: 0;
            width: 100%;
            padding: 0 0 0 15px; /* Indent sub-items */
            margin-top: 5px;
            border-left: 2px solid #e0e0e0;
            border-radius: 0;
            background: transparent;
            visibility: visible;
            opacity: 1;
            overflow: hidden;
            transition: max-height 0.4s ease;
          }

          .dropdown-menu.mobile-open {
            max-height: 500px;
            padding-top: 10px;
            padding-bottom: 10px;
          }

          .dropdown-item { padding: 0.6rem 0; font-size: 16px; color: #555; }

          /* Hamburger animations */
          .hamburger.open .bar:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
          .hamburger.open .bar:nth-child(2) { opacity: 0; }
          .hamburger.open .bar:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-left">
          <NavLink to="/" onClick={closeMenu}>
            <img src={logoMain} alt="ABK - AOTS DOSOKAI Logo" className="logo-main" />
          </NavLink>
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

          {/* DYNAMIC COURSE DROPDOWN */}
          <li className="nav-item-dropdown">
            <div className="nav-link dropdown-trigger" onClick={toggleCourseDropdown}>
              <span>Courses</span>
              <svg className={`chevron ${isCourseDropdownOpen && window.innerWidth <= 1100 ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <ul className={`dropdown-menu ${isCourseDropdownOpen ? "mobile-open" : ""}`}>
              {coursesList.map((course) => (
                <li key={course.id}>
                  <NavLink
                    to={`/course/${course.id}`}
                    className={({ isActive }) => `dropdown-item ${isActive ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    {course.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li
            className="nav-item-dropdown"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <div className="nav-link dropdown-trigger" onClick={toggleAboutDropdown}>
              <NavLink to="/aboutus" onClick={closeMenu} style={{ textDecoration: "none", color: "inherit" }}>
                About Us
              </NavLink>
              <svg className={`chevron ${isAboutDropdownOpen && window.innerWidth <= 1100 ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>

            <ul className={`dropdown-menu ${isAboutDropdownOpen ? "mobile-open" : ""}`}>
              <li>
                <NavLink to="/director/bangalore" className="dropdown-item" onClick={closeMenu}>
                  Bangalore Chapter
                </NavLink>
              </li>
              <li>
                <NavLink to="/director/coimbatore" className="dropdown-item" onClick={closeMenu}>
                  Coimbatore Chapter
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="mobile-contact">
            <NavLink to="/contact" onClick={closeMenu} style={{ width: '100%', textDecoration: 'none' }}>
              <button className="btn-solid mobile-btn">Contact Us</button>
            </NavLink>
          </li>
        </ul>

        <div className="nav-buttons">
          <NavLink to="/contact">
            <button className="btn-solid">Contact Us</button>
          </NavLink>
        </div>

        <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
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