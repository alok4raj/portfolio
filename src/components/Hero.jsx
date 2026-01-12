import React from 'react';
import '../styles/Hero.css';
import profileImg from '../assets/images/profile-new.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h2>Java Full-Stack Developer</h2>
                    <h1>Hi, I'm Alok Kumar Raj</h1>
                    <p className="tagline">
                        Building clean, scalable, and user-focused web applications using Java, Spring, React, and SQL.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-bg-shape"></div>
                    <img src={profileImg} alt="Alok Kumar Raj" className="profile-img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
