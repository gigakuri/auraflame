import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Header({ darkMode, toggleDarkMode, isAuthenticated, username }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef}>
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
      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            {isAuthenticated ? (
              <Link
                to="/profile"
                style={{ color: "#5C4533" }}
                state={{ username: username }}
              >
                Mi cuenta
              </Link>
            ) : (
              <Link to="/login">Iniciar sesión</Link>
            )}
          </li>
          {isAuthenticated ? (
            <li>
              <Link to="/orders">Pedidos</Link>
            </li>
          ) : (
            ""
          )}
          <li>
            <Link to="/">Colecciones</Link>
          </li>
          <li>
            <Link to="/About">Contacto</Link>
          </li>
          <li style={{ justifyContent: "end", alignItems: "end" }}>
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
