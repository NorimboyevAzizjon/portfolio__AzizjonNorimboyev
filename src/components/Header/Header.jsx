// Header/Header.jsx
import styles from './Header.module.css'

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>Portfolio</span>
        </div>
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button 
          className={styles.themeToggle}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}

export default Header