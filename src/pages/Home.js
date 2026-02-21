import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="profile-section">
        <div className="profile-header">
          <h1 className="name">Muhammad Rozam</h1>
          <p className="title">MERN Stack Developer</p>
          <p className="email">rozam0040@gmail.com</p>
        </div>

        <div className="profile-content">
          <h2 className="section-title">Profile</h2>
          <p className="profile-text">
            I am a dedicated MERN stack developer with 3 years of experience creating scalable web applications 
            and deploying them to production environments. My technical expertise includes React.js, Next.js, 
            Node.js, Express.js, and MongoDB. I have hands-on experience deploying Next.js and Nest.js applications 
            to Ubuntu servers and automating workflows with CI/CD pipelines for streamlined and efficient deployments.
          </p>
          <p className="profile-text">
            My soft skills include problem-solving, effective communication, and teamwork, ensuring smooth 
            collaboration and high-quality outcomes. For example, I successfully automated a project's deployment 
            process, reducing manual intervention and improving efficiency. I bring adaptability and a 
            solution-oriented mindset, always focused on delivering user-centric results.
          </p>
          <p className="profile-text">
            Whether it's optimizing deployment workflows or enhancing application performance, I am committed to 
            exceeding client expectations. My career goals are to further enhance my backend and DevOps skills, 
            explore cloud-based solutions, and continue building impactful applications that solve real-world challenges.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
