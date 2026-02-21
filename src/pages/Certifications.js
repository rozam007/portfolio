import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'HackerRank Certified JavaScript',
      year: '2024',
    },
    {
      title: 'Certificate Of Appreciation',
      year: '2024',
    },
  ];

  return (
    <div className="certifications">
      <h1 className="page-title">Certifications & Awards</h1>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <h2 className="certification-title">{cert.title}</h2>
            <p className="certification-year">{cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
