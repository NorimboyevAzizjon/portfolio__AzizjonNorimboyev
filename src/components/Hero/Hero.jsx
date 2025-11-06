// Hero/Hero.jsx
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Salom, men <span className={styles.highlight}>Frontend Developer</span>man
          </h1>
          <p className={styles.description}>
            Men zamonaviy va interaktiv veb ilovalar yaratishga ixtisoslashgan dasturchiman.
            React, JavaScript va zamonaviy CSS texnologiyalaridan foydalanaman.
          </p>
          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryBtn}>Loyihalarim</a>
            <a href="#contact" className={styles.secondaryBtn}>Bog'lanish</a>
          </div>
        </div>
        <div className={styles.image}>
          <img src="/src/assets/react.svg" alt="Developer" />
        </div>
      </div>
    </section>
  )
}

export default Hero