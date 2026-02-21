import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Of Central Punjab',
      period: 'January 2016 - January 2020',
    },
    {
      degree: 'Pre-Engineering',
      institution: 'Punjab Group Of Colleges',
      period: 'August 2014 - August 2016',
    },
  ];

  return (
    <div className="education">
      <h1 className="page-title">Education</h1>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h2 className="degree">{edu.degree}</h2>
            <h3 className="institution">{edu.institution}</h3>
            <p className="period">{edu.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
