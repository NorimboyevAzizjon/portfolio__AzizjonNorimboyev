// src/components/Footer/Footer.jsx
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* FOOTER CONTENT */}
        <div className={styles.footerContent}>
          {/* BRAND SECTION */}
          <div className={styles.brandSection}>
            <h3 className={styles.logo}>AZIZJON<span>.DEV</span></h3>
            <p className={styles.brandText}>
              Zamonaviy veb-ilovalar va interfeyslar yarataman. 
              Har bir loyiha yangi imkoniyat va tajriba.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} title="GitHub">
                <span className={styles.socialIcon}>💻</span>
              </a>
              <a href="#" className={styles.socialLink} title="LinkedIn">
                <span className={styles.socialIcon}>💼</span>
              </a>
              <a href="#" className={styles.socialLink} title="Telegram">
                <span className={styles.socialIcon}>📱</span>
              </a>
              <a href="#" className={styles.socialLink} title="Email">
                <span className={styles.socialIcon}>📧</span>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className={styles.linksSection}>
            <h4>Tez Havolalar</h4>
            <ul className={styles.linksList}>
              <li><a href="#home">Bosh Sahifa</a></li>
              <li><a href="#projects">Loyihalar</a></li>
              <li><a href="#skills">Ko'nikmalar</a></li>
              <li><a href="#contact">Bog'lanish</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className={styles.linksSection}>
            <h4>Xizmatlar</h4>
            <ul className={styles.linksList}>
              <li>Veb Dasturlash</li>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className={styles.contactSection}>
            <h4>Aloqa</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <span>azizjon@example.com</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <span>+998 90 123 45 67</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>Toshkent, Uzbekistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {currentYear} Azizjon Norimboyev. Barcha huquqlar himoyalangan.
          </div>
          <div className={styles.madeWith}>
            ❤️ bilan yaratildi <strong>React</strong> va <strong>Vite</strong> bilan
          </div>
        </div>

        {/* BACK TO TOP BUTTON */}
        <button 
          className={styles.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ⬆️
        </button>
      </div>
    </footer>
  )
}

export default Footer