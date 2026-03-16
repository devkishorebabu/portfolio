import React from 'react';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import useInView from '../hooks/useInView';
import './Education.css';

const Education = () => {
  const [sectionRef, sectionInView] = useInView();

  return (
    <section id="education" className="education" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title fade-in-up ${sectionInView ? 'visible' : ''}`}><span className="section-number">05.</span> Education</h2>
        <div className={`section-line fade-in-up stagger-1 ${sectionInView ? 'visible' : ''}`}></div>
        <div className={`education-card scale-in stagger-2 ${sectionInView ? 'visible' : ''}`}>
          <div className="edu-icon">
            <FaGraduationCap />
          </div>
          <div className="edu-content">
            <h3>B.E. in Computer Science and Engineering</h3>
            <div className="edu-institute">
              <FaUniversity className="institute-icon" />
              <span>The National Institute of Engineering, Mysore</span>
            </div>
            <div className="edu-details">
              <span className="edu-period">July 2019 – June 2023</span>
              <span className="edu-location">Mysore, India</span>
            </div>
            <div className="edu-gpa">
              <span className="gpa-label">GPA</span>
              <span className="gpa-value">9.1</span>
              <div className="gpa-bar">
                <div className="gpa-fill" style={{ width: '91%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
