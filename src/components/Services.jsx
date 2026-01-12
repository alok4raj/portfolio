import React from 'react';
import '../styles/Services.css';
import { FaCode, FaServer, FaLaptopCode, FaDatabase } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Full-Stack Web Development',
            description: 'Building complete applications using Java, Spring MVC, React, and SQL.',
            icon: <FaLaptopCode />
        },
        {
            id: 2,
            title: 'Backend & API Development',
            description: 'Designing RESTful APIs, handling business logic, and database integration.',
            icon: <FaServer />
        },
        {
            id: 3,
            title: 'Frontend Development',
            description: 'Creating responsive, user-friendly interfaces using React, HTML, CSS, and JavaScript.',
            icon: <FaCode />
        },
        {
            id: 4,
            title: 'Database Integration',
            description: 'Designing and managing relational databases for scalable applications.',
            icon: <FaDatabase />
        }
    ];

    return (
        <section id="services" className="section services">
            <div className="container">
                <h2 className="section-title">Services</h2>
                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
