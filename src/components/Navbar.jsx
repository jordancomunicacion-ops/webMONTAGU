import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo gold-text">MONTAGU</a>
        
        <div className="nav-links">
          <a href="#carta">CARTA</a>
          <a href="#reservas">RESERVAS</a>
          <a href="#delivery">DELIVERY</a>
          <a href="#historia">HISTORIA</a>
        </div>
        
        <div className="nav-actions">
          <button className="book-btn">BOOK NOW</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
