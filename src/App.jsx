import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Delivery from './components/Delivery';
import History from './components/History';
import './index.css';

const revealProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" }
};

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      
      <motion.div {...revealProps}>
        <Menu />
      </motion.div>
      
      <motion.div {...revealProps}>
        <Reservations />
      </motion.div>
      
      <motion.div {...revealProps}>
        <Delivery />
      </motion.div>
      
      <motion.div {...revealProps}>
        <History />
      </motion.div>
      
      <footer style={{ padding: '80px 5% 50px', textAlign: 'center', background: '#000', borderTop: '1px solid rgba(27, 77, 62, 0.3)' }}>
        <h2 className="gold-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>MONTAGU</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>ROYALTY OF THE STREETS. SOPHISTICATED REBELLION.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', fontSize: '0.9rem', color: 'var(--primary-gold)' }}>
          <span>INSTAGRAM</span>
          <span>TIKTOK</span>
          <span>FACEBOOK</span>
        </div>
        <p style={{ marginTop: '50px', fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)' }}>© 2024 MONTAGU. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default App;
