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

const burgerItems = [
  { name: 'Emy',      graffiti: graffitiEmy,      food: '/food/emy.png',      desc: 'Vaca de raza rústica · gouda · cebolla caramelizada · salsa Emy', itemClass: 'item-graffiti--emy' },
  { name: 'Fillet',   graffiti: graffitiFillet,   food: '/food/fillet.png',   desc: 'Vaca de raza rústica · gouda · PX · patata paja · parmentier trufado', itemClass: 'item-graffiti--fillet' },
  { name: 'Original', graffiti: graffitiOriginal, food: '/food/original.png', desc: 'Vaca de raza rústica · doble gouda · cebolla fresca · bacon · salsa Blecker', itemClass: 'item-graffiti--original' },
  { name: 'Pulled',   graffiti: graffitiPulled,   food: '/food/pulled.png',   desc: 'Vaca de raza rústica · pulled pork · gouda · cebolla pochada · cheddar ahumado', itemClass: 'item-graffiti--pulled' },
];

const meltItems = [
  { name: 'Coquelet', graffiti: graffitiCoquelet, food: '/food/coquelet.png', desc: 'Pollo campero · jamón cocido · gouda · parmentier trufado · pan tostado', itemClass: 'item-graffiti--coquelet' },
  { name: 'Luther',   graffiti: graffitiLuther,   food: '/food/luther.png',   desc: 'Donut glaseado · doble smash · gouda · bacon · salsa burger', itemClass: 'item-graffiti--luther' },
  { name: 'Pastrami', graffiti: graffitiPastrami, food: '/food/pastrami.png', desc: 'Pastrami de vaca · gouda · pepinillos · mostaza suave · pan tostado', itemClass: 'item-graffiti--pastrami' },
  { name: 'As',       graffiti: graffitiAs,       food: '/food/as.png',       desc: 'Ternera · tomate · aguacate · mayonesa · pan brioche tostado', itemClass: 'item-graffiti--as' },
  { name: 'Philly',   graffiti: graffitiPhilly,   food: '/food/philly.png',   desc: 'Ternera · cebolla · queso fundido · pan brioche tostado', itemClass: 'item-graffiti--philly' },
];

// Combine into rows for the alternating overlap effect
const maxRows = Math.max(burgerItems.length, meltItems.length);
const menuRows = Array.from({ length: maxRows }, (_, i) => ({
  burger: burgerItems[i] || null,
  melt: meltItems[i] || null
}));

const Menu = () => {
  return (
    <section id="carta" className="menu-section">
      <div className="section-header">
        <h2 className="neon-text-pink">La Carta</h2>
        <p className="subtitle">La rebelión sofisticada.</p>
      </div>

      <div className="menu-mirror">
        <div className="menu-categories-header">
          <h3 className="category-title">BURGERS</h3>
          <h3 className="category-title">MELTS</h3>
        </div>

        {menuRows.map((row, index) => (
          <div key={index} className="menu-row">
            {/* BURGER ITEM */}
            <div className={`menu-item-container burger-side ${!row.burger ? 'empty' : ''}`} data-category="BURGERS">
              {row.burger && (
                <div className="menu-item-classic">
                  <div className="item-text">
                    <img 
                      src={row.burger.graffiti} 
                      alt={row.burger.name} 
                      className={`item-graffiti ${row.burger.itemClass || ''}`} 
                    />
                    <p className="item-desc">{row.burger.desc}</p>
                  </div>
                  <div className="item-food-wrap">
                    <img src={row.burger.food} alt={`Foto ${row.burger.name}`} className="item-food-img" />
                  </div>
                </div>
              )}
            </div>

            {/* MELT ITEM */}
            <div className={`menu-item-container melt-side ${!row.melt ? 'empty' : ''}`} data-category="MELTS">
              {row.melt && (
                <div className="menu-item-classic menu-item-classic--right">
                  <div className="item-food-wrap">
                    <img src={row.melt.food} alt={`Foto ${row.melt.name}`} className="item-food-img" />
                  </div>
                  <div className="item-text item-text--right">
                    <img 
                      src={row.melt.graffiti} 
                      alt={row.melt.name} 
                      className={`item-graffiti item-graffiti--right ${row.melt.itemClass || ''}`} 
                    />
                    <p className="item-desc">{row.melt.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
