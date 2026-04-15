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
import dishPastrami from '../assets/Pastrami hero.png';

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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const graffitiButtons = [
    { id: 'carta', img: graffitiCarta, side: 'left', href: '#carta', glow: 'var(--accent-cyan)', rotate: -8 },
    { id: 'historia', img: graffitiHistoria, side: 'left', href: '#historia', glow: 'var(--accent-pink)', rotate: 5 },
    { id: 'reservas', img: graffitiReservas, side: 'right', href: '#reservas', glow: 'var(--accent-pink)', rotate: 8 },
    { id: 'delivery', img: graffitiDelivery, side: 'right', href: null, onClick: onDeliveryOpen, glow: 'var(--accent-yellow)', rotate: -5 },
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
                    className="hero-dish-wrapper-single"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    style={{ position: 'relative', width: '100%', height: '100%' }}
                  >
                    {/* SVG Mask Definition */}
                    <svg width="0" height="0" style={{ position: 'absolute' }}>
                      <defs>
                        <mask id={`brush-mask-${currentDish}`} maskContentUnits="objectBoundingBox">
                          {[...Array(8)].map((_, i) => {
                            const isEven = i % 2 === 0;
                            const delay = i * 0.35;
                            const xStart = (i * 0.125);
                            const mWidth = 0.15; // Overlap

                            // A path that looks like a brush stroke (0 to 1 unit scale)
                            const brushPath = isEven ? 
                              `M 0,0 L 1,0 L 1,1 L 0.9,0.9 L 0.8,1.1 L 0.7,0.95 L 0.6,1.2 L 0.5,0.9 L 0.4,1.15 L 0.3,0.9 L 0.2,1.05 L 0.1,0.85 L 0,1 Z` :
                              `M 0,1 L 1,1 L 1,0 L 0.9,0.1 L 0.8,-0.1 L 0.7,0.05 L 0.6,-0.2 L 0.5,0.1 L 0.4,-0.15 L 0.3,0.1 L 0.2,-0.05 L 0.1,0.15 L 0,0 Z`;

                            return (
                              <motion.path
                                key={`mask-path-${i}`}
                                d={brushPath}
                                fill="white"
                                initial={{ 
                                  scaleY: 0, 
                                  originY: isEven ? 0 : 1,
                                  opacity: 0 
                                }}
                                animate={{ 
                                  scaleY: 1, 
                                  opacity: 1 
                                }}
                                transition={{ 
                                  duration: 0.9, 
                                  delay, 
                                  ease: "easeOut" 
                                }}
                                transform={`translate(${xStart} 0) scale(${mWidth} 1)`}
                              />
                            );
                          })}
                        </mask>
                      </defs>
                    </svg>

                    <motion.img 
                      src={dishes[currentDish].img} 
                      alt={dishes[currentDish].name} 
                      className="hero-dish-img-single"
                      style={{ 
                        ...dishes[currentDish].style,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        maskImage: `url(#brush-mask-${currentDish})`,
                        WebkitMaskImage: `url(#brush-mask-${currentDish})`,
                        filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.95))'
                      }}
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
                className={`graffiti-link ${btn.side} ${btn.id}`}
                style={{ 
                  [btn.side]: '10%',
                  '--glow-color': btn.glow 
                }}
                initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)', rotate: btn.rotate }}
                animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)', rotate: btn.rotate }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                whileHover={{ 
                  filter: `drop-shadow(0 0 25px ${btn.glow}) brightness(1.3)`,
                  transition: { duration: 0 } 
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
