// src/components/Projects/Projects.jsx
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaDatabase } from 'react-icons/fa'
import { SiReact, SiNodedotjs, SiMongodb, SiFirebase } from 'react-icons/si'
import styles from './Projects.module.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack online store with modern UI/UX, payment integration and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      icons: [<SiReact key="react" />, <SiNodedotjs key="node" />, <SiMongodb key="mongo" />],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity app with drag & drop, real-time updates and team collaboration",
      tech: ["Vue.js", "Firebase", "CSS3"],
      icons: [<FaMobile key="mobile" />, <SiFirebase key="firebase" />],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern responsive portfolio with smooth animations and dark mode",
      tech: ["React", "Framer Motion", "CSS Modules"],
      icons: [<FaCode key="code" />],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather application with charts and location-based forecasts",
      tech: ["JavaScript", "API", "Chart.js"],
      icons: [<FaDatabase key="api" />],
      github: "#",
      demo: "#",
      featured: false
    }
  ]

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Mening <span className={styles.gradientText}>Loyihalarim</span>
          </h2>
          <p className={styles.subtitle}>
            Har bir loyiha yangi <span className={styles.highlight}>challenge</span> va 
            <span className={styles.highlight}> o'rganish</span> imkoniyati
          </p>
        </div>
        
        <div className={styles.projectsGrid}>
          {projects.map(project => (
            <div 
              key={project.id} 
              className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
            >
              {project.featured && (
                <div className={styles.featuredBadge}>
                  ⭐ Featured
                </div>
              )}
              
              <div className={styles.projectHeader}>
                <h3>{project.title}</h3>
                <div className={styles.techIcons}>
                  {project.icons.map((icon, index) => (
                    <span key={index} className={styles.techIcon}>
                      {icon}
                    </span>
                  ))}
                </div>
              </div>

              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.techStack}>
                {project.tech.map(tech => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>

              <div className={styles.projectLinks}>
                <a href={project.github} className={styles.link}>
                  <FaGithub className={styles.linkIcon} />
                  Code
                </a>
                <a href={project.demo} className={styles.link}>
                  <FaExternalLinkAlt className={styles.linkIcon} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <p>Ko'proq loyihalarni ko'rmoqchimisiz?</p>
          <button className={styles.ctaButton}>
            <FaGithub className={styles.ctaIcon} />
            GitHub da Ko'ring
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects