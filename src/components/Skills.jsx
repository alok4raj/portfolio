import React from 'react';
import '../styles/Skills.css';
import { FaJava, FaJs, FaReact, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiSpring, SiHibernate, SiPostgresql } from 'react-icons/si';
import { MdSettingsSuggest, MdGroupWork, MdAccessTime, MdLightbulbOutline } from 'react-icons/md';

const Skills = () => {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Skills</h2>

                <div className="skills-wrapper">
                    {/* Technical Skills */}
                    <div className="skills-category">
                        <h3>Technical Skills</h3>
                        <div className="skills-grid">
                            <div className="skill-item"><FaJava className="skill-icon" style={{ color: '#ea2d2e' }} /> Java</div>
                            <div className="skill-item"><FaJs className="skill-icon" style={{ color: '#f0db4f' }} /> JavaScript</div>
                            <div className="skill-item"><SiSpring className="skill-icon" style={{ color: '#6db33f' }} /> Spring Core/MVC</div>
                            <div className="skill-item"><SiHibernate className="skill-icon" style={{ color: '#59666c' }} /> Hibernate</div>
                            <div className="skill-item"><FaReact className="skill-icon" style={{ color: '#61dafb' }} /> React.js</div>
                            <div className="skill-item"><FaHtml5 className="skill-icon" style={{ color: '#e34f26' }} /> HTML5</div>
                            <div className="skill-item"><FaCss3Alt className="skill-icon" style={{ color: '#2965f1' }} /> CSS3</div>
                            <div className="skill-item"><SiPostgresql className="skill-icon" style={{ color: '#336791' }} /> SQL (PostgreSQL)</div>
                            <div className="skill-item"><FaDatabase className="skill-icon" /> RESTful APIs</div>
                        </div>
                    </div>

                    {/* Professional Skills */}
                    <div className="skills-category">
                        <h3>Professional Skills</h3>
                        <div className="skills-grid">
                            <div className="skill-item"><MdLightbulbOutline className="skill-icon" /> Problem Solving</div>
                            <div className="skill-item"><MdSettingsSuggest className="skill-icon" /> Clean Code</div>
                            <div className="skill-item"><MdGroupWork className="skill-icon" /> Team Collaboration</div>
                            <div className="skill-item"><MdAccessTime className="skill-icon" /> Time Management</div>
                            <div className="skill-item">Fast Learner</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
