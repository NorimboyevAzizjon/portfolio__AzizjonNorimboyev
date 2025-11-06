// src/components/Projects/Projects.jsx
import styles from './Projects.module.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'React va Node.js bilan yaratilgan toʻliq funksionallikdagi onlayn doʻkon',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/src/assets/react.svg',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Kundalik vazifalarni boshqarish uchun interaktiv ilova',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: '/src/assets/react.svg',
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Havo ma\'lumotlarini koʻrsatadigan dashboard',
      technologies: ['React', 'API', 'Chart.js'],
      image: '/src/assets/react.svg',
      link: '#'
    }
  ]

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Mening Loyihalarim</h2>
        <div className={styles.projectsGrid}>
          {projects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <a href={project.link} className={styles.projectLink}>Ko'rish</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects