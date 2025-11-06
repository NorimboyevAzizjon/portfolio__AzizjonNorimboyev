// src/components/Header/Header.jsx
import React from 'react';
import { FaCode, FaHome, FaProjectDiagram, FaCogs, FaEnvelope } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <FaCode className={styles.logoIcon} />
        Azizjon.dev
      </div>
      <nav className={styles.nav}>
        <a href="#home" className={styles.navLink}>
          <FaHome className={styles.navIcon} />
          Bosh
        </a>
        <a href="#projects" className={styles.navLink}>
          <FaProjectDiagram className={styles.navIcon} />
          Loyihalar
        </a>
        <a href="#skills" className={styles.navLink}>
          <FaCogs className={styles.navIcon} />
          Ko'nikmalar
        </a>
        <a href="#contact" className={styles.navLink}>
          <FaEnvelope className={styles.navIcon} />
          Bog'lanish
        </a>
      </nav>
    </header>
  );
};

export default Header;