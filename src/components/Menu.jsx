import React from 'react';
import './Menu.css';

import graffitiEmy      from '../assets/Emy.png';
import graffitiFillet   from '../assets/Fillet.png';
import graffitiOriginal from '../assets/Original.png';
import graffitiPulled   from '../assets/Pulled.png';
import graffitiCoquelet from '../assets/Coquelet.png';
import graffitiLuther   from '../assets/Luther.png';
import graffitiPastrami from '../assets/Pastrami.png';
import graffitiAs       from '../assets/As.png';
import graffitiPhilly   from '../assets/Philly.png';

const menuItems = [
  {
    category: 'BURGERS',
    items: [
      { name: 'Emy',      graffiti: graffitiEmy,      food: '/food/emy.png',      desc: 'Vaca de raza rústica · gouda · cebolla caramelizada · salsa Emy' },
      { name: 'Fillet',   graffiti: graffitiFillet,   food: '/food/fillet.png',   desc: 'Vaca de raza rústica · gouda · PX · patata paja · parmentier trufado' },
      { name: 'Original', graffiti: graffitiOriginal, food: '/food/original.png', desc: 'Vaca de raza rústica · doble gouda · cebolla fresca · bacon · salsa Blecker' },
      { name: 'Pulled',   graffiti: graffitiPulled,   food: null,                 desc: 'Vaca de raza rústica · pulled pork · gouda · cebolla pochada · cheddar ahumado' },
    ]
  },
  {
    category: 'MELTS',
    items: [
      { name: 'Coquelet', graffiti: graffitiCoquelet, food: null, desc: 'Pollo campero · jamón cocido · gouda · parmentier trufado · pan tostado' },
      { name: 'Luther',   graffiti: graffitiLuther,   food: null, desc: 'Donut glaseado · doble smash · gouda · bacon · salsa burger' },
      { name: 'Pastrami', graffiti: graffitiPastrami, food: null, desc: 'Pastrami de vaca · gouda · pepinillos · mostaza suave · pan tostado' },
      { name: 'As',       graffiti: graffitiAs,       food: null, desc: 'Ternera · tomate · aguacate · mayonesa · pan brioche tostado' },
      { name: 'Philly',   graffiti: graffitiPhilly,   food: null, desc: 'Ternera · cebolla · queso fundido · pan brioche tostado' },
    ]
  }
];

const burgers = menuItems[0];
const melts    = menuItems[1];

const Menu = () => {
  return (
    <section id="carta" className="menu-section">
      <div className="section-header">
        <h2 className="neon-text-pink">La Carta</h2>
        <p className="subtitle">La rebelión sofisticada.</p>
      </div>

      <div className="menu-mirror">

        {/* ── BURGERS (izquierda) ── */}
        <div className="menu-col menu-col--left">
          <h3 className="category-title">{burgers.category}</h3>
          <div className="items-list-classic">
            {burgers.items.map((item) => (
              <div key={item.name} className="menu-item-classic">
                {/* texto */}
                <div className="item-text">
                  <img src={item.graffiti} alt={item.name} className="item-graffiti" />
                  <p className="item-desc">{item.desc}</p>
                </div>
                {/* foto si existe */}
                {item.food && (
                  <div className="item-food-wrap">
                    <img src={item.food} alt={`Foto ${item.name}`} className="item-food-img" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── MELTS (derecha) ── */}
        <div className="menu-col menu-col--right">
          <h3 className="category-title">{melts.category}</h3>
          <div className="items-list-classic">
            {melts.items.map((item) => (
              <div key={item.name} className="menu-item-classic menu-item-classic--right">
                {/* foto si existe */}
                {item.food && (
                  <div className="item-food-wrap">
                    <img src={item.food} alt={`Foto ${item.name}`} className="item-food-img" />
                  </div>
                )}
                {/* texto */}
                <div className="item-text item-text--right">
                  <img src={item.graffiti} alt={item.name} className="item-graffiti item-graffiti--right" />
                  <p className="item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Menu;
