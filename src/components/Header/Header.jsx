// src/components/Header/Header.jsx
import { FaCode, FaHome, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <FaCode className={styles.logoIcon} />
        <span>AZIZJON</span>.DEV
      </div>
      <nav className={styles.nav}>
        <a href="#home">
          <FaHome className={styles.navIcon} />
          Bosh
        </a>
        <a href="#projects">
          <FaProjectDiagram className={styles.navIcon} />
          Loyihalar
        </a>
        <a href="#skills">
          <FaTools className={styles.navIcon} />
          Ko'nikmalar
        </a>
        <a href="#contact">
          <FaEnvelope className={styles.navIcon} />
          Bog'lanish
        </a>
      </nav>
    </header>
  )
}

export default Header