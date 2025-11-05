// src/components/Skills/Skills.jsx
import { FaCode, FaServer, FaDatabase, FaTools, FaRocket } from 'react-icons/fa'
import { SiReact, SiJavascript, SiNodedotjs, SiMongodb, SiGit, SiFigma } from 'react-icons/si'
import styles from './Skills.module.css'

const Skills = () => {
  const skills = [
    { name: "HTML/CSS", level: 95, icon: <FaCode />, color: "#00ff88" },
    { name: "JavaScript", level: 90, icon: <SiJavascript />, color: "#00ccff" },
    { name: "React", level: 85, icon: <SiReact />, color: "#ff00ff" },
    { name: "Node.js", level: 80, icon: <SiNodedotjs />, color: "#ffcc00" },
    { name: "MongoDB", level: 75, icon: <SiMongodb />, color: "#00ff88" },
    { name: "Git/GitHub", level: 90, icon: <SiGit />, color: "#00ccff" }
  ]

  const techCategories = [
    {
      title: "Frontend",
      icon: <FaCode />,
      tech: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind"]
    },
    {
      title: "Backend", 
      icon: <FaServer />,
      tech: ["Node.js", "Express", "Python", "REST API", "GraphQL"]
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      tech: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"]
    },
    {
      title: "Tools",
      icon: <FaTools />,
      tech: ["Git", "GitHub", "VSCode", "Figma", "Vite", "Webpack"]
    }
  ]

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Mening <span className={styles.gradientText}>Ko'nikmalarim</span>
          </h2>
          <p className={styles.subtitle}>
            Doimiy <span className={styles.highlight}>o'rganish</span> va 
            <span className={styles.highlight}> rivojlanish</span> - mening asosiy prinsipim
          </p>
        </div>

        {/* SKILL BARS */}
        <div className={styles.skillsSection}>
          <h3 className={styles.skillsTitle}>
            <FaRocket className={styles.sectionIcon} />
            Asosiy Ko'nikmalar
          </h3>
          <div className={styles.skillsGrid}>
            {skills.map(skill => (
              <div key={skill.name} className={styles.skillItem}>
                <div className={styles.skillHeader}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                  <span className={styles.skillPercent}>{skill.level}%</span>
                </div>
                <div className={styles.skillBar}>
                  <div 
                    className={styles.skillProgress}
                    style={{ 
                      width: `${skill.level}%`,
                      background: skill.color
                    }}
                    data-level={skill.level}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TECH CATEGORIES */}
        <div className={styles.techSection}>
          <h3 className={styles.techTitle}>Texnologiya Stack</h3>
          <div className={styles.techGrid}>
            {techCategories.map(category => (
              <div key={category.title} className={styles.techCategory}>
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <h4>{category.title}</h4>
                </div>
                <div className={styles.techList}>
                  {category.tech.map(tech => (
                    <span key={tech} className={styles.techItem}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACHIEVEMENTS */}
        <div className={styles.achievements}>
          <div className={styles.achievement}>
            <div className={styles.achievementIcon}>🚀</div>
            <div className={styles.achievementContent}>
              <h4>10+ Loyiha</h4>
              <p>Muvaffaqiyatli yakunlangan</p>
            </div>
          </div>
          <div className={styles.achievement}>
            <div className={styles.achievementIcon}>💻</div>
            <div className={styles.achievementContent}>
              <h4>2+ Yil</h4>
              <p>Professional tajriba</p>
            </div>
          </div>
          <div className={styles.achievement}>
            <div className={styles.achievementIcon}>⭐</div>
            <div className={styles.achievementContent}>
              <h4>100% Sifat</h4>
              <p>Mijozlar qanoati</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills