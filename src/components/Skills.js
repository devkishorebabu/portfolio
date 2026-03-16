import React from 'react';
import {
  SiDocker, SiKubernetes, SiTerraform, SiGit,
  SiGnubash, SiPython, SiElasticsearch, SiGrafana,
  SiDotnet, SiJfrog
} from 'react-icons/si';
import { FaCloud, FaCodeBranch, FaCogs, FaRobot, FaBox, FaChartBar } from 'react-icons/fa';
import { VscAzureDevops, VscTerminalPowershell } from 'react-icons/vsc';
import useInView from '../hooks/useInView';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'CI/CD & DevOps',
      icon: <FaCogs />,
      skills: [
        { name: 'Azure DevOps Server', icon: <VscAzureDevops /> },
        { name: 'YAML Pipelines', icon: <FaCodeBranch /> },
        { name: 'Build & Release Automation', icon: <FaCogs /> },
      ],
    },
    {
      title: 'Version Control',
      icon: <FaCodeBranch />,
      skills: [
        { name: 'Git', icon: <SiGit /> },
        { name: 'TFVC', icon: <FaCodeBranch /> },
      ],
    },
    {
      title: 'Containers & Orchestration',
      icon: <SiDocker />,
      skills: [
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'Azure Kubernetes (AKS)', icon: <SiKubernetes /> },
      ],
    },
    {
      title: 'Cloud & IaC',
      icon: <FaCloud />,
      skills: [
        { name: 'Microsoft Azure', icon: <FaCloud /> },
        { name: 'AWS', icon: <FaCloud /> },
        { name: 'Terraform', icon: <SiTerraform /> },
      ],
    },
    {
      title: 'Scripting & Languages',
      icon: <VscTerminalPowershell />,
      skills: [
        { name: 'PowerShell', icon: <VscTerminalPowershell /> },
        { name: 'Bash', icon: <SiGnubash /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'C# / .NET', icon: <SiDotnet /> },
      ],
    },
    {
      title: 'Monitoring & Observability',
      icon: <FaChartBar />,
      skills: [
        { name: 'OpenSearch', icon: <SiElasticsearch /> },
        { name: 'ELK Stack', icon: <SiElasticsearch /> },
        { name: 'Grafana', icon: <SiGrafana /> },
      ],
    },
    {
      title: 'Artifact Management',
      icon: <FaBox />,
      skills: [
        { name: 'JFrog Artifactory', icon: <SiJfrog /> },
        { name: 'Azure Artifacts', icon: <VscAzureDevops /> },
      ],
    },
    {
      title: 'AI / Generative AI',
      icon: <FaRobot />,
      skills: [
        { name: 'LLM Integration', icon: <FaRobot /> },
        { name: 'Prompt Engineering', icon: <FaRobot /> },
        { name: 'RAG', icon: <FaRobot /> },
        { name: 'Azure OpenAI & Ollama', icon: <FaRobot /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <SkillsContent />
      </div>
    </section>
  );
};

const SkillsContent = () => {
  const [sectionRef, sectionInView] = useInView();

  const skillCategories = [
    {
      title: 'CI/CD & DevOps',
      icon: <FaCogs />,
      skills: [
        { name: 'Azure DevOps Server', icon: <VscAzureDevops /> },
        { name: 'YAML Pipelines', icon: <FaCodeBranch /> },
        { name: 'Build & Release Automation', icon: <FaCogs /> },
      ],
    },
    {
      title: 'Version Control',
      icon: <FaCodeBranch />,
      skills: [
        { name: 'Git', icon: <SiGit /> },
        { name: 'TFVC', icon: <FaCodeBranch /> },
      ],
    },
    {
      title: 'Containers & Orchestration',
      icon: <SiDocker />,
      skills: [
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'Azure Kubernetes (AKS)', icon: <SiKubernetes /> },
      ],
    },
    {
      title: 'Cloud & IaC',
      icon: <FaCloud />,
      skills: [
        { name: 'Microsoft Azure', icon: <FaCloud /> },
        { name: 'AWS', icon: <FaCloud /> },
        { name: 'Terraform', icon: <SiTerraform /> },
      ],
    },
    {
      title: 'Scripting & Languages',
      icon: <VscTerminalPowershell />,
      skills: [
        { name: 'PowerShell', icon: <VscTerminalPowershell /> },
        { name: 'Bash', icon: <SiGnubash /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'C# / .NET', icon: <SiDotnet /> },
      ],
    },
    {
      title: 'Monitoring & Observability',
      icon: <FaChartBar />,
      skills: [
        { name: 'OpenSearch', icon: <SiElasticsearch /> },
        { name: 'ELK Stack', icon: <SiElasticsearch /> },
        { name: 'Grafana', icon: <SiGrafana /> },
      ],
    },
    {
      title: 'Artifact Management',
      icon: <FaBox />,
      skills: [
        { name: 'JFrog Artifactory', icon: <SiJfrog /> },
        { name: 'Azure Artifacts', icon: <VscAzureDevops /> },
      ],
    },
    {
      title: 'AI / Generative AI',
      icon: <FaRobot />,
      skills: [
        { name: 'LLM Integration', icon: <FaRobot /> },
        { name: 'Prompt Engineering', icon: <FaRobot /> },
        { name: 'RAG', icon: <FaRobot /> },
        { name: 'Azure OpenAI & Ollama', icon: <FaRobot /> },
      ],
    },
  ];

  return (
    <div ref={sectionRef}>
      <h2 className={`section-title fade-in-up ${sectionInView ? 'visible' : ''}`}><span className="section-number">02.</span> Technical Skills</h2>
      <div className={`section-line fade-in-up stagger-1 ${sectionInView ? 'visible' : ''}`}></div>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className={`skill-category scale-in stagger-${Math.min(index + 1, 8)} ${sectionInView ? 'visible' : ''}`} key={index}>
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <div className="skill-tag" key={i}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
