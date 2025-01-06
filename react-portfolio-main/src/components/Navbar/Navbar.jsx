import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a className="options" href="#about">About</a>
          </li>
          <li>
            <a className="options" href="#experience">Skills & Hobbies</a>
          </li>
          <li>
            <a className="options" href="#projects">Projects</a>
          </li>
          <li>
            <a className="options" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
