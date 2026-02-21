import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      'JavaScript',
      'TypeScript',
      'SQL',
    ],
  },
  {
    category: 'Frontend Technologies',
    skills: [
      'React.js',
      'Next.js',
      'React Hooks',
      'React Hook Form',
      'Redux Toolkit',
      'React Query',
      'Tailwind CSS',
      'Material UI',
      'Ant Design',
      'Bootstrap',
      'HTML',
      'CSS',
      'CSS Media Queries',
    ],
  },
  {
    category: 'Backend Frameworks',
    skills: [
      'Node.js',
      'Express.js',
      'Nest.js',
    ],
  },
  {
    category: 'API & Architecture',
    skills: [
      'REST APIs',
      'GraphQL',
      'WebSockets',
    ],
  },
  {
    category: 'Databases',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
    ],
  },
  {
    category: 'ORMs',
    skills: [
      'Prisma',
    ],
  },
  {
    category: 'Testing',
    skills: [
      'Jest',
      'Postman',
      'Insomnia',
      'cURL',
    ],
  },
  {
    category: 'DevOps & Infrastructure',
    skills: [
      'Docker',
      'CI/CD',
      'NGINX',
      'Git',
      'GitHub',
      'GitLab',
      'Bitbucket',
      'npm',
      'yarn',
      'pnpm',
    ],
  },
  {
    category: 'Cloud & Deployment',
    skills: [
      'AWS',
      'GCP',
      'Azure',
      'Vercel',
      'Netlify',
      'Hostinger',
      'Contabo',
    ],
  },
  {
    category: 'Third-Party Integrations',
    skills: [
      'Twilio',
      'Agora',
      'SendGrid',
    ],
  },
  {
    category: 'Tools & Software',
    skills: [
      'Cursor AI',
      'VS Code',
      'Figma',
      'Miro',
      'Slack',
      'Microsoft Teams',
      'Discord',
    ],
  },
  {
    category: 'Operating Systems',
    skills: [
      'Ubuntu',
      'Windows',
    ],
  },
];

  return (
    <div className="skills">
      <h1 className="page-title">Skills</h1>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h2 className="category-title">{category.category}</h2>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
