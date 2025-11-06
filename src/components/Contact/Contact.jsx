// Contact/Contact.jsx
import { useState } from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Formani yuborish logikasi
    console.log('Form yuborildi:', formData)
    alert('Xabaringiz yuborildi!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Bog'lanish</h2>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3>Keling, loyihangiz ustida birga ishlaymiz</h3>
            <p>Men har qanday qiziqarli loyihalar uchun ochiqman. Quyidagi ma'lumotlar orqali men bilan bog'lanishingiz mumkin:</p>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <span>📧</span>
                <span>email@example.com</span>
              </div>
              <div className={styles.contactItem}>
                <span>📱</span>
                <span>+998 90 123 45 67</span>
              </div>
              <div className={styles.contactItem}>
                <span>📍</span>
                <span>Toshkent, O'zbekiston</span>
              </div>
            </div>
          </div>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Ismingiz"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email manzilingiz"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Xabaringiz"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
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