import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="#about">Acerca de Nosotros</a>
        <a href="#terms">Términos y Condiciones</a>
        <a href="#privacy">Política de Privacidad</a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="social-media">
        <a href="https://www.instagram.com">Instagram</a>
        <a href="https://www.facebook.com">Facebook</a>
      </div>
      <p>&copy; 2024 AuraFlame. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;