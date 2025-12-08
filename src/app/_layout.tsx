import React, { ReactNode, useState } from "react";
import { COLORS } from "../constants/colors";
import logoFull from "../assets/logo.png";
import "../nav.css"; // <-- NEW

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={styles.nav}>
        {/* LEFT: LOGO */}
        <div style={styles.logoContainer}>
          <img
            src={logoFull}
            alt="ABK - AOTS DOSOKAI"
            style={styles.logoImage}
          />
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </div>

        {/* CENTER NAV LINKS */}
        <ul style={styles.navLinks} className={open ? "nav-open" : ""}>
          <li style={styles.navItem}>Home</li>
          <li style={styles.navItem}>Courses</li>
          <li style={styles.navItem}>About Us</li>
          <li style={styles.navItem}>Contact Us</li>
          <li style={styles.navItem}>Blog</li>
        </ul>

        {/* RIGHT BUTTONS */}
        <div style={styles.navActions} className="nav-actions">
          <button style={styles.btnOutline}>Book Demo</button>
          <button style={styles.btnSolid}>Contact Us</button>
        </div>
      </nav>

      <main>{children}</main>
    </>
  );
}
const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 4%",
    background: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    fontFamily: "'Poppins', sans-serif",
    height: "90px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    height: "55px",
    width: "auto",
  },
  navLinks: {
    display: "flex",
    gap: "40px",
    listStyle: "none",
    fontSize: "16px",
    margin: 0,
    padding: 0,
    transition: "0.3s ease",
  },
  navItem: {
    cursor: "pointer",
    fontWeight: "400",
  },
  navActions: {
    display: "flex",
    gap: "15px",
  },
  btnOutline: {
    padding: "10px 25px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "transparent",
    color: COLORS.primaryGreen,
    border: `1.5px solid ${COLORS.primaryGreen}`,
    borderRadius: "4px",
    fontWeight: "500",
    fontFamily: "'Poppins', sans-serif",
  },
  btnSolid: {
    padding: "10px 25px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: COLORS.primaryGreen,
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontWeight: "500",
    fontFamily: "'Poppins', sans-serif",
  },
};
