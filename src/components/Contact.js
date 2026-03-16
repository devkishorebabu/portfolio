import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import useInView from '../hooks/useInView';
import './Contact.css';

const Contact = () => {
  const [sectionRef, sectionInView] = useInView();

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title fade-in-up ${sectionInView ? 'visible' : ''}`}><span className="section-number">06.</span> Get In Touch</h2>
        <div className={`section-line fade-in-up stagger-1 ${sectionInView ? 'visible' : ''}`}></div>
        <p className={`contact-intro fade-in-up stagger-2 ${sectionInView ? 'visible' : ''}`}>
          I'm always open to discussing DevOps strategies, new opportunities, or interesting projects. 
          Feel free to reach out!
        </p>
        <div className={`contact-cards fade-in-up stagger-3 ${sectionInView ? 'visible' : ''}`}>
          <a href="mailto:polurukishorebabu@gmail.com" className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>polurukishorebabu@gmail.com</p>
          </a>
          <a href="tel:+916301795078" className="contact-card">
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <p>+91 6301795078</p>
          </a>
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Location</h3>
            <p>Bangalore, India</p>
          </div>
        </div>
        <div className={`contact-socials fade-in-up stagger-4 ${sectionInView ? 'visible' : ''}`}>
          <a href="https://www.linkedin.com/in/poluru-kishore-babu-18753a212/" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/devkishorebabu" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-logo">&lt;KB /&gt;</p>
          <p className="footer-text">
            Designed & Built by Poluru Kishore Babu
          </p>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
