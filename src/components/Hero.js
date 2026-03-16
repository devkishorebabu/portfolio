import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-particles"></div>
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Poluru Kishore Babu</h1>
        <h2 className="hero-title">
          <span className="typing-text">DevOps Engineer</span>
        </h2>
        <p className="hero-subtitle">
          Azure DevOps &bull; CI/CD &bull; Automation &bull; Cloud Infrastructure
        </p>
        <div className="hero-buttons">
          <Link to="contact" smooth={true} duration={500} offset={-70} className="btn btn-primary">
            Get In Touch
          </Link>
          <Link to="experience" smooth={true} duration={500} offset={-70} className="btn btn-outline">
            View My Work
          </Link>
        </div>
        <div className="hero-socials">
          <a href="mailto:polurukishorebabu@gmail.com" aria-label="Email" className="social-link">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/poluru-kishore-babu-18753a212/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
            <FaLinkedin />
          </a>
          <a href="https://github.com/devkishorebabu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <Link to="about" smooth={true} duration={500} offset={-70}>
          <div className="mouse">
            <div className="mouse-wheel"></div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
