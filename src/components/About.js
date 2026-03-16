import React, { useState, useEffect } from 'react';
import { FaServer, FaDocker, FaCloud, FaCode } from 'react-icons/fa';
import useInView from '../hooks/useInView';
import './About.css';

const useCounter = (target, isInView, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);
  return count;
};

const About = () => {
  const [sectionRef, sectionInView] = useInView();

  const stats = [
    { value: 3, suffix: '+', label: 'Years Experience' },
    { value: 200, suffix: '+', label: 'Developers Supported' },
    { value: 50, suffix: '%', label: 'Pipeline Time Reduced' },
    { value: 60, suffix: '+ GB', label: 'Codebase Migrated' },
  ];

  const highlights = [
    { icon: <FaServer />, title: 'CI/CD Expert', desc: 'Azure DevOps YAML Pipelines' },
    { icon: <FaDocker />, title: 'Containerization', desc: 'Docker & Kubernetes' },
    { icon: <FaCloud />, title: 'Cloud & IaC', desc: 'Azure, Terraform' },
    { icon: <FaCode />, title: 'Automation', desc: 'PowerShell, Bash, .NET' },
  ];

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title fade-in-up ${sectionInView ? 'visible' : ''}`}><span className="section-number">01.</span> About Me</h2>
        <div className={`section-line fade-in-up stagger-1 ${sectionInView ? 'visible' : ''}`}></div>
        <div className="about-content">
          <div className={`about-text fade-in-left stagger-2 ${sectionInView ? 'visible' : ''}`}>
            <p>
              DevOps Engineer with <strong>3+ years of experience</strong> building and scaling 
              enterprise CI/CD platforms across cloud and on-premises environments. Currently 
              working at <strong>Siemens Healthineers</strong>, where I design and maintain 
              CI/CD pipelines supporting <strong>200+ developers</strong> on MRI software platforms.
            </p>
            <p>
              I specialize in Azure DevOps, YAML pipelines, Docker, Kubernetes, and Infrastructure 
              as Code (Terraform) to automate deployments and improve delivery reliability. I have a 
              proven track record of modernizing legacy systems, reducing pipeline execution time 
              by <strong>50%</strong>, and driving DevOps best practices across teams.
            </p>
            <p>
              Passionate about automation, observability, and leveraging GenAI for intelligent 
              DevOps workflows. I thrive on solving complex infrastructure challenges and 
              continuously improving developer experience.
            </p>
          </div>
          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div className={`highlight-card scale-in stagger-${index + 2} ${sectionInView ? 'visible' : ''}`} key={index}>
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`about-stats fade-in-up stagger-6 ${sectionInView ? 'visible' : ''}`}>
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isInView={sectionInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, isInView }) => {
  const count = useCounter(stat.value, isInView);
  return (
    <div className="stat-card">
      <span className="stat-value">{count}{stat.suffix}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
};

export default About;
