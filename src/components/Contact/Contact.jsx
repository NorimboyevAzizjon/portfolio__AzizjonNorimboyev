// src/components/Contact/Contact.jsx
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa'
import { SiGmail, SiWhatsapp } from 'react-icons/si'
import styles from './Contact.module.css'

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
          {/* CONTACT INFO */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaEnvelope />
              </div>
              <div className={styles.infoContent}>
                <h3>Email</h3>
                <p>azizjon@example.com</p>
                <a href="mailto:azizjon@example.com" className={styles.contactLink}>
                  <SiGmail className={styles.linkIcon} />
                  Email Yuborish
                </a>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaPhone />
              </div>
              <div className={styles.infoContent}>
                <h3>Telefon</h3>
                <p>+998 90 123 45 67</p>
                <a href="tel:+998901234567" className={styles.contactLink}>
                  <SiWhatsapp className={styles.linkIcon} />
                  WhatsApp
                </a>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.infoContent}>
                <h3>Manzil</h3>
                <p>Toshkent, Uzbekistan</p>
                <button className={styles.contactLink}>
                  <FaMapMarkerAlt className={styles.linkIcon} />
                  Location
                </button>
              </div>
            </div>

            {/* SOCIAL LINKS */}
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
                <a href="#" className={styles.socialLink}>
                  <SiGmail />
                </a>
              </div>
            </div>
          </div>
          
          {/* CONTACT FORM */}
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <input type="text" placeholder="Ismingiz" required />
                <FaUser className={styles.inputIcon} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <input type="email" placeholder="Email manzilingiz" required />
                <FaEnvelope className={styles.inputIcon} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <input type="text" placeholder="Mavzu" required />
                <FaTag className={styles.inputIcon} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.textareaWrapper}>
                <textarea placeholder="Xabaringiz..." rows="5" required></textarea>
                <FaComment className={styles.textareaIcon} />
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
  )
}

export default Contact