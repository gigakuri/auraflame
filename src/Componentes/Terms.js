import React from "react";

function Terms({ darkMode }) {
  return (
    <div className={`content-section ${darkMode ? 'dark' : 'light'}`}>
      <article>
        <h3>Términos y Condiciones</h3>
        <span>Última actualización: 03/11/2024</span>
        <p>
          Estos términos y condiciones rigen el uso del sitio web de
          AuraFlame proporcionado por Cristina. Al acceder y utilizar este
          Sitio, aceptas estos Términos en su totalidad. Si no estás de acuerdo
          con estos Términos, no utilices el Sitio.
        </p>
      </article>
      <article>
        <h3>1. Uso Aceptable</h3>
        <p>
          1.1. Este Sitio se proporciona únicamente con fines de entretenimiento
          y no debe considerarse asesoramiento astrológico ni información
          científica. No garantizamos la precisión de las predicciones
          astrológicas.
        </p>
        <p>
          1.2. Debes ser mayor de 18 años o tener la edad legal en tu
          jurisdicción para utilizar este Sitio. El acceso y uso de menores debe
          estar supervisado por un adulto.
        </p>
      </article>
      <article>
        <h3>2. Propiedad Intelectual</h3>
        <p>
          2.1. Todo el contenido, incluyendo texto, imágenes, gráficos,
          logotipos y software, está protegido por derechos de autor y otros
          derechos de propiedad intelectual. No tienes derecho a copiar,
          distribuir o modificar dicho contenido sin nuestro permiso por
          escrito.
        </p>
      </article>
      <article>
        <h3>3. Enlaces a Terceros</h3>
        <p>
          3.1. Este Sitio puede contener enlaces a sitios web de terceros. No
          somos responsables de la exactitud, seguridad o legalidad de dichos
          sitios. Utilizar esos enlaces es bajo tu propio riesgo.
        </p>
      </article>
      <article>
        <h3>4. Privacidad</h3>
        <p>
          4.1. Nuestra Política de Privacidad describe cómo recopilamos,
          utilizamos y protegemos tus datos personales. Al utilizar el Sitio,
          aceptas nuestras prácticas de privacidad.
        </p>
      </article>
      <article>
        <h3>5. Limitación de Responsabilidad</h3>
        <p>
          5.1. No somos responsables de ningún daño, pérdida o lesión que
          resulte del uso del Sitio. Tú aceptas utilizar el Sitio bajo tu propio
          riesgo.
        </p>
      </article>
      <article>
        <h3>6. Cambios a los Términos</h3>
        <p>
          6.1. Nos reservamos el derecho de modificar estos Términos en
          cualquier momento. Cualquier cambio se hará efectivo después de su
          publicación en el Sitio. Te recomendamos revisar regularmente estos
          Términos.
        </p>
      </article>
      <article>
        <h3>7. Contacto</h3>
        <p>
          7.1. Si tienes alguna pregunta o inquietud sobre estos Términos,
          contáctanos en AuraFlameVelas@gmail.com
        </p>
      </article>
    </div>
  );
}

export default Terms;
