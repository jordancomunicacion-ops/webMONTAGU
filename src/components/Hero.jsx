import React from 'react';
import './Hero.css';

// Importing assets
import loungeBg from '../assets/montagu_hero_clean.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${loungeBg})` }}>
        <div className="overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
