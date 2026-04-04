import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

// Importing assets
import loungeBg from '../assets/montagu_hero_clean.png';
import graffitiCarta from '../assets/Carta.png';
import graffitiReservas from '../assets/Reservas.png';
import graffitiDelivery from '../assets/Delivery.png';
import graffitiHistoria from '../assets/Historia.png';

// Carousel dish imports
import dishPhilly from '../assets/Philly hero.png';
import dishFillet from '../assets/Fillet hero.png';
import dishAs from '../assets/As hero.png';
import dishPastrami from '../assets/pastrami-removebg-preview.png';

const Hero = ({ onDeliveryOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [currentDish, setCurrentDish] = useState(0);
  
  const dishes = [
    { img: dishFillet, name: 'Fillet', style: { mixBlendMode: 'multiply' } },
    { img: dishAs, name: 'As', style: { mixBlendMode: 'multiply' } },
    { img: dishPastrami, name: 'Pastrami', style: { mixBlendMode: 'multiply' } },
    { img: dishPhilly, name: 'Philly', style: { clipPath: 'inset(1.5px)' } }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dish rotation timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDish((prev) => (prev + 1) % dishes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const graffitiButtons = [
    { id: 'carta', img: graffitiCarta, side: 'left', top: 'calc(22% - 120px)', href: '#carta', glow: 'var(--accent-cyan)', rotate: -8 },
    { id: 'historia', img: graffitiHistoria, side: 'left', top: '53%', href: '#historia', glow: 'var(--accent-pink)', rotate: 5 },
    { id: 'reservas', img: graffitiReservas, side: 'right', top: 'calc(22% - 120px)', href: '#reservas', glow: 'var(--accent-pink)', rotate: 8 },
    { id: 'delivery', img: graffitiDelivery, side: 'right', top: '53%', href: null, onClick: onDeliveryOpen, glow: 'var(--accent-yellow)', rotate: -5 },
  ];

  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${loungeBg})` }}>
        <div className="overlay"></div>
      </div>

      <AnimatePresence>
        {!scrolled && (
          <div className="graffiti-nav-container">
            {/* Center Carousel */}
            <div className="hero-carousel-container">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentDish}
                  className="hero-dish-wrapper"
                  initial={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.9, filter: 'blur(5px)' }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                  <img 
                    src={dishes[currentDish].img} 
                    alt={dishes[currentDish].name} 
                    className="hero-dish-img"
                    style={dishes[currentDish].style}
                  />
                  <div className="dish-glow"></div>
                </motion.div>
              </AnimatePresence>
            </div>

            {graffitiButtons.map((btn, index) => (
              <motion.a
                key={btn.id}
                href={btn.href || undefined}
                onClick={btn.onClick ? (e) => { e.preventDefault(); btn.onClick(); } : undefined}
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
