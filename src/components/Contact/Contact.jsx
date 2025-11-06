// src/components/Contact/Contact.jsx
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaUser, FaTag, FaComment } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Bog'<span className={styles.gradientText}>lanish</span>
          </h2>
          <p className={styles.subtitle}>
            Loyiha yoki hamkorlik uchun menga <span className={styles.highlight}>yozing</span>
          </p>
        </div>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaEnvelope />
              </div>
              <div className={styles.infoContent}>
                <h3>Email</h3>
                <p>azizjon@example.com</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaPhone />
              </div>
              <div className={styles.infoContent}>
                <h3>Telefon</h3>
                <p>+998 90 123 45 67</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.infoContent}>
                <h3>Manzil</h3>
                <p>Toshkent, Uzbekistan</p>
              </div>
            </div>

            <div className={styles.socialSection}>
              <h4>Ijtimoiy Tarmoqlar</h4>
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
              </div>
            </div>
          </div>
          
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <FaUser className={styles.inputIcon} />
                <input type="text" placeholder="Ismingiz" required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <FaEnvelope className={styles.inputIcon} />
                <input type="email" placeholder="Email manzilingiz" required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <FaTag className={styles.inputIcon} />
                <input type="text" placeholder="Mavzu" required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.textareaWrapper}>
                <FaComment className={styles.textareaIcon} />
                <textarea placeholder="Xabaringiz..." rows="5" required></textarea>
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              <FaPaperPlane className={styles.btnIcon} />
              Xabarni Yuborish
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;