// src/components/Projects/Projects.jsx
import styles from './Projects.module.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack online store with React & Node.js",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      image: "/images/projects/ecommerce.jpg"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity app with drag & drop functionality",
      tech: ["Vue.js", "Firebase", "CSS3"],
      github: "#",
      demo: "#",
      image: "/images/projects/taskapp.jpg"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern responsive portfolio with animations",
      tech: ["React", "Framer Motion", "CSS Modules"],
      github: "#",
      demo: "#",
      image: "/images/projects/portfolio.jpg"
    }
  ]

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Mening <span>Loyihalarim</span></h2>
        <p className={styles.subtitle}>
          Har bir loyiha yangi challange va o'rganish imkoniyati
        </p>
        
        <div className={styles.projectsGrid}>
          {projects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder}>
                  🚀 {project.title}
                </div>
                <div className={styles.overlay}>
                  <div className={styles.techStack}>
                    {project.tech.map(tech => (
                      <span key={tech} className={styles.tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className={styles.projectLinks}>
                  <a href={project.github} className={styles.link}>
                    📁 Kod
                  </a>
                  <a href={project.demo} className={styles.link}>
                    🌐 Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects