import React from 'react';
import './Menu.css';

const menuItems = [
  {
    category: 'BURGERS',
    items: [
      { name: 'THE ARISTOCRAT', price: '16€', desc: 'Aged beef, truffle cream, gold leaf finish.' },
      { name: 'REBEL SMASH', price: '14€', desc: 'Double patty, neon sauce, jalapeño kick.' },
    ]
  },
  {
    category: 'MELTS',
    items: [
      { name: 'PULLED ROYALTY', price: '15€', desc: 'Slow-cooked pork, cheddar melt, brioche toast.' },
    ]
  }
];

const Menu = () => {
  return (
    <section id="carta" className="menu-section">
      <div className="section-header">
        <h2 className="neon-text-pink">La Carta</h2>
        <p className="subtitle">Elegance meets the Street.</p>
      </div>
      
      <div className="menu-grid">
        {menuItems.map((cat) => (
          <div key={cat.category} className="menu-category">
            <h3 className="category-title">{cat.category}</h3>
            <div className="items-list-classic">
              {cat.items.map((item) => (
                <div key={item.name} className="menu-item-classic">
                  <div className="item-main-row">
                    <h4 className="item-name">{item.name}</h4>
                    <div className="item-line"></div>
                    <span className="item-price">{item.price}</span>
                  </div>
                  <p className="item-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
