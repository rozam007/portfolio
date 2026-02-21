import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Intellixcore',
      position: 'Software Engineer',
      period: 'Sept 2025 - Present',
      responsibilities: [
        'Integrated AI-powered agents into the React/Next.js application to automate document processing and analysis workflows.',
        'Designed and developed a Document Generator Agent capable of parsing dynamic placeholders in templates and automatically populating them with context-aware data.',
        'Built a Version Comparison Agent to compare document versions, highlight additions, deletions, and modifications, and generate detailed comparison reports.',
        'Implemented role-based access control (RBAC) improvements by identifying and fixing multiple issues in the permissions layer to enhance security and reliability.',
      ],
    },
    {
      company: 'Optima Geeks',
      position: 'Software Engineer',
      period: 'May 2025 - Aug 2025',
      responsibilities: [
        'Developed an agency case management system to efficiently track, manage, and investigate order-related cases.',
        'Implemented internationalization using i18next for multi-language support.',
        'Built the application using Next.js and React with modern JavaScript practices.',
        'Designed responsive interfaces with Tailwind CSS for optimal user experience across devices.',
        'Integrated API communication using Axios for seamless data management.',
      ],
    },
    {
      company: 'Blockrithms',
      position: 'Software Engineer',
      period: 'May 2024 - April 2025',
      responsibilities: [
        'Architected and developed Carsale, a comprehensive full-stack vehicle management platform with geolocation-based country detection and advanced filtering capabilities.',
        'Built an admin panel with full CRUD operations for vehicle management, integrated OTP verification and JWT-based authentication for secure user access.',
        'Implemented vehicle browsing features with reviews, wishlist management, and WhatsApp integration for direct showroom communication.',
        'Developed the Blockrithms portfolio website featuring a dynamic splash screen, interactive hero section, and client testimonials showcase.',
        'Created fully responsive designs across all devices using Tailwind CSS, ensuring optimal user experience on mobile, tablet, and desktop platforms.',
        'Utilized Next.js and React.js with modern hooks for building scalable, performant applications with server-side rendering.',
        'Integrated Nest.js backend with PostgreSQL and Prisma ORM for robust data management and API development.',
        'Implemented state management using Redux and React Query for efficient data fetching and caching.',
        'Configured CI/CD pipelines with GitHub Actions and deployed applications to Ubuntu servers using Nginx.',
        'Managed media assets through Cloudinary integration for optimized image delivery and storage.',
      ],
    },
    {
      company: 'Brackets Private Limited',
      position: 'Software Engineer',
      period: 'April 2023 - May 2024',
      responsibilities: [
        'Spearheaded automation of comprehensive employee profiles, management systems, financial transaction management and reporting, recruitment processes, and performance evaluation platform.',
        'Orchestrated the development of an Attendance Management System and Payroll Management System, optimizing workforce management and ensuring timely salary disbursements.',
        'Designed and implemented a suite of request forms, including Leaves, Reimbursements, Loan, Advance Salaries, and Overtime, enhancing employee engagement and administrative efficiency.',
        'Automated accounts and expenses tracking, meticulously managing financial transactions and generating insightful reports for strategic financial analysis.',
        'Established a robust client and vendor management system, enabling seamless invoicing and fostering stronger business relationships.',
        'Engineered an end-to-end recruitment process automation solution, integrating initial screening, technical interviews, and final assessments.',
        'Architected an employee assessment platform, empowering team leads and project managers to evaluate team members\' performance comprehensively.',
      ],
    },
    {
      company: 'Brackets Private Limited',
      position: 'Software Engineer Intern',
      period: 'November 2022 - April 2023',
      responsibilities: [
        'Gained hands-on experience with React.js, Node.js, and MongoDB.',
        'Assisted in developing and testing web applications.',
        'Learned industry-standard development workflows and version control practices.',
      ],
    },
    {
      company: 'University Of Central Punjab',
      position: 'Lab Instructor',
      period: 'October 2021 - September 2022',
      responsibilities: [
        'Instructed students in computer science laboratory sessions.',
        'Provided guidance on programming concepts and practical implementations.',
      ],
    },
    {
      company: 'University Of Central Punjab',
      position: 'Teacher Assistant',
      period: 'October 2018 - August 2020',
      responsibilities: [
        'Assisted faculty members with course delivery and student support.',
        'Helped students understand complex computer science concepts.',
      ],
    },
  ];

  return (
    <div className="experience">
      <h1 className="page-title">Experience</h1>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div>
                <h2 className="company-name">{exp.company}</h2>
                <h3 className="position">{exp.position}</h3>
              </div>
              <span className="period">{exp.period}</span>
            </div>
            <ul className="responsibilities">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
