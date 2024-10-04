import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">AuraFlame</div>
      <nav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#customize">Personalizar</a></li>
          <li><a href="#shop">Tienda</a></li>
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <div className="cart">
        <a href="#cart">🛒 Carrito</a>
      </div>
    </header>
  );
}

export default Header;