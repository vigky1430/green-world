import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer surface-lowest">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Leaf className="logo-icon" size={32} />
            <span className="headline-md">Green World</span>
          </Link>
          <p className="body-md footer-desc">
            Architectural arboretum and precision landscaping. We treat landscaping as structural art.
          </p>
          <div className="social-links">
            <a href="#" className="label-md">Insta</a>
            <a href="#" className="label-md">Twit</a>
            <a href="#" className="label-md">Link</a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4 className="label-md footer-title">Company</h4>
          <Link to="/about" className="body-md footer-link">About Us</Link>
          <Link to="/projects" className="body-md footer-link">Our Projects</Link>
          <Link to="/testimonials" className="body-md footer-link">Testimonials</Link>
          <Link to="/contact" className="body-md footer-link">Contact Us</Link>
        </div>

        <div className="footer-links-group">
          <h4 className="label-md footer-title">Services</h4>
          <Link to="/services" className="body-md footer-link">Hardscaping</Link>
          <Link to="/services" className="body-md footer-link">Botanical Design</Link>
          <Link to="/services" className="body-md footer-link">Lighting Architecture</Link>
          <Link to="/services" className="body-md footer-link">Irrigation Systems</Link>
        </div>

        <div className="footer-links-group">
          <h4 className="label-md footer-title">Contact</h4>
          <p className="body-md footer-text">123 Arboretum Way<br/>Portland, OR 97205</p>
          <p className="body-md footer-text">hello@greenworld.design</p>
          <p className="body-md footer-text">(555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom container">
        <p className="body-md">&copy; {new Date().getFullYear()} Green World Landscaping. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
