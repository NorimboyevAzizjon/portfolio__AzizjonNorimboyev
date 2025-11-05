// src/components/Hero/Hero.jsx
import { FaGithub, FaLinkedin, FaTelegram, FaDownload } from 'react-icons/fa'
import { SiReact, SiJavascript, SiNodedotjs } from 'react-icons/si'
import styles from './Hero.module.css'

const Hero = () => {
  const texts = ['Full Stack Developer', 'React Specialist', 'Problem Solver', 'Tech Enthusiast']
  
  return (
    <section id="home" className={styles.hero}>
      {/* BACKGROUND ANIMATION */}
      <div className={styles.heroBackground}>
        <div className={styles.floatingShapes}>
          <div className={styles.shape1}><SiReact className={styles.techIcon} /></div>
          <div className={styles.shape2}><SiJavascript className={styles.techIcon} /></div>
          <div className={styles.shape3}><SiNodedotjs className={styles.techIcon} /></div>
        </div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>
          🚀 Portfolio 2024
        </div>
        
        <h1>
          Salom, Men <span className={styles.gradientText}>Azizjon Norimboyev</span>
        </h1>
        
        <div className={styles.typeAnimation}>
          <h2>{texts[0]}</h2>
          <div className={styles.animatedUnderline}></div>
        </div>

        <p className={styles.heroDescription}>
          💻 <strong>React, Node.js, JavaScript</strong> va zamonaviy texnologiyalar bilan 
          <span className={styles.highlight}> innovatsion loyihalar </span>
          yarataman
        </p>

        <div className={styles.heroButtons}>
          <button className={`${styles.btn} ${styles.glowBtn}`}>
            <FaProjectDiagram className={styles.btnIcon} />
            Loyihalarimni Ko'ring
          </button>
          <button className={`${styles.btn} ${styles.outlineBtn}`}>
            <FaDownload className={styles.btnIcon} />
            CV Yuklab Olish
          </button>
        </div>

        {/* SOCIAL LINKS */}
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
        </div>

        {/* TECH STACK */}
        <div className={styles.techStack}>
          <span>Tech Stack:</span>
          <div className={styles.techIcons}>
            <SiReact title="React" />
            <SiJavascript title="JavaScript" />
            <SiNodedotjs title="Node.js" />
            <FaCode title="HTML/CSS" />
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span>Scroll qiling</span>
      </div>
    </section>
  )
}

export default Hero