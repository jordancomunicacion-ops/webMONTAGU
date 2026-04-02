import React from 'react';
import './Delivery.css';
import glovoLogo from '../assets/glovo.png';
import uberEatsLogo from '../assets/uber eats.png';

const Delivery = ({ isOpen, setIsOpen }) => {
  const platforms = [
    {
      name: 'GLOVO',
      color: '#ffc043',
      url: 'https://glovoapp.com/es/es/pamplona/stores/montagu-pamplona',
      logo: glovoLogo,
    },
    {
      name: 'UBER EATS',
      color: '#06c167',
      url: 'https://ubereats.com',
      logo: uberEatsLogo,
    },
  ];

  return (
    <>
      {/* Modal overlay */}
      {isOpen && (
        <div
          className="delivery-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="delivery-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="delivery-close"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar"
            >
              ✕
            </button>

            <h3 className="delivery-title-text modal-title-text">DELIVERY</h3>

            <div className="modal-platform-grid">
              {platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-platform-card"
                  style={{ '--hover-color': p.color }}
                >
                  <img src={p.logo} alt={p.name} className="modal-platform-logo" />
                  <span className="modal-platform-name">{p.name}</span>
                  <div className="modal-glow-bar" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Delivery;
