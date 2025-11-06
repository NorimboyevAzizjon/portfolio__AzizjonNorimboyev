// src/components/Hero/Hero.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaDownload, FaArrowDown } from 'react-icons/fa';
import { SiReact, SiJavascript, SiNodedotjs, SiTypescript } from 'react-icons/si';
import styles from './Hero.module.css';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      {/* ANIMATED BACKGROUND */}
      <div className={styles.backgroundAnimation}>
        <div className={styles.floatingElement} style={{ '--delay': '0s' }}>
          <SiReact />
        </div>
        <div className={styles.floatingElement} style={{ '--delay': '2s' }}>
          <SiJavascript />
        </div>
        <div className={styles.floatingElement} style={{ '--delay': '4s' }}>
          <SiNodedotjs />
        </div>
        <div className={styles.floatingElement} style={{ '--delay': '6s' }}>
          <SiTypescript />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* BADGE */}
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Full Stack Developer
          </div>

          {/* MAIN HEADING */}
          <h1 className={styles.title}>
            Salom, Men{" "}
            <span className={styles.gradientText}>Azizjon Norimboyev</span>
          </h1>

          {/* SUBTITLE */}
          <p className={styles.subtitle}>
            Men <span className={styles.highlight}>React</span>,{" "}
            <span className={styles.highlight}>Node.js</span> va{" "}
            <span className={styles.highlight}>JavaScript</span> bilan
            zamonaviy veb-ilovalar yarataman
          </p>

          {/* CTA BUTTONS */}
          <div className={styles.buttons}>
            <button className={styles.primaryBtn} onClick={scrollToProjects}>
              <FaProjectDiagram className={styles.btnIcon} />
              Loyihalarimni Ko'ring
            </button>
            <button className={styles.secondaryBtn}>
              <FaDownload className={styles.btnIcon} />
              CV Yuklab Olish
            </button>
          </div>

          {/* SOCIAL LINKS */}
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Telegram">
              <FaTelegram />
            </a>
          </div>

          {/* STATS */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Loyihalar</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>2+</div>
              <div className={styles.statLabel}>Yil Tajriba</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Mijoz Qanoati</div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <button className={styles.scrollIndicator} onClick={scrollToProjects}>
          <FaArrowDown className={styles.scrollIcon} />
          <span>Pastga aylantiring</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;