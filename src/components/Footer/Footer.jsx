// src/components/Footer/Footer.jsx
import { FaCode, FaHeart, FaGithub, FaLinkedin, FaTelegram, FaEnvelope, FaHome, FaProjectDiagram, FaTools, FaUser } from 'react-icons/fa'
import { SiReact, SiVite } from 'react-icons/si'
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
            <div className={styles.logo}>
              <FaCode className={styles.logoIcon} />
              <span>AZIZJON</span>.DEV
            </div>
            <p className={styles.brandText}>
              <FaHeart className={styles.heartIcon} /> Zamonaviy veb-ilovalar va interfeyslar yarataman. 
              Har bir loyiha yangi imkoniyat va tajriba.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} title="GitHub">
                <FaGithub />
              </a>
              <a href="#" className={styles.socialLink} title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className={styles.socialLink} title="Telegram">
                <FaTelegram />
              </a>
              <a href="#" className={styles.socialLink} title="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className={styles.linksSection}>
            <h4>Tez Havolalar</h4>
            <ul className={styles.linksList}>
              <li>
                <FaHome className={styles.linkIcon} />
                <a href="#home">Bosh Sahifa</a>
              </li>
              <li>
                <FaProjectDiagram className={styles.linkIcon} />
                <a href="#projects">Loyihalar</a>
              </li>
              <li>
                <FaTools className={styles.linkIcon} />
                <a href="#skills">Ko'nikmalar</a>
              </li>
              <li>
                <FaUser className={styles.linkIcon} />
                <a href="#contact">Bog'lanish</a>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className={styles.linksSection}>
            <h4>Xizmatlar</h4>
            <ul className={styles.linksList}>
              <li><FaCode className={styles.serviceIcon} /> Veb Dasturlash</li>
              <li><FaMobile className={styles.serviceIcon} /> Frontend Development</li>
              <li><FaServer className={styles.serviceIcon} /> Backend Development</li>
              <li><FaPaintBrush className={styles.serviceIcon} /> Responsive Design</li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className={styles.contactSection}>
            <h4>Aloqa</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>azizjon@example.com</span>
              </div>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <span>+998 90 123 45 67</span>
              </div>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>Toshkent, Uzbekistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <FaCode className={styles.copyrightIcon} />
            © {currentYear} Azizjon Norimboyev. Barcha huquqlar himoyalangan.
          </div>
          <div className={styles.madeWith}>
            <FaHeart className={styles.heartIcon} /> bilan yaratildi 
            <SiReact className={styles.techIcon} title="React" />
            <SiVite className={styles.techIcon} title="Vite" />
          </div>
        </div>

        {/* BACK TO TOP BUTTON */}
        <button 
          className={styles.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Yuqoriga chiqish"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  )
}

export default Contact