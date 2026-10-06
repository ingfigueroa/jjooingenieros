//import { useState, useEffect } from "react";


import "/src/css/home1.css";
import "/src/css/home.css";



import futbol from "/src/assets/futbol.png";
import padel from "/src/assets/padel.png";
import natacion from "/src/assets/natacion.png";
import polideportivo from "/src/assets/polideportivo.png";
import voley from "/src/assets/voley.png";
import bochas from "/src/assets/bochas.png";
import tenis from "/src/assets/tenis.png";
import atletismo from "/src/assets/atletismo.png";
import ajedrez from "/src/assets/ajedrez.png";
import golf from "/src/assets/golf.png";
import nortecd from "/src/assets/nortecd.png";





import marcelogonzalez from "/src/assets/marcelo_gonzalez.jpeg";
import ingemar from "/src/assets/ingemar.jpeg";
import geologodasilva from "/src/assets/geologo.jpeg";
import corblock from "/src/assets/corblock1.jpeg";

import ciec from "/src/assets/ciec.jpeg";
import lomitos348 from "/src/assets/lomitos348.png";
import apesa from "/src/assets/apesa.jpeg";
import iec from "/src/assets/iec.jpeg";
import tiranti from "/src/assets/tiranti.jpeg";
import carmelo from "/src/assets/carmelo.jpeg";
import colegiociviles from "/src/assets/colegiociviles.jpeg";

import suarez from "/src/assets/suarez.png";


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
    descripcion: "."
  },
  {
    nombre: "Tenis",
    imagen: tenis,
    descripcion: "."
  },
  {
    nombre: "Atletismo",
    imagen: atletismo,
    descripcion: "."
  },
  {
    nombre: "Ajedrez",
    imagen: ajedrez,
    descripcion: "."
  },
  {
    nombre: "Golf",
    imagen: golf,
    descripcion: "."
  }
];

const sponsores = [
  {
    nombre: "INGEMAR",
    imagen: ingemar,
    descripcion: "...es una empresa cordobesa con más de 25 años de trayectoria dedicada a la provisión y fabricación de materiales para obras de infraestructura urbana en Argentina.",
    link: "https://ingemar.com.ar/",
  },
  {
    nombre: "APESA",
    imagen: apesa,
    descripcion: "...empresa de larga trayectoria en la construcción de Obras de gran envergadura y hemos establecido exigentes normas de desempeño y comportamiento ético con el pasar de los años.",
    link: "https://www.apesa.com.ar/",
  },
  {
    nombre: "IEC",
    imagen: iec,
    descripcion: "...empresa referente en el mercado local que brinda servicios de mantenimiento y reparaciones Electricas en Edificios, Fabricas y Plantas Industriales, Nuevas Instalaciones Eléctricas en Plantas Industriales y Edificios de Viviendas...",
    link: "https://iecsrl.com.ar/",
  },
   {
    nombre: "CORBLOCK",
    imagen: corblock,
    descripcion: "empresa líder en la fabricación de premodelados y pretensados de hormigón.",
    link: "https://www.corblock.com/"
  },
   {
    nombre: "CIEC - ",
    imagen: ciec,
    descripcion: "El CIEC, aúna las profesiones de Ingenieros Mecánicos, Electricistas, Químicos, Laborales, Aeronáuticos, Informáticos, ampliado a otras disciplinas que se desarrollaron a la luz del avance tecnológico.",
    link: "https://www.ciec.com.ar/"
  },
  {
    nombre: "Colegio de Ingenieros Civiles de Córdoba",
    imagen: colegiociviles,
    descripcion: "...ejerce por delegación del Estado, el control de la matrícula, del ejercicio y de la ética profesional, promoviendo, además, la acción social y cultural entre sus matriculados. Agrupa a más de 3.000 ingenieros graduados de las Universidades Nacionales y privadas...",
    link: "https://civiles.org.ar/"
  },
  {
    nombre: "GEÓLOGO - RICARDO DA SILVA",
    imagen: geologodasilva,
    descripcion: "geólogo matriculado en la Provincia de Córdoba, especialista en geotecnia y estudios de suelos. Ofrece servicios profesionales de perforaciones, pilotes y fundaciones en la región",
    link: "https://www.facebook.com/p/Ge%C3%B3logo-da-Silva-100057185032021/?locale=es_LA"
  },
  
  {
    nombre: "MARCELO GONZALEZ - NEGOCIOS INMOBILIARIOS",
    imagen: marcelogonzalez,
    descripcion: "Negocios Inmobiliarios es una inmobiliaria de la ciudad de Córdoba. Alquila y Vende casa, departamento, campo y todo tipo de Inmuebles.",
    link: "https://clasificados.lavoz.com.ar/sitio/marcelogonzalez?gad_source=1&gad_campaignid=23389384538&gclid=CjwKCAjwlY3WBhANEiwApsNrLQfhtKuhu76T92ruhVs8JRxu7uJq4iBd5PYhr1VdjP66gBiQ74v7phoCltQQAvD_BwE",
  },
  {
    nombre: "LOMITOS 348",
    imagen: lomitos348,
    descripcion: "...Lomitos, Sandwiches, Pizzas y más. Conocé nuestra carta de productos...Estamos presentes en los distintos barrios de la Ciudad de Córdoba. Y también en Carlos Paz.",
    link: "https://www.lomitos348.com/",
  },
    {
    nombre: "TIRANTI",
    imagen: tiranti,
    descripcion: "...empresa que consta de 50 años de trayectoria, en la elaboración de pastas secas, y con una reciente incorporación de la molienda de trigo pan para uso de panificación, con excelencia en entrega y calidad.",
    link: "https://fideostiranti.com.ar/",
  },
 
    {
    nombre: "CARMELO",
    imagen: carmelo,
    descripcion: "...clásico bodegón familiar en Córdoba conocido por su opción de diente libre con más de 70 variedades de platos y su modalidad de comida por kilo.",
    link: "https://www.instagram.com/carmelorestaurant/?hl=es",
  },
  
    {
    nombre: "PERIMETRALES SUAREZ",
    imagen: suarez,
    descripcion: "Fabrica e instalación de Cercos Perimetrales en Córdoba atendida por sus dueños Brindamos asesoramiento personalizado gratuito adaptando nuestros productos.",
    link: "https://www.instagram.com/perimetralessuarez.cba/",
  }
 
];



function Home() {



  

  return (
    <main className="home">

       {/* BIENVENIDA */}
<section className="hero">

  {/* Imagen de fondo */}
  <div className="hero-overlay"></div>

  <header className="hero-header">

  

    <div className="hero-titulo">
      <h4> 38° EDICIÓN</h4>
      <h1>Juegos Olímpicos de Ingenieros</h1>
      <h4>2026</h4>
       <a href="#deportes" className="boton-principal">
      Conocé los deportes
    </a>
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
      <span>8 al 10</span>
      <span>OCTUBRE</span>
      <span>2026</span>
    </div>

   

      <a href="#sponsores" className="boton-principal">
      Nuestros sponsores
    </a>

  </div>


</section>



 <section className="hero-titulo-1">
       
      
    
  <h1>¡Sumate a los Juegos Olímpicos!</h1>

  <h4 >
    Completá el formulario y realizá tu preinscripción: <a
    href="https://forms.gle/eEovrCfyA4VB2iNZ6"
    target="_blank"
    rel="noopener noreferrer"
   className="boton-principal"
  >
    Hacelo desde aca.
  </a>
  </h4>

 

  

</section>

{/* SPONSORES */}
      
<section className="deportes" id="sponsores">
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
        <div className="espiritu-olimpico">
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

         <div className="deporte-imagen">
            <img
                  src={nortecd}
                 
                  
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
              

              <div className="deporte-info">
                <h3>{deporte.nombre}</h3>
                
              </div>
              <div className="deporte-imagen">
                <img
                  src={deporte.imagen}
                  alt={`Cancha de ${deporte.nombre} en El Norte CD`}
                  loading="lazy"
                />
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

      
 <section className="hero-titulo-1">
       
      
    
  <h1>¡Sumate a los Juegos Olímpicos!</h1>

  <h4 >
    Completá el formulario y realizá tu preinscripción: <a
    href="https://forms.gle/eEovrCfyA4VB2iNZ6"
    target="_blank"
    rel="noopener noreferrer"
   className="boton-principal"
  >
    Hacelo desde aca.
  </a>
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