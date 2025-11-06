// src/components/Projects/Projects.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiVue } from 'react-icons/si';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack online store with modern UI/UX, payment integration and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      icons: [<SiReact />, <SiNodedotjs />, <SiMongodb />],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Task Management App", 
      description: "Productivity app with drag & drop, real-time updates and team collaboration",
      tech: ["Vue.js", "Firebase", "CSS3"],
      icons: [<SiVue />, <FaCode />],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application with charts and location-based forecasts",
      tech: ["React", "API", "Chart.js"],
      icons: [<SiReact />],
      github: "#", 
      demo: "#"
    }
  ];

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
            <div key={project.id} className={styles.projectCard}>
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
      </div>
    </section>
  );
};

export default Projects;