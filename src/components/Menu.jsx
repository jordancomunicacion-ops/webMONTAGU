import React from 'react';
import './Menu.css';

// Import media
import burger1 from '../assets/uploaded_media_1_1774862966758.jpg';
import burger2 from '../assets/uploaded_media_2_1774862966758.jpg';
import burger3 from '../assets/uploaded_media_3_1774862966758.jpg';

const menuItems = [
  {
    category: 'BURGERS',
    items: [
      { name: 'THE ARISTOCRAT', price: '16€', desc: 'Aged beef, truffle cream, gold leaf finish.', img: burger1 },
      { name: 'REBEL SMASH', price: '14€', desc: 'Double patty, neon sauce, jalapeño kick.', img: burger3 },
    ]
  },
  {
    category: 'MELTS',
    items: [
      { name: 'PULLED ROYALTY', price: '15€', desc: 'Slow-cooked pork, cheddar melt, brioche toast.', img: burger2 },
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
            <h3 className="gold-text">{cat.category}</h3>
            <div className="items-list">
              {cat.items.map((item) => (
                <div key={item.name} className="menu-item">
                  <div className="item-img-wrapper">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="item-info">
                    <div className="item-title">
                      <h4>{item.name}</h4>
                      <span className="price">{item.price}</span>
                    </div>
                    <p>{item.desc}</p>
                  </div>
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
