import React from 'react';

const Velas = [
  { id: 1, name: "Vela Lavanda", price: 15, image: "/path/to/product1.jpg" },
  { id: 2, name: "Vela Vainilla", price: 18, image: "/path/to/product2.jpg" },
  { id: 3, name: "Vela Canela", price: 20, image: "/path/to/product3.jpg" },
];

function Productos() {
  return (
    <section className="featured-products">
      <h2>Productos Destacados</h2>
      <div className="product-grid">
        {Velas.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Comprar Ahora</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productos;