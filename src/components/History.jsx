import React from 'react';
import './History.css';

import sloganGraffiti from '../assets/Slogan tradition.png';
import noblePortrait from '../assets/montagu_noble_pink_wig_no_heart.png';

const History = () => {
  return (
    <section id="historia" className="history-section">
      <div className="history-container">
        <div className="history-content">
          <h2>Nuestra Historia</h2>
          <div className="slogan-container">
            <img src={sloganGraffiti} alt="TRADITION MEETS REBELLION" className="slogan-graffiti" />
          </div>
          <div className="narrative">
            <p className="narrative-script">
              Montagu nace como el alter ego de SOTO del PRIOR. Si Soto del Prior representa la esencia rural, Montagu es su alma puramente urbanita.
            </p>
            <p className="narrative-script last-para">
              Desde la excelencia absoluta del producto, buscamos reinterpretar comidas clásicas y recetas canónicas, presentándolas entre pan y pan como un acto de rebeldía e innovación constante, pero siempre respetando el alma de los grandes platos.
            </p>
          </div>
        </div>
        <div className="history-visuals">
          <div className="portrait-container">
            <img src={noblePortrait} alt="The Lord" className="portrait-frame" />
            <span className="signature">Montagu</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
