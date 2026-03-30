import React from 'react';
import './Delivery.css';

const Delivery = () => {
  const platforms = [
    { name: 'GLOVO', color: '#ffc043' },
    { name: 'UBEREATS', color: '#06c167' },
    { name: 'JUSTEAT', color: '#f3113c' }
  ];

  return (
    <section id="delivery" className="delivery-section">
      <div className="delivery-container">
        <h2 className="neon-text-pink">Delivery</h2>
        <p className="gold-text">THE REBELLION AT YOUR DOORSTEP.</p>
        
        <div className="platform-grid">
          {platforms.map((p) => (
            <a key={p.name} href="#" className="platform-card" style={{ '--hover-color': p.color }}>
              <span className="platform-name">{p.name}</span>
              <div className="glow-bar"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Delivery;
