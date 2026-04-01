import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

// Importing assets
import loungeBg from '../assets/montagu_hero_new.jpg';

const Hero = () => {
  
  const labels = [
    { id: 'carta', text: 'Carta', pos: { top: '30%', left: '15%' } },
    { id: 'reservas', text: 'Reservas', pos: { top: '45%', left: '78%' } },
    { id: 'delivery', text: 'Delivery', pos: { top: '65%', left: '20%' } },
    { id: 'historia', text: 'Historia', pos: { top: '75%', left: '72%' } },
  ];

  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${loungeBg})` }}>
        <div className="overlay"></div>
      </div>
      
      <div className="product-container">

        {labels.map((label) => (
          <motion.a
            key={label.id}
            href={`#${label.id}`}
            className="interactive-label"
            style={label.pos}
            whileHover={{ scale: 1.1 }}
          >
            <span className="label-dot"></span>
            <span className="label-text">{label.text}</span>
          </motion.a>
        ))}
      </div>

      <div className="neon-sign neon-pink">Eat Like Royalty</div>
      <div className="neon-sign neon-cyan secondary">No Sandwich No Party</div>
      <div className="neon-sign neon-pink-crown-glow"></div>
      <div className="neon-sign neon-blue">Rebel Taste</div>

      <div className="hero-content">
        <motion.h1 
          className="gold-text"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ backgroundSize: '200% auto' }}
        >
          MONTAGU
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
