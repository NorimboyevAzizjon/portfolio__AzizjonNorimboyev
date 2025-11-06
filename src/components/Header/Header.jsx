// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { FaCode, FaBars, FaTimes, FaHome, FaProjectDiagram, FaCogs, FaEnvelope } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', icon: <FaHome />, text: 'Bosh' },
    { href: '#projects', icon: <FaProjectDiagram />, text: 'Loyihalar' },
    { href: '#skills', icon: <FaCogs />, text: 'Ko\'nikmalar' },
    { href: '#contact', icon: <FaEnvelope />, text: 'Bog\'lanish' }
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* LOGO */}
        <div className={styles.logo}>
          <FaCode className={styles.logoIcon} />
          <span>Azizjon<span className={styles.logoDot}>.</span>Dev</span>
        </div>

        {/* DESKTOP NAV */}
        <nav className={styles.nav}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={styles.navLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              {item.text}
            </a>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* MOBILE MENU */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className={styles.mobileNavIcon}>{item.icon}</span>
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;