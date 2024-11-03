import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ darkMode }) {
  return (
    <footer>
      <div className={`footer-links ${darkMode ? "dark" : "light"}`}>
      <Link to="/about">Acerca de Nosotros</Link>
        <Link to="/terms">Términos y Condiciones</Link>
        <Link to="/privacy">Política de Privacidad</Link>
      </div>
      <div className="social-media">
        <img src='/img/email.svg' alt='email'/>
        <a href="https://www.instagram.com"><img src='/img/instagram.svg' alt='instagram'/></a>
        <a href="https://www.facebook.com"><img src='/img/facebook.svg' alt='facebook'/></a>
      </div>
      <div className={`copy ${darkMode ? "dark" : "light"}`}>
      <p>&copy; 2024 AuraFlame. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;