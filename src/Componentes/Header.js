import React from 'react';

function Header() {
  return (
    <header>
        {/* Logotipo de la vela */}
        <img src="/img/logo-no-texto.png" alt="AuraFlame Logo" className="logo-header" />
        <div className="logo-text">AURAFLAME</div>

      {/* Icono de menú estilo hamburguesa */}
      <div className="menu-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Menú de navegación */}
      <nav className="nav-menu">
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#customize">Personalizar</a></li>
            <li><a href="#shop">Tienda</a></li>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;