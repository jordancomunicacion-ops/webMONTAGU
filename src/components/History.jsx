import React from 'react';
import './History.css';

// Import media
import noblePortrait from '../assets/montagu_noble_pink_wig_1774863419649.png';
import padreadaImg from '../assets/uploaded_media_4_1774862966758.jpg';

const History = () => {
  return (
    <section id="historia" className="history-section">
      <div className="history-container">
        <div className="history-content">
          <h2 className="gold-text">Nuestra Historia</h2>
          <div className="narrative">
            <p className="highlight">TRADITION MEETS REBELLION.</p>
            <p>
              In the heart of London, an aristocrat once traded his silver spoon for a neon spray can. 
            </p>
            <p>
              MONTAGU was born from the clash between 18th-century English elegance and the raw energy of urban street culture. We don't just serve food; we serve a manifesto of flavor. 
            </p>
            <p>
              Join the royalty of the streets. Eat like a lord, live like a rebel.
            </p>
          </div>
          <div className="history-badges">
            <div className="badge neon-text-pink">Est. 2024</div>
            <div className="badge neon-text-blue">Rebel Heart</div>
          </div>
        </div>
        
        <div className="history-visuals">
          <div className="portrait-stack">
            <img src={noblePortrait} alt="The Lord" className="portrait main-p" />
            <img src={padreadaImg} alt="The Manifesto" className="portrait side-p" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
