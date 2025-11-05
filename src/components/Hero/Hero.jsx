// src/components/Hero/Hero.jsx - ODDIY VERSION
import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = ['Full Stack Developer', 'React Specialist', 'Problem Solver', 'Tech Enthusiast']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.floatingShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
      </div>
      
      <div className={styles.heroContent}>
        <h1>
          AZIZJON <span className={styles.gradientText}>NORIMBOYEV</span>
        </h1>
        
        <div className={styles.typeAnimation}>
          <h2>{texts[currentText]}</h2>
        </div>

        <p>
          💻 Zamonaviy texnologiyalar bilan <strong>QATTIQ LOYIHALAR</strong> yarataman
        </p>

        <div className={styles.heroButtons}>
          <button className={`${styles.btn} ${styles.glowBtn}`}>
            🚀 Loyihalarimni Ko'ring
          </button>
          <button className={`${styles.btn} ${styles.outlineBtn}`}>
            📧 Bog'lanish
          </button>
        </div>

        {/* SOCIAL STATS */}
        <div className={styles.socialStats}>
          <div className={styles.stat}>
            <strong>10+</strong>
            <span>Loyihalar</span>
          </div>
          <div className={styles.stat}>
            <strong>2+</strong>
            <span>Yil Tajriba</span>
          </div>
          <div className={styles.stat}>
            <strong>100%</strong>
            <span>Qanoat</span>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className={styles.scrollIndicator}>
        ⬇️
      </div>
    </section>
  )
}

export default Hero