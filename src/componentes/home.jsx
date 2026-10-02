
import "/src/css/home.css";
import "/src/css/home1.css";

import futbol from "/src/assets/futbol.png";
import padel from "/src/assets/padel.png";
import natacion from "/src/assets/natacion.png";
import polideportivo from "/src/assets/polideportivo.png";
import voley from "/src/assets/voley.png";
import bochas from "/src/assets/bochas.png";
import nortecd from "/src/assets/nortecd.png";
import marcelogonzalez from "/src/assets/marcelo_gonzalez.jpeg";
import ingemar from "/src/assets/ingemar.jpeg";
import geologodasilva from "/src/assets/geologo.jpeg";
import corblock from "/src/assets/corblock1.jpeg";

import ciec from "/src/assets/ciec.jpeg";
import lomitos348 from "/src/assets/lomitos348.png";
import carmelo from "/src/assets/carmelo.jpeg";


const deportes = [
  {
    nombre: "Fútbol",
    imagen: futbol,
    descripcion: "Pasión, equipo y competencia."
  },
  {
    nombre: "Pádel",
    imagen: padel,
    descripcion: "Estrategia y compañerismo."
  },
  {
    nombre: "Natación",
    imagen: natacion,
    descripcion: "Superación en cada brazada."
  },
  {
    nombre: "Básquet",
    imagen: polideportivo,
    descripcion: "Trabajo en equipo y precisión."
  },
  {
    nombre: "Vóley",
    imagen: voley,
    descripcion: "Un deporte que nos une."
  },
  {
    nombre: "Bochas",
    imagen: bochas,
    descripcion: "Varemos que ponemos."
  }
];

const sponsores = [
   {
    nombre: "CORBLOCK",
    imagen: corblock,
    descripcion: "empresa líder en la fabricación de premodelados y pretensados de hormigón.",
    link: "https://www.corblock.com/"
  },
  {
    nombre: "Ingemar",
    imagen: ingemar,
    descripcion: "...es una empresa cordobesa con más de 25 años de trayectoria dedicada a la provisión y fabricación de materiales para obras de infraestructura urbana en Argentina.",
    link: "https://ingemar.com.ar/",
  },
  {
    nombre: "MARCELO GONZALEZ - NEGOCIOS INMOBILIARIOS",
    imagen: marcelogonzalez,
    descripcion: "Negocios Inmobiliarios es una inmobiliaria de la ciudad de Córdoba. Alquila y Vende casa, departamento, campo y todo tipo de Inmuebles.",
    link: "https://www.mginmobiliaria.com.ar/",
  },
  {
    nombre: "GEÓLOGO - RICARDO DA SILVA",
    imagen: geologodasilva,
    descripcion: "geólogo matriculado en la Provincia de Córdoba, especialista en geotecnia y estudios de suelos. Ofrece servicios profesionales de perforaciones, pilotes y fundaciones en la región",
    link: "https://www.facebook.com/p/Ge%C3%B3logo-da-Silva-100057185032021/?locale=es_LA"
  },
  {
    nombre: "LOMITOS 348",
    imagen: lomitos348,
    descripcion: "...Lomitos, Sandwiches, Pizzas y más. Conocé nuestra carta de productos...Estamos presentes en los distintos barrios de la Ciudad de Córdoba. Y también en Carlos Paz.",
    link: "https://www.lomitos348.com/",
  },
  {
    nombre: "CARMELO",
    imagen: carmelo,
    descripcion: "...es un clásico bodegón y restaurante familiar de la Zona Norte de Córdoba con más de 40 años de trayectoria, conocido por su modalidad de diente libre (con más de 70 variedades de platos) y comida por kilo.",
    link: "https://www.instagram.com/carmelorestaurant/?hl=es",
  },
  {
    nombre: "CIEC - ",
    imagen: ciec,
    descripcion: "El CIEC, aúna las profesiones de Ingenieros Mecánicos, Electricistas, Químicos, Laborales, Aeronáuticos, Informáticos, ampliado a otras disciplinas que se desarrollaron a la luz del avance tecnológico.",
    link: "https://www.ciec.com.ar/"
  }
 
];



function Home() {
  return (
    <main className="home">

      {/* BIENVENIDA */}
     {/* BIENVENIDA */}
<section className="hero">

  {/* Imagen de fondo */}
  <div className="hero-overlay"></div>

  <header className="hero-header">

  

    <div className="hero-titulo">
      <h4> 38° EDICIÓN</h4>
      <h1>Juegos Olímpicos de Ingenieros</h1>
      <h4>2026</h4>
    </div>

  </header>

  <div className="hero-contenido">

    <span className="hero-etiqueta">
      DEPORTE · AMISTAD · ENCUENTRO
    </span>

    <h2>¡Bienvenidos!</h2>

    <p>
      Nos encontramos para compartir una nueva edición
      de los Juegos Olímpicos de Ingenieros.
    </p>

    <div className="fechas">
      <span>7 al 11</span>
      <span>OCTUBRE</span>
      <span>2026</span>
    </div>

    <a href="#deportes" className="boton-principal">
      Conocé los deportes
    </a>

  </div>

</section>

{/* SPONSORES */}
      
<section className="deportes" id="deportes">
        <div className="espiritu-olimpico">
          <h4 >NUESTROS SPONSORES</h4>

          <h2>gracias por confiar en nuestros juegos.</h2>
          <hr />

        </div>

        <div className="sponsor-grid">
          
        {sponsores.map((sponsor) => (
          <article className="deporte-card" key={sponsor.nombre}>
            <div className="sponsor-imagen">
              <img
                src={sponsor.imagen}
                alt={sponsor.nombre}
                loading="lazy"
              />
            </div>

            <div className="deporte-info">
              <h3>{sponsor.nombre}</h3>
              <p>{sponsor.descripcion}</p>

              {sponsor.link && (
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar sitio web
                </a>
              )}
            </div>
          </article>
        ))}

        </div>
      </section>
      {/* LUGAR */}
      <section className="lugar" id="lugar">
        <div className="lugar-contenido">
          <span className="subtitulo">EL ESCENARIO DEL ENCUENTRO</span>

          <h2>Un lugar para compartir</h2>

          <p>
            Los 38° Juegos Olímpicos de Ingenieros se desarrollarán
            en el Complejo El Norte CD, un espacio preparado para
            disfrutar del deporte, la recreación y el encuentro.
          </p>

          <div className="lugar-datos">
            <div>
              <span className="dato-icono">📍</span>
              <div>
                <strong>El Norte CD</strong>
                <small>Ruta 9 km 666 · Río Segundo · Córdoba</small>
              </div>
            </div>

            <div>
              <span className="dato-icono">📅</span>
              <div>
                <strong>7 al 11 de octubre</strong>
                <small>Edición 2026</small>
              </div>
            </div>
          </div>

          <a
            href="https://elnortecd.com.ar/"
            target="_blank"
            rel="noreferrer"
            className="boton-secundario"
          >
            Conocer El Norte CD →
          </a>
        </div>

        <div className="lugar-imagen">
          <img
            src= {nortecd}
            alt="Complejo El Norte CD"
          />
        </div>
      </section>

      {/* DEPORTES */}
      <section className="deportes" id="deportes">
        <div className="espiritu-olimpico">
          <h4 >ESPÍRITU OLÍMPICO</h4>

          <h2>Nuestros deportes</h2>

          <p>
            para disfrutar, competir y compartir
            grandes momentos.
          </p>
        </div>

        <div className="deportes-grid">
          {deportes.map((deporte) => (
            <article className="deporte-card" key={deporte.nombre}>
              <div className="deporte-imagen">
                <img
                  src={deporte.imagen}
                  alt={`Cancha de ${deporte.nombre} en El Norte CD`}
                  loading="lazy"
                />
              </div>

              <div className="deporte-info">
                <h3>{deporte.nombre}</h3>
                <p>{deporte.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CIERRE */}
      <section className="hero-titulo-1">
        <h1>¡Nos encontramos en octubre!</h1>
        <h4>
          38° Juegos Olímpicos de Ingenieros · 2026
        </h4>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-contenido">
          <div className="footer-marca">
            <div className="footer-contacto">

  <h3>Contacto</h3>

  <div className="contactos-grid">

    <div>
      <strong>Ing. Claudio Defagot</strong>
      <span>+54 9 3516774840</span>
    </div>

    <div>
      <strong>Ing. Darío Suarez</strong>
      <span>+54 9 351611888</span>
    </div>

    <div>
      <strong>Ing. Gabriel Del Gobbo</strong>
      <span>+54 9 3512425497</span>
    </div>

    <div>
      <strong>Ing. Osvaldo Ada</strong>
      <span>+54 9 3516504424</span>
    </div>

    <div>
      <strong>Ing. Rodolfo Figueroa</strong>
      <span>+54 9 3516557517</span>
    </div>

  </div>

</div>
         
          
           {/*  <img
              src="/images/logo-juegos.png"
              alt="Juegos Olímpicos de Ingenieros"
            /> */}

           
          </div>

         
        </div>

        <div className="footer-final">
          38° Juegos Olímpicos de Ingenieros · 2026
          <span>Deporte y amistad</span>
        </div>
      </footer>

    </main>
  );
}

export default Home;