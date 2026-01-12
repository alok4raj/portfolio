import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <a href="#" className="logo">Alok.dev</a>
                <ul className="nav-links">
                    <li><a href="#home" className="nav-link">Home</a></li>
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#skills" className="nav-link">Skills</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#services" className="nav-link">Services</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
