import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      {/* Logotipo de la vela */}
      <Link to="/">
        <img
          src="/img/logo-no-texto.png"
          alt="AuraFlame Logo"
          className="logo-header"
        />
      </Link>
      <div className="logo-text">AURAFLAME</div>
      {/* Icono de menú estilo hamburguesa */}
      <div
        className={`menu-icon ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Menú de navegación */}
      {/* <nav className="nav-menu">
          <ul>
            <li><a href="#customize">Personalizar</a></li>
            <li><a href="#shop">Tienda</a></li>
            <li><a href="#faq">Sobre Nosotros</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav> */}

      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/">Personalizar</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Contacto</Link>
          </li>
          <li>
            {/* Modo nocturno */}
            <button
              id="darkMode"
              onClick={toggleDarkMode}
              className={darkMode ? "dark" : ""}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
