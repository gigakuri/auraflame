import React from 'react';

function About({ darkMode }) {
  return (
    <div className={`content-section ${darkMode ? 'dark' : 'light'}`}>
      <h1>Acerca de Nosotros</h1>
      <p>Somos AuraFlame, una marca dedicada a ofrecer las mejores velas para crear ambientes relajantes y acogedores. Nos apasiona la calidad y el bienestar.</p>
    </div>
  );
}

export default About;