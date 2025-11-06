// src/components/Skills/Skills.jsx
import React from 'react';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { SiReact, SiJavascript, SiNodedotjs, SiMongodb, SiGit, SiCss3, SiHtml5 } from 'react-icons/si';
import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    { name: "HTML/CSS", level: 95, icon: <SiHtml5 />, color: "#00ff88" },
    { name: "JavaScript", level: 90, icon: <SiJavascript />, color: "#00ccff" },
    { name: "React", level: 85, icon: <SiReact />, color: "#ff00ff" },
    { name: "Node.js", level: 80, icon: <SiNodedotjs />, color: "#ffcc00" },
    { name: "MongoDB", level: 75, icon: <SiMongodb />, color: "#00ff88" },
    { name: "Git", level: 90, icon: <SiGit />, color: "#00ccff" }
  ];

  const techCategories = [
    {
      title: "Frontend",
      icon: <FaCode />,
      tech: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind"]
    },
    {
      title: "Backend", 
      icon: <FaServer />,
      tech: ["Node.js", "Express", "REST API"]
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      tech: ["MongoDB", "MySQL", "Firebase"]
    },
    {
      title: "Tools",
      icon: <FaTools />,
      tech: ["Git", "GitHub", "VSCode", "Figma", "Vite"]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Mening <span className={styles.gradientText}>Ko'nikmalarim</span>
          </h2>
          <p className={styles.subtitle}>
            Doimiy <span className={styles.highlight}>o'rganish</span> va 
            <span className={styles.highlight}> rivojlanish</span>
          </p>
        </div>

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
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.techCategories}>
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
    </section>
  );
};

export default Skills;