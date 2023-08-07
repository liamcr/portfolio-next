"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar: React.FC = () => {
  const path = usePathname();
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPos(window.scrollY);
    });
  }, []);

  const homePage = path === "/";

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
        >
          <Link href="/">Home</Link>
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
        >
          <Link href="#about-container">About</Link>
        </div>
        <div
          className={`${styles.navbarItem} ${
            scrollPos > 0 ? styles.notTopOfPage : styles.topOfPage
          }`}
        >
          <Link href="#skills-container">Skills</Link>
        </div>
        <div
          className={`${styles.navbarItem} ${
            scrollPos > 0 ? styles.notTopOfPage : styles.topOfPage
          }`}
        >
          <Link href="#experience-container">Work Experience</Link>
        </div>
        <div
          className={`${styles.navbarItem} ${
            scrollPos > 0 ? styles.notTopOfPage : styles.topOfPage
          }`}
        >
          <Link href="#projects-container">Projects</Link>
        </div>
        <div
          className={`${styles.navbarItem} ${
            scrollPos > 0 ? styles.notTopOfPage : styles.topOfPage
          }`}
        >
          <Link href="#contact-container">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
