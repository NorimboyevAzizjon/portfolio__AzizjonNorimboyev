// src/components/Footer/Footer.jsx
import React from 'react';
import { FaCode, FaHeart, FaGithub, FaLinkedin, FaTelegram, FaEnvelope, FaHome, FaProjectDiagram, FaCogs, FaUser } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <FaCode className={styles.logoIcon} />
              Azizjon.dev
            </div>
            <p className={styles.brandText}>
              Zamonaviy veb-ilovalar va interfeyslar yarataman
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <FaGithub />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaLinkedin />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaTelegram />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className={styles.linksSection}>
            <h4>Tez Havolalar</h4>
            <div className={styles.linksList}>
              <a href="#home"><FaHome /> Bosh Sahifa</a>
              <a href="#projects"><FaProjectDiagram /> Loyihalar</a>
              <a href="#skills"><FaCogs /> Ko'nikmalar</a>
              <a href="#contact"><FaUser /> Bog'lanish</a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <FaCode className={styles.copyrightIcon} />
            © {currentYear} Azizjon Norimboyev. Barcha huquqlar himoyalangan.
          </div>
          <div className={styles.madeWith}>
            <FaHeart className={styles.heartIcon} /> bilan yaratildi
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;