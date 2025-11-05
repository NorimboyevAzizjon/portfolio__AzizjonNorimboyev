// src/components/Header/Header.jsx
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>AZIZJON</span>.DEV
      </div>
      <nav className={styles.nav}>
        <a href="#home">Bosh</a>
        <a href="#projects">Loyihalar</a>
        <a href="#skills">Ko'nikmalar</a>
        <a href="#contact">Bog'lanish</a>
      </nav>
    </header>
  )
}

export default Header