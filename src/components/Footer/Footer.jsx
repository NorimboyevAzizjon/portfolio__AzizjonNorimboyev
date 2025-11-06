// Footer/Footer.jsx
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Portfolio</h3>
            <p>Zamonaviy va innovatsion yechimlar yaratishga intilayotgan frontend developer.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Tez Havolalar</h4>
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.footerSection}>
            <h4>Ijtimoiy Tarmoqlar</h4>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Telegram</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Portfolio. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer