import React, { useState } from 'react';
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
  const [deliveryOpen, setDeliveryOpen] = useState(false);

  return (
    <div className="app-container">
      <Navbar onDeliveryOpen={() => setDeliveryOpen(true)} />
      <Hero onDeliveryOpen={() => setDeliveryOpen(true)} />
      
      <motion.div {...revealProps}>
        <Menu />
      </motion.div>
      
      <motion.div {...revealProps}>
        <Reservations />
      </motion.div>

      <Delivery isOpen={deliveryOpen} setIsOpen={setDeliveryOpen} />
      
      <motion.div {...revealProps}>
        <History />
      </motion.div>

    </div>
  );
}

export default App;
