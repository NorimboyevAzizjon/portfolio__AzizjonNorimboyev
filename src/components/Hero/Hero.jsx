// src/components/Hero/Hero.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaDownload, FaCode } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            🚀 Portfolio 2024
          </div>
          
          <h1 className={styles.title}>
            Salom, Men <span className={styles.gradientText}>Azizjon Norimboyev</span>
          </h1>
          
          <h2 className={styles.subtitle}>
            <FaCode className={styles.subtitleIcon} />
            Full Stack Developer
          </h2>

          <p className={styles.description}>
            React, Node.js va JavaScript bilan zamonaviy veb-ilovalar yarataman
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              <FaProjectDiagram className={styles.btnIcon} />
              Loyihalarimni Ko'ring
            </button>
            <button className={styles.secondaryBtn}>
              <FaDownload className={styles.btnIcon} />
              CV Yuklab Olish
            </button>
          </div>

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
    </section>
  );
};

export default Hero;