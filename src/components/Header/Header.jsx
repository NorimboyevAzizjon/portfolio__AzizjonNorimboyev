// src/components/Header/Header.jsx
import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Portfolio</span>
          <div className={styles.logoDot}></div>
        </div>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            <span>Home</span>
          </a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>
            <span>Skills</span>
          </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            <span>Projects</span>
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            <span>Contact</span>
          </a>
        </nav>

        <div className={styles.controls}>
          <button 
            className={styles.themeToggle}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;