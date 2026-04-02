import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

// Importing assets
import loungeBg from '../assets/montagu_hero_clean.png';
import graffitiCarta from '../assets/Carta.png';
import graffitiReservas from '../assets/Reservas.png';
import graffitiDelivery from '../assets/Delivery.png';
import graffitiHistoria from '../assets/Historia.png';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const graffitiButtons = [
    { id: 'carta', img: graffitiCarta, side: 'left', top: 'calc(22% - 120px)', href: '#carta', glow: 'var(--accent-cyan)', rotate: -8 },
    { id: 'historia', img: graffitiHistoria, side: 'left', top: '53%', href: '#historia', glow: 'var(--accent-pink)', rotate: 5 },
    { id: 'reservas', img: graffitiReservas, side: 'right', top: 'calc(22% - 120px)', href: '#reservas', glow: 'var(--accent-pink)', rotate: 8 },
    { id: 'delivery', img: graffitiDelivery, side: 'right', top: '53%', href: '#delivery', glow: 'var(--accent-yellow)', rotate: -5 },
  ];

  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${loungeBg})` }}>
        <div className="overlay"></div>
      </div>

      <AnimatePresence>
        {!scrolled && (
          <div className="graffiti-nav-container">
            {graffitiButtons.map((btn, index) => (
              <motion.a
                key={btn.id}
                href={btn.href}
                className={`graffiti-link ${btn.side}`}
                style={{ 
                  top: btn.top, 
                  [btn.side]: '10%',
                  '--glow-color': btn.glow 
                }}
                initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)', rotate: btn.rotate }}
                animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)', rotate: btn.rotate }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                whileHover={{ 
                  filter: `drop-shadow(0 0 20px ${btn.glow}) brightness(1.2)` 
                }}
                transition={{ duration: 0.6, ease: "linear", delay: index * 0.2 }}
              >
                <img src={btn.img} alt={btn.id} className="graffiti-img" />
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
