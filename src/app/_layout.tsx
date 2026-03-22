import React, { useState, ReactNode, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Note: In your local environment, uncomment these imports
import logoMain from "../assets/logo.png";
import "../nav.css";
import Footer from "../page/Footer/Footer";

// --- DYNAMIC COURSES LIST ---
const coursesList = [
  { id: "genba-no-nihongo", title: "Genba no Nihongo" },
  { id: "kaiwa-course", title: "Kaiwa" },
  { id: "ssw", title: "SSW" },
  { id: "summercamp", title: "Kids Summer Camp" },
  { id: "exam-day-confidence", title: "Exam Day" },
  { id: "corporate-training", title: "Corporate" },
  { id: "jlptandnat", title: "JLPT and NAT" },
];

export default function Layout({ children }: { children?: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Reset dropdowns when closing the main menu
    if (isMenuOpen) {
      setIsCourseDropdownOpen(false);
      setIsAboutDropdownOpen(false);
    }
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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        :root {
          --white: #ffffff;
          --black-rgb: 0, 0, 0;
          --nav-text: #2c3e35;
          --nav-green: #2F4B36;
        }

        .navbar {
          width: 100%;
          height: 85px;
          background: var(--white);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4%;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
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
          height: 55px;
          max-width: 320px;
          object-fit: contain;
        }

        .nav-links {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 32px;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          text-decoration: none;
          color: var(--nav-text);
          font-weight: 500;
          font-size: 16px;
          position: relative;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          height: 100%;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--nav-green);
        }

        /* --- DESKTOP DROPDOWN STYLES --- */
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
          margin-top: 2px;
        }

        .dropdown-menu {
          position: absolute;
          top: 60px;
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
          font-size: 15px;
          transition: background 0.2s ease, color 0.2s ease;
          font-weight: 400;
        }

        .dropdown-item:hover, .dropdown-item.active {
          background: #f4fbf6;
          color: var(--nav-green);
          font-weight: 500;
        }

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
          border-radius: 50px;
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
          background-color: #1a1a1a;
          transition: 0.3s ease;
          border-radius: 2px;
        }

        .mobile-contact {
          display: none;
        }

        /* --- MOBILE RESPONSIVENESS --- */
        @media screen and (max-width: 1100px) {
          .navbar { padding: 0 5%; height: 75px; }
          .logo-main { height: 45px; }
          .hamburger { display: flex; }
          .nav-buttons { display: none; }
          
          .mobile-contact { 
            display: block; 
            width: 100%; 
            margin-top: 15px; 
            margin-bottom: 40px; 
          }
          .mobile-btn { width: 100%; text-align: center; padding: 14px 0; font-size: 16px; }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            max-width: 450px;
            height: 100vh;
            background: var(--white);
            
            /* Native scrolling */
            display: block; 
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            
            box-shadow: -5px 0 15px rgba(0,0,0,0.1);
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 90px 30px 40px 30px;
          }

          .nav-links.open { right: 0; }
          
          .nav-links > li {
            margin-bottom: 0; /* Remove massive gaps */
            width: 100%;
            height: auto; /* CRITICAL FIX: Stops links from stretching to 100% height */
          }

          .nav-link { 
            font-size: 18px; 
            font-weight: 500;
            color: #333;
            width: 100%; 
            height: auto; /* CRITICAL FIX */
            padding: 14px 0; /* Normal touch target padding */
            justify-content: space-between; 
          }

          /* Mobile Dropdown Interaction (Accordion) */
          .nav-item-dropdown { display: block; width: 100%; height: auto; }
          .dropdown-trigger { width: 100%; justify-content: space-between; padding: 14px 0; }
          
          .dropdown-menu {
            position: relative;
            top: 0; left: 0;
            transform: none;
            box-shadow: none;
            width: 100%;
            background: transparent;
            
            /* Collapsed State */
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease, opacity 0.3s ease;
            opacity: 0;
            visibility: hidden;
            
            /* Zero padding when closed to ensure no gap */
            border: none;
            margin: 0;
            padding: 0;
          }

          .dropdown-menu.mobile-open {
            max-height: 500px;
            opacity: 1;
            visibility: visible;
            
            /* UI styles when open */
            border-top: 1px solid #e0e0e0;
            border-left: 2px solid #e0e0e0;
            margin-top: 4px;
            margin-bottom: 8px;
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 15px;
            border-radius: 0;
          }

          .dropdown-item { 
            padding: 10px 0; 
            font-size: 16px; 
            color: #555; 
          }

          /* Hamburger animations to X */
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
              <svg 
                className={`chevron ${isCourseDropdownOpen && window.innerWidth <= 1100 ? "rotate-180" : ""}`} 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
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
              <span style={{ textDecoration: "none", color: "inherit", pointerEvents: "none" }}>
                About Us
              </span>
              <svg 
                className={`chevron ${isAboutDropdownOpen && window.innerWidth <= 1100 ? "rotate-180" : ""}`} 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>

            <ul className={`dropdown-menu ${isAboutDropdownOpen ? "mobile-open" : ""}`}>
              <li>
                <NavLink to="/aboutus" className="dropdown-item" onClick={closeMenu}>
                  Overview
                </NavLink>
              </li>
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