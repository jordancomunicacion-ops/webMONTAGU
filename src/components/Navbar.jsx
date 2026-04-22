import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';
import './Navbar.css';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.3-5.23 1.97-7.1 1.72-1.92 4.41-2.92 6.94-2.54v4.06c-1.29-.27-2.67-.18-3.86.41-1.19.59-1.99 1.7-2.28 2.99-.25 1.15-.09 2.4.52 3.42.61 1.05 1.69 1.79 2.89 1.99 1.2.21 2.47-.03 3.39-.75 2.05-1.56 2.06-4.57 2.06-6.93.01-4.22-.01-8.44.02-12.66z"/>
  </svg>
);

// Importing assets
import graffitiCarta from '../assets/Carta.png';
import graffitiReservas from '../assets/Reservas.png';
import graffitiDelivery from '../assets/Delivery.png';
import graffitiHistoria from '../assets/Historia.png';
// Logo served from /public so the CRM can always access it at /logo-montagu-verde.jpg
const logoMontagu = '/logo-montagu-verde.jpg';

const Navbar = ({ onDeliveryOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'carta', img: graffitiCarta, href: '#carta', glow: 'var(--accent-cyan)' },
    { id: 'reservas', img: graffitiReservas, href: '#reservas', glow: 'var(--accent-pink)' },
    { id: 'delivery', img: graffitiDelivery, href: null, onClick: onDeliveryOpen, glow: 'var(--accent-yellow)' },
    { id: 'historia', img: graffitiHistoria, href: '#historia', glow: 'var(--accent-pink)' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <img src={logoMontagu} alt="Montagu Logo" className="nav-logo-img" />
        </a>
        
        <AnimatePresence>
          {scrolled && (
            <motion.div 
              className="nav-links"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={link.href || undefined}
                  onClick={link.onClick ? (e) => { e.preventDefault(); link.onClick(); } : undefined}
                  className="nav-graffiti-link"
                  style={{ '--glow-color': link.glow }}
                >
                  <img 
                    src={link.img} 
                    alt={link.id} 
                    className="nav-graffiti-img" 
                  />
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="nav-actions">
          <button className="book-btn" onClick={() => setIsContactPopupOpen(true)}>CONTACTO</button>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="nav-social-btn">
            <Facebook size={16} />
          </a>
          <a href="https://www.instagram.com/montagu_burgers/" target="_blank" rel="noopener noreferrer" className="nav-social-btn">
            <Instagram size={16} />
          </a>
          <a href="https://www.tiktok.com/@montagu_sandwich" target="_blank" rel="noopener noreferrer" className="nav-social-btn">
            <TikTokIcon />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {isContactPopupOpen && (
          <motion.div 
            className="contact-popup-overlay" 
            onClick={() => setIsContactPopupOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="contact-popup-content" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button className="close-popup" onClick={() => setIsContactPopupOpen(false)}>×</button>
              <h2>Déjanos tu mensaje</h2>
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Mensaje enviado!'); setIsContactPopupOpen(false); }}>
                <input type="text" placeholder="Nombre" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Tu mensaje" rows="4" required></textarea>
                <button type="submit" className="submit-btn" style={{ '--glow-color': 'var(--primary-gold)' }}>Enviar</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
