import React from 'react';
import './Reservations.css';

const Reservations = () => {
  return (
    <section id="reservas" className="reservations-section">
      <div className="reservations-container">
        <div className="res-header">
          <h2 className="neon-text-blue">Reservas</h2>
          <p className="gold-text">BECOME ROYALTY.</p>
        </div>
        
        <form className="res-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="NOMBRE" required />
          </div>
          <div className="form-row">
            <input type="date" required />
            <input type="time" required />
          </div>
          <div className="form-group">
            <input type="number" placeholder="COMENSALES" min="1" max="10" required />
          </div>
          <button type="submit" className="res-button">SOLICITAR MESA</button>
        </form>
        
        <p className="res-note">Sujeto a disponibilidad. La etiqueta es 'Sophisticated Rebel'.</p>
      </div>
    </section>
  );
};

export default Reservations;
