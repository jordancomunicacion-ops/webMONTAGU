import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

// Importing assets
import loungeBg from '../assets/montagu_hero_new.jpg';
import burgerImg from '../assets/uploaded_media_3_1774862966758.jpg';
import meltImg from '../assets/uploaded_media_0_1774862966758.jpg';
import hotdogImg from '../assets/uploaded_media_1_1774862966758.jpg'; // Placeholder for hotdog if not specific, but I'll use another burger variant

const products = [
  { id: 'burger', img: burgerImg, label: 'Classic Burger' },
  { id: 'melt', img: meltImg, label: 'Patty Melt' },
  { id: 'hotdog', img: hotdogImg, label: 'Rebel Dog' },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  
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
        <AnimatePresence mode="wait">
          <motion.div 
            key={products[index].id}
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="product-image-wrapper"
          >
            <img 
              src={products[index].img} 
              alt={products[index].label} 
              className="product-image"
            />
            <div className="product-glow"></div>
          </motion.div>
        </AnimatePresence>

        <svg className="connector-lines" width="100%" height="100%">
          <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} x1="40%" y1="40%" x2="20%" y2="35%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
          <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} x1="60%" y1="50%" x2="78%" y2="48%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
          <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} x1="45%" y1="65%" x2="25%" y2="68%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
          <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} x1="55%" y1="75%" x2="72%" y2="78%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
        </svg>

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
