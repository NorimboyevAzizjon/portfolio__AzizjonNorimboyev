// src/components/Skills/Skills.jsx
import styles from './Skills.module.css'

const Skills = () => {
  const skills = [
    { name: "HTML/CSS", level: 95, color: "#00ff88" },
    { name: "JavaScript", level: 90, color: "#00ccff" },
    { name: "React", level: 85, color: "#ff00ff" },
    { name: "Node.js", level: 80, color: "#ffcc00" },
    { name: "MongoDB", level: 75, color: "#00ff88" },
    { name: "Git/GitHub", level: 90, color: "#00ccff" }
  ]

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Mening <span>Ko'nikmalarim</span></h2>
        
        <div className={styles.skillsGrid}>
          {skills.map(skill => (
            <div key={skill.name} className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillPercent}>{skill.level}%</span>
              </div>
              <div className={styles.skillBar}>
                <div 
                  className={styles.skillProgress}
                  style={{ 
                    width: `${skill.level}%`,
                    background: skill.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.techStack}>
          <h3>Texnologiyalar:</h3>
          <div className={styles.techList}>
            {['React', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'Firebase', 
              'Git', 'Vite', 'Figma', 'Photoshop'].map(tech => (
              <span key={tech} className={styles.tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills