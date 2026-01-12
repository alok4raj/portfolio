import React from 'react';
import '../styles/Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-wrapper">
                    {/* 
                      Netlify Forms Setup:
                      1. The form has 'data-netlify="true"' which enables Netlify to handle submissions.
                      2. The hidden input 'form-name' is required for React apps.
                      3. A corresponding hidden form is added to index.html for build detection.
                    */}
                    <form className="contact-form" name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="How can I help you?" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>

                    <div className="contact-socials">
                        <a href="mailto:mithualok.9@gmail.com" className="social-link">
                            <FaEnvelope className="social-icon" />
                            <span>Email</span>
                        </a>
                        <a href="https://www.linkedin.com/in/alokkumarraj/" className="social-link">
                            <FaLinkedin className="social-icon" />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/alok4raj" className="social-link">
                            <FaGithub className="social-icon" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="container">
                    <p>© {new Date().getFullYear()} Alok Kumar Raj. All rights reserved.</p>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
