"use client";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

type NavbarProps = {
  homePage: boolean;
};

// Scrolls to the desired section of the home page
const handleNavClick = (targetId: string) => {
  if (targetId === "home") {
    window.location.href = "/";
  } else {
    window.location.hash = targetId;
  }
};

const Navbar: React.FC<NavbarProps> = ({ homePage }) => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPos(window.scrollY);
    });
  }, []);

  return (
    <div
      className={styles.navbarContainer}
      style={{
        color: scrollPos > 0 ? "black" : "white",
        backgroundColor: scrollPos > 0 ? "white" : "transparent",
      }}
    >
      <div className={styles.leadingNavbarItems}>
        <div
          className={`${styles.navbarItem} ${
            scrollPos > 0 ? styles.notTopOfPage : styles.topOfPage
          }`}
          style={{ display: homePage ? "none" : "inline-block" }}
          onClick={() => handleNavClick("home")}
        >
          Home
        </div>
      </div>
      <div
        className={styles.trailingNavbarItems}
        style={{ display: !homePage ? "none" : "flex" }}
      >
        <div
          className={`${styles.navbarItem} ${
            scrollPos > 0 ? styles.notTopOfPage : styles.topOfPage
          }`}
          onClick={() => handleNavClick("about-container")}
        >
          About
        </div>
        <div
          className={`${styles.navbarItem} ${
            scrollPos > 0 ? styles.notTopOfPage : styles.topOfPage
          }`}
          onClick={() => handleNavClick("skills-container")}
        >
          Skills
        </div>
        <div
          className={`${styles.navbarItem} ${
            scrollPos > 0 ? styles.notTopOfPage : styles.topOfPage
          }`}
          onClick={() => handleNavClick("experience-container")}
        >
          Work Experience
        </div>
        <div
          className={`${styles.navbarItem} ${
            scrollPos > 0 ? styles.notTopOfPage : styles.topOfPage
          }`}
          onClick={() => handleNavClick("projects-container")}
        >
          Projects
        </div>
        <div
          className={`${styles.navbarItem} ${
            scrollPos > 0 ? styles.notTopOfPage : styles.topOfPage
          }`}
          onClick={() => handleNavClick("contact-container")}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
