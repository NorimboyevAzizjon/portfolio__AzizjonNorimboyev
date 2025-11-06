// src/components/Skills/Skills.jsx
import { 
  Html5, 
  Css3, 
  Javascript, 
  React as ReactIcon, 
  GitBranch,
  Layout
} from 'lucide-react';
import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    { 
      name: 'HTML/CSS', 
      level: 95, 
      icon: <Html5 size={24} />,
      color: '#e34f26'
    },
    { 
      name: 'JavaScript', 
      level: 90, 
      icon: <Javascript size={24} />,
      color: '#f7df1e'
    },
    { 
      name: 'React', 
      level: 88, 
      icon: <ReactIcon size={24} />,
      color: '#61dafb'
    },
    { 
      name: 'TypeScript', 
      level: 80, 
      icon: <Layout size={24} />,
      color: '#3178c6'
    },
    { 
      name: 'Git', 
      level: 85, 
      icon: <GitBranch size={24} />,
      color: '#f05032'
    },
    { 
      name: 'Responsive Design', 
      level: 92, 
      icon: <Css3 size={24} />,
      color: '#1572b6'
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Texnologiyalar & Ko'nikmalar</h2>
          <p className={styles.subtitle}>
            Zamonaviy veb texnologiyalari va eng so'nggi trendlar bilan ishlash tajribam
          </p>
        </div>
        
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <div 
                  className={styles.skillIcon}
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <div className={styles.skillInfo}>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                  <span className={styles.skillPercent}>{skill.level}%</span>
                </div>
              </div>
              <div className={styles.skillBar}>
                <div 
                  className={styles.skillProgress} 
                  style={{ 
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;