import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container about-container">
                <div className="about-text">
                    <h2>About Me</h2>
                    <p className="about-bio">
                        I am a B.Tech graduate in Computer Science and Engineering from Ramgarh Engineering College (2024).
                        I have a strong passion for solving real-world problems using clean, efficient, and maintainable code.
                        My focus is on full-stack development, leveraging my skills in both backend and frontend technologies to build robust applications.
                    </p>
                    <p className="about-bio">
                        Actively seeking entry-level software developer roles to apply my skills and grow as an engineer.
                    </p>

                    <div className="education-card">
                        <h3>B.Tech in Computer Science and Engineering</h3>
                        <span>Ramgarh Engineering College — 2024</span>
                    </div>
                </div>

                <div className="about-visual">
                    <div className="code-block">
                        <div className="code-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="code-content">
                            <div className="code-line">
                                <span className="keyword">class</span> <span className="class-name">Developer</span> {'{'}
                            </div>
                            <div className="code-line">
                                &nbsp;&nbsp;<span className="keyword">constructor</span>() {'{'}
                            </div>
                            <div className="code-line">
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">this</span>.name = <span className="string">'Alok Kumar Raj'</span>;
                            </div>
                            <div className="code-line">
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">this</span>.role = <span className="string">'Java Full-Stack Dev'</span>;
                            </div>
                            <div className="code-line">
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">this</span>.passion = <span className="string">'Building Scalable Apps'</span>;
                            </div>
                            <div className="code-line">
                                &nbsp;&nbsp;{'}'}
                            </div>
                            <div className="code-line">
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
