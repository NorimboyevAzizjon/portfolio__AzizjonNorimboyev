// src/components/Footer/Footer.jsx
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainSection}>
            <div className={styles.brand}>
              <div className={styles.logo}>
                <span>Portfolio</span>
                <div className={styles.logoDot}></div>
              </div>
              <p className={styles.tagline}>
                Zamonaviy va innovatsion yechimlar yaratishga intilayotgan frontend developer.
              </p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink} aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className={styles.socialLink} aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linksGroup}>
              <h4>Tez Havolalar</h4>
              <a href="#home">Home</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className={styles.linksGroup}>
              <h4>Xizmatlar</h4>
              <a href="#">Veb Dizayn</a>
              <a href="#">Frontend Development</a>
              <a href="#">Responsive Design</a>
              <a href="#">Consulting</a>
            </div>
            
            <div className={styles.linksGroup}>
              <h4>Aloqa</h4>
              <a href="mailto:email@example.com">email@example.com</a>
              <a href="tel:+998901234567">+998 90 123 45 67</a>
              <span>Toshkent, O'zbekiston</span>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>
              © {currentYear} Portfolio. Barcha huquqlar himoyalangan. 
              <span className={styles.heart}>
                <Heart size={16} />
              </span>
              bilan yaratilgan
            </p>
          </div>
          <div className={styles.legal}>
            <a href="#">Maxfiylik Siyosati</a>
            <a href="#">Foydalanish Shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;