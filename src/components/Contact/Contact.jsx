// src/components/Contact/Contact.jsx
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Bog'<span>lanish</span></h2>
        <p className={styles.subtitle}>
          Loyiha yoki hamkorlik uchun menga yozing
        </p>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.icon}>📧</div>
              <div>
                <h3>Email</h3>
                <p>azizjon@example.com</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.icon}>📱</div>
              <div>
                <h3>Telefon</h3>
                <p>+998 90 123 45 67</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.icon}>📍</div>
              <div>
                <h3>Manzil</h3>
                <p>Toshkent, Uzbekistan</p>
              </div>
            </div>
          </div>
          
          <form className={styles.contactForm}>
            <input type="text" placeholder="Ismingiz" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Xabaringiz..." rows="5" required></textarea>
            <button type="submit" className={styles.submitBtn}>
              Xabarni Yuborish
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact