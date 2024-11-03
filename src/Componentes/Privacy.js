import React from "react";

function Privacy({ darkMode }) {
  return (
    <div className={`content-section ${darkMode ? 'dark' : 'light'}`}>
      <article>
        <h1>Política de Privacidad</h1>
        <span>Última actualización: 03/11/2024</span>
        <p>
          Esta Política de Privacidad describe cómo AuraFlame recopila,
          utiliza y protege la información personal que recopilamos a través de
          nuestro sitio web. Al utilizar el sitio, aceptas los
          términos de esta Política de Privacidad.
        </p>
      </article>
      <article>
        <h3>1. Información que Recopilamos</h3>
        <p>
          1.1. Información Personal: Podemos recopilar información personal,
          como tu nombre, dirección de correo electrónico y fecha de nacimiento,
          cuando te suscribes a nuestros servicios, participas en encuestas o
          envías consultas.
        </p>
        <p>
          1.2. Información Automática: Recopilamos información no personal, como
          la dirección IP, tipo de navegador, dispositivo, sistema operativo y
          páginas visitadas, mediante el uso de cookies y tecnologías similares.
        </p>
      </article>
      <article>
        <h3>2. Uso de la Información</h3>
        <p>
          2.1. Utilizamos la información personal para proporcionarte nuestros
          servicios y contenido relacionado con la astrología. También podemos
          enviar correos electrónicos de actualización y boletines informativos
          si te suscribes.
        </p>
        <p>
          2.2. La información no personal se utiliza para mejorar la experiencia
          del usuario en el Sitio y comprender cómo los visitantes utilizan
          nuestros servicios.
        </p>
      </article>
      <article>
        <h3>3. Protección de la Información</h3>
        <p>
          3.1. Tomamos medidas razonables para proteger tu información personal
          de accesos no autorizados, divulgación, alteración o destrucción.
        </p>
      </article>
      <article>
        <h3>4. Divulgación de la Información</h3>
        <p>
          4.1. No compartiremos tu información personal con terceros, a menos
          que obtengamos tu consentimiento expreso o estemos obligados a hacerlo
          por ley.
        </p>
      </article>
      <article>
        <h3>5. Cookies y Tecnologías Similares</h3>
        <p>
          5.1. Utilizamos cookies y tecnologías similares para mejorar la
          funcionalidad del Sitio y proporcionar una experiencia personalizada.
          Puedes gestionar las preferencias de las cookies a través de la
          configuración de tu navegador.
        </p>
      </article>
      <article>
        <h3>6. Enlaces a Terceros</h3>
        <p>
          6.1. Nuestro Sitio puede contener enlaces a sitios web de terceros. No
          somos responsables de las prácticas de privacidad de esos sitios. Te
          recomendamos revisar sus políticas de privacidad.
        </p>
      </article>
      <article>
        <h3>7. Cambios en la Política de Privacidad</h3>
        <p>
          7.1. Nos reservamos el derecho de modificar esta Política de
          Privacidad en cualquier momento. Cualquier cambio se hará efectivo
          después de su publicación en el Sitio. Te recomendamos revisarla
          regularmente.
        </p>
      </article>
      <article>
        <h3>8. Consentimiento</h3>
        <p>
          8.1. Al utilizar el Sitio, aceptas los términos de esta Política de
          Privacidad.
        </p>
      </article>
      <article>
        <h3>9. Contacto</h3>
        <p>
          9.1. Si tienes alguna pregunta o inquietud sobre esta Política de
          Privacidad, contáctanos en AuraFlameVelas@gmail.com
        </p>
      </article>
    </div>
  );
}

export default Privacy;
