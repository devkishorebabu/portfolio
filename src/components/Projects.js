import React from 'react';
import { FaDocker, FaChartBar, FaCogs } from 'react-icons/fa';
import useInView from '../hooks/useInView';
import './Projects.css';

const Projects = () => {
  const [sectionRef, sectionInView] = useInView();
  const projects = [
    {
      title: 'DevOps Agent Monitoring & Self-Healing System',
      subtitle: 'VsimWatchdog',
      icon: <FaCogs />,
      description:
        'Developed and maintained an automation tool to monitor the health of Azure DevOps agents running on vSphere virtual machines used in CI/CD pipelines.',
      highlights: [
        'PowerShell-based automation for real-time agent health monitoring',
        'Auto-detection of offline agents with self-healing recovery',
        'Improved pipeline reliability and reduced manual intervention',
        'Integration with vSphere VM management APIs',
      ],
      tags: ['PowerShell', 'Azure DevOps', 'vSphere', 'Automation'],
    },
    {
      title: 'CI/CD Build Monitoring Dashboard',
      subtitle: 'Build Insights',
      icon: <FaChartBar />,
      description:
        'Developed a web-based dashboard to visualize Azure DevOps YAML pipeline execution results and improve CI/CD visibility across teams.',
      highlights: [
        'Centralized interface for monitoring build and test results',
        'Real-time pipeline status visualization',
        'Custom reporting addressing gaps in native Azure DevOps capabilities',
        'Built with C# / .NET for the backend',
      ],
      tags: ['C#', '.NET', 'Azure DevOps API', 'YAML Pipelines'],
    },
    {
      title: 'TFVC to Git Migration',
      subtitle: 'Repository Modernization',
      icon: <FaDocker />,
      description:
        'Led the migration of a 60+ GB monolithic codebase from TFVC to Git, transforming version control workflows for the entire development organization.',
      highlights: [
        'Migrated 60+ GB monolithic codebase with full history preservation',
        'Improved branching strategies and team collaboration',
        'Enabled modern Git-based CI/CD workflows',
        'Supported 200+ developers through the transition',
      ],
      tags: ['Git', 'TFVC', 'Azure DevOps', 'Migration'],
    },
  ];

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title fade-in-up ${sectionInView ? 'visible' : ''}`}>Featured Projects</h2>
        <div className={`section-line fade-in-up stagger-1 ${sectionInView ? 'visible' : ''}`}></div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className={`project-card scale-in stagger-${index + 2} ${sectionInView ? 'visible' : ''}`} key={index}>
              <div className="project-icon">{project.icon}</div>
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-subtitle">{project.subtitle}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
