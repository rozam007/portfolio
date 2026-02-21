import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
     {
      name: 'Intellixcore - AI-Powered',
      description: 'Developed a scalable, multi-tenant AI-powered enterprise platform integrating advanced AI agents, including LLM-driven assistants, automated document generation, intelligent version comparison, account mapping automation, and a data intake & labeling pipeline. The system enhances operational efficiency by automating document processing, structured data extraction, change detection, and workflow orchestration across multiple tenants.',
      technologies: ['JavaScript', 'React.js', 'MUI', 'Redux', 'Axios'],
      link: 'https://icqa.intellixcore.one/auth/login',
    },
    {
      name: 'Scoprichie - Agency Case Management System',
      description: 'Application for agencies to efficiently track, manage, and investigate order-related cases.',
      technologies: ['React', 'React Hooks', 'i18next', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Axios'],
      link: 'https://scoprichie.dev.leadernova.com/',
    },
    {
      name: 'Carsale - Full Stack Vehicle Management Platform',
      description: 'A comprehensive full-stack web application designed to facilitate the management and exploration of vehicles through an intuitive, user-friendly platform.',
      features: [
        'Geolocation-based country detection',
        'Admin panel with full CRUD capabilities',
        'OTP verification and JWT-based security',
        'Vehicle browsing with advanced filtering, reviews, and wishlist management',
        'WhatsApp integration for direct showroom communication',
      ],
      technologies: [
        'Next.js',
        'React.js',
        'TailwindCSS',
        'Nest.js',
        'Node.js',
        'PostgreSQL',
        'Prisma',
        'Redux',
        'React Queries',
        'React Hook Forms',
        'JWT',
        'GitHub Actions',
        'Nginx',
        'Ubuntu',
        'Cloudinary',
      ],
      links: [
        { label: 'Website', url: 'https://carsale.blockrithms.com/' },
        { label: 'Admin Panel', url: 'https://admin.carsale.blockrithms.com/' },
        { label: 'API', url: 'https://api.carsale.blockrithms.com/' },
      ],
    },
    {
      name: 'Blockrithms Website - Portfolio Website',
      description: 'Developed a modern, responsive portfolio website showcasing advanced web development expertise using Next.js and React.js.',
      features: [
        'Splash screen with engaging intro',
        'Intuitive navigation and dynamic hero section',
        'Interactive services showcase and client testimonials',
        'Business strategies insights and simple contact form',
        'Fully responsive design across all devices',
      ],
      technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Web Design', 'React Hooks', 'HTML/CSS'],
      link: 'https://www.blockrithms.com/',
    },
    {
      name: 'Human Resource Management System (HRMS)',
      description: 'Comprehensive automation solution for HR operations, employee management, and recruitment processes.',
      features: [
        'Automated employee profiles with contractual details',
        'Attendance Management System and Payroll Management System',
        'Request forms for leaves, reimbursements, loans, advance salaries, and overtime',
        'Automated accounts and expenses tracking with financial reporting',
        'Client and vendor management system',
        'End-to-end recruitment process automation',
        'Employee assessment platform for performance evaluation',
      ],
      technologies: ['React', 'React Hooks', 'HTML/CSS', 'Tailwind CSS', 'Material UI', 'Redux', 'REST APIs', 'Finance', 'Analysis'],
      link: 'https://tms.bracketsltd.com/',
    },
    {
      name: 'Carhub - Modern Car Showcase Application',
      description: 'A state-of-the-art modern application utilizing Next.js 14 features such as server-side rendering and the app router.',
      technologies: ['HTML/CSS', 'React Hooks', 'Tailwind CSS', 'REST/RESTful APIs', 'Git', 'Next.js'],
      link: 'https://car-showcase-rho-six.vercel.app/',
    },
  ];

  return (
    <div className="projects">
      <h1 className="page-title">Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            
            {project.features && (
              <div className="project-features">
                <h3 className="features-title">Key Features:</h3>
                <ul className="features-list">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="project-technologies">
              <h3 className="technologies-title">Technologies Used:</h3>
              <div className="technologies-list">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-links">
              {project.links ? (
                project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {link.label}
                  </a>
                ))
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
