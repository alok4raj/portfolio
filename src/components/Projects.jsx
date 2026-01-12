import React from 'react';
import '../styles/Projects.css';
import { FaGithub, FaExternalLinkAlt, FaShoppingCart, FaUserGraduate, FaCloudSun } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Web Application',
            description: 'A responsive e-commerce platform with modern UI, user authentication, product management, and dynamic state handling to simulate a real-world online store.',
            techStack: ['React.js', 'Redux', 'CSS3', 'Firebase Auth'],
            icon: <FaShoppingCart />,
            githubLink: '#',
            demoLink: '#'
        },
        {
            id: 2,
            title: 'Student Management System',
            description: 'CRUD-based application using Spring MVC, Hibernate, JSP, and PostgreSQL following MVC architecture with server-side validation.',
            techStack: ['Spring MVC', 'Hibernate', 'JSP', 'PostgreSQL'],
            icon: <FaUserGraduate />,
            githubLink: '#',
            demoLink: null // 'Live Demo' if available
        },
        {
            id: 3,
            title: 'Weather Forecasting Application',
            description: 'A real-time weather application integrating an external REST API, with backend logic handled by Spring Boot.',
            techStack: ['Spring Boot', 'REST API', 'Thymeleaf', 'Java'],
            icon: <FaCloudSun />,
            githubLink: '#',
            demoLink: '#'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                {project.icon}
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="tech-stack">
                                    {project.techStack.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.githubLink} className="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer">
                                        <FaGithub /> GitHub
                                    </a>
                                    {project.demoLink && (
                                        <a href={project.demoLink} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
