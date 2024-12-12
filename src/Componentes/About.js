import React from "react";
import { Link } from "react-router-dom";

function About({ darkMode }) {
  return (
    <div className={`content-section ${darkMode ? "dark" : "light"}`}>
      <h1>Acerca de Nosotros</h1>
      <p>
        Bienvenidos a <strong>AuraFlame</strong>, expertos en la creación 
        de velas exclusivas que transforman cualquier espacio en un refugio de 
        paz y calidez. Cada una de nuestras velas está diseñada con cuidado, 
        utilizando materiales de alta calidad y fragancias cuidadosamente seleccionadas.
      </p>
      <p>
        Nos inspira la magia de la luz y el poder de los aromas para enriquecer 
        tu día a día. Ya sea para relajarte después de un largo día o para crear 
        momentos inolvidables, en AuraFlame encontrarás el complemento perfecto. 
        Si tiene cualquier duda, por favor, póngase en contacto con nosotros desde el correo
        de <a href="mailto:Support@auraflame.com" style={{color: "#849FA0"}}>Support@auraflame.com</a>
      </p>
      <h2 style={{marginTop:"3rem"}}>Nuestra misión</h2>
      <p>
        Crear experiencias sensoriales únicas que combinen diseño, calidad y sostenibilidad. 
        Nos comprometemos con el medio ambiente utilizando ingredientes naturales y 
        empaques eco-amigables.
      </p>
      <div className="about-link">
        <h3>Descubre más</h3>
        <p>
          Explora nuestras colecciones y encuentra la vela que se ajuste a tu estilo. 
          Desde fragancias frescas hasta notas cálidas y acogedoras, tenemos algo especial para todos.
        </p>
        <Link to="/" className="explore-button">
          Ver Colecciones
        </Link>
      </div>
    </div>
  );
}

export default About;