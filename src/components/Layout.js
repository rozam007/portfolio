import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <h1 className="logo">Muhammad Rozam</h1>
          <nav className="nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path || (item.path === '/blog' && location.pathname.startsWith('/blog')) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Muhammad Rozam. All rights reserved.</p>
          <p className="email">rozam0040@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
