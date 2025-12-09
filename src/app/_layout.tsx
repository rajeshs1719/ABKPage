import React, { useState, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import logoMain from "../assets/logo.png";

export default function Layout({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={styles.header}>
        {/* LEFT LOGO + TEXT + SECOND LOGO */}
        <div style={styles.left}>
          <img src={logoMain} alt="ABK Logo" style={styles.logoMain} />
        </div>

        {/* NAV LINKS */}
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>
            <NavLink to="/" style={styles.link}>
              Home
            </NavLink>
          </li>

          <li style={styles.navItem}>
            <NavLink to="/gallery" style={styles.link}>
              Gallery
            </NavLink>
          </li>

          <li style={styles.navItem}>
            <NavLink to="/events" style={styles.link}>
              Events
            </NavLink>
          </li>

          <li style={styles.navItem}>
            <NavLink to="/blog" style={styles.link}>
              Blog
            </NavLink>
          </li>
          
          <li style={styles.navItem}>
            <NavLink to="/contact" style={styles.link}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* BUTTONS RIGHT */}
        <div style={styles.buttons}>
          <button style={styles.btnOutline}>Book Demo</button>
          <NavLink to="/contact">
            <button style={styles.btnSolid}>Contact Us</button>
          </NavLink>
        </div>
      </nav>

      <main>{children}</main>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    width: "100%",
    height: "90px",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 3%",
    borderRadius: "8px",
    boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
    fontFamily: "'Poppins', sans-serif",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  /* LEFT SECTION */
  left: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },
  logoMain: {
    height: "52px",
  },
  logoSecondary: {
    height: "40px",
  },

  logoText: { display: "flex", flexDirection: "column" },

  title: {
    margin: 0,
    fontSize: "20px",
    fontWeight: 600,
  },
  subtitle: {
    margin: 0,
    fontSize: "12px",
    color: "#555",
  },

  /* NAV LINKS */
  navLinks: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    gap: "48px",
    margin: 0,
    padding: 0,
  },
  navItem: {
    fontSize: "18px",
  },
  link: {
    textDecoration: "none",
    color: "#222",
    fontWeight: 400,
  },

  /* RIGHT BUTTONS */
  buttons: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },

  btnOutline: {
    padding: "10px 24px",
    background: "transparent",
    border: "2px solid #2F4B36",
    color: "#2F4B36",
    borderRadius: "6px",
    fontSize: "18px",
    cursor: "pointer",
  },

  btnSolid: {
    padding: "10px 26px",
    background: "#2F4B36",
    color: "white",
    borderRadius: "6px",
    fontSize: "18px",
    cursor: "pointer",
    border: "none",
  },
};
