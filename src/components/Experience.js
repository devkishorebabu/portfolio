import React from 'react';
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import useInView from '../hooks/useInView';
import './Experience.css';

const Experience = () => {
  const [sectionRef, sectionInView] = useInView();
  const experiences = [
    {
      company: 'Siemens Healthineers',
      role: 'DevOps Engineer',
      period: 'Jan 2023 – Present',
      location: 'Bangalore, India',
      achievements: [
        'Designed and maintained enterprise CI/CD pipelines using Azure DevOps Server, enabling reliable build and release workflows for MRI software platforms supporting 200+ developers.',
        'Migrated a 60+ GB monolithic codebase from TFVC to Git, improving version control, branching strategies, and collaboration across development teams.',
        'Containerized legacy applications using Docker, implemented custom Docker-based orchestration mechanisms and automated FIT execution in release pipelines, reducing VM dependency and improving pipeline execution time by 50%.',
        'Developed a custom YAML Build Dashboard using C# to visualize build and release results, addressing gaps in native reporting capabilities and improving release visibility.',
        'Implemented infrastructure monitoring and CI/CD log analytics using ELK Stack and OpenSearch, improving visibility into build failures, agent health and performance metrics.',
        'Automated deployment and operational workflows using PowerShell and Batch scripting, and adopted Infrastructure as Code practices using Terraform for infrastructure provisioning.',
        'Provisioned and managed DevOps infrastructure using VMware vSphere and Hyper-V to support build agents, release environments, and automated testing workflows.',
        'Stabilized and supported CI/CD platform used by 200+ developers, reducing pipeline downtime and accelerating issue resolution across multiple teams.',
      ],
    },
  ];

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title fade-in-up ${sectionInView ? 'visible' : ''}`}>Professional Experience</h2>
        <div className={`section-line fade-in-up stagger-1 ${sectionInView ? 'visible' : ''}`}></div>
        <div className={`timeline fade-in-up stagger-2 ${sectionInView ? 'visible' : ''}`}>
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="company-name">{exp.company}</h3>
                    <p className="role-name">{exp.role}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="period">{exp.period}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>
                      <FaCheckCircle className="check-icon" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
