import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

// Importing assets
import loungeBg from '../assets/montagu_hero_clean.png';

const Hero = () => {
  const graffitiTags = [
    { id: 'carta', text: 'CARTA', color: 'cyan', pos: { top: '18%', left: '10%' }, rotate: '-12deg' },
    { id: 'reservas', text: 'RESERVAS', color: 'pink', pos: { top: '22%', right: '12%' }, rotate: '15deg' },
    { id: 'delivery', text: 'DELIVERY', color: 'pink', pos: { bottom: '42%', left: '8%' }, rotate: '8deg' },
    { id: 'historia', text: 'HISTORIA', color: 'cyan', pos: { bottom: '48%', right: '15%' }, rotate: '-5deg' },
  ];

  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${loungeBg})` }}>
        <div className="overlay"></div>
      </div>
      
      <div className="graffiti-container">
        {graffitiTags.map((tag) => (
          <motion.a
            key={tag.id}
            href={`#${tag.id}`}
            className={`graffiti-button tag-${tag.color}`}
            style={{ ...tag.pos, transform: `rotate(${tag.rotate})` }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.15, textShadow: `0 0 20px var(--accent-${tag.color})` }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {tag.text}
            <div className="drip-effect"></div>
          </motion.a>
        ))}
      </div>

      <div className="hero-content">
        <motion.div 
          className="hero-logo-container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="gold-text masterpiece-logo">MONTAGU</h1>
          <p className="masterpiece-subtitle">EST. 2024 • THE ORIGINAL REBEL</p>
        </motion.div>
      </div>

      {/* Decorative Neon Signs */}
      <div className="neon-sign neon-pink-glow small">Eat Like Royalty</div>
      <div className="neon-sign neon-cyan-glow small right">No Sandwich No Party</div>
    </section>
  );
};

export default Hero;
