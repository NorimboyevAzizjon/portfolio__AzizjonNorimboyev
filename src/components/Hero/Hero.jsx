// src/components/Hero/Hero.jsx
import { Code2, Rocket, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradient}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <Sparkles size={16} />
            <span>Frontend Developer</span>
          </div>
          
          <h1 className={styles.title}>
            Salom, men
            <span className={styles.gradientText}> Dasturchi</span>
            man
          </h1>
          
          <p className={styles.description}>
            Men <strong>zamonaviy veb ilovalar</strong> va <strong>interaktiv interfeyslar</strong> yaratishga 
            ixtisoslashganman. Har bir loyihada foydalanuvchi tajribasiga alohida e'tibor qarataman.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <Code2 size={20} />
              <div>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Loyihalar</span>
              </div>
            </div>
            <div className={styles.stat}>
              <Rocket size={20} />
              <div>
                <span className={styles.statNumber}>3+</span>
                <span className={styles.statLabel}>Yil Tajriba</span>
              </div>
            </div>
          </div>

          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryBtn}>
              <Rocket size={18} />
              Loyihalarimni Ko'ring
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Bog'lanish
            </a>
          </div>
        </div>
        
        <div className={styles.visual}>
          <div className={styles.floatingCard}>
            <div className={styles.cardContent}>
              <Code2 size={32} />
              <h3>Kod Sifat</h3>
              <p>Toza va optimal kod</p>
            </div>
          </div>
          <div className={styles.floatingCard}>
            <div className={styles.cardContent}>
              <Rocket size={32} />
              <h3>Tezlik</h3>
              <p>Yuqori performance</p>
            </div>
          </div>
          <div className={styles.mainImage}>
            <div className={styles.glow}></div>
            <img src="/src/assets/react.svg" alt="Developer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;