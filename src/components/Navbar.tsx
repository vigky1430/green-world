import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import './Navbar.css';
import Button from './Button';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' }
  ];

  return (
    <header className="navbar botanical-glass">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <Leaf className="logo-icon" size={28} />
          <span className="title-md">Green World</span>
        </Link>
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link label-md ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="navbar-actions">
          <Link to="/contact">
            <Button variant="primary">Get a Quote</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
