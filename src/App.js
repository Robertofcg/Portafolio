import './App.css';
import React from 'react';
import profileImg from './perfil.jpg';
import logo from './logo.png';
import logo2 from './logo_plantel.png';
import estatal from './estatal.jpeg';
import acreditacionSonora from './acreditacionSonora.jpeg';
import ParticipacionSonora from './sonora.jpeg';
import acreditacionBrasil from './acreditacionBrasil.jpeg';

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="bg-white shadow fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <h1 className="text-2xl	 h-8 w-auto sm:h-10 font-medium text-gray-500 lg:text-4xl">Portafolio</h1>
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className={`${open ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${open ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a
                href="#home"
                className="text-base text-lg font-medium text-gray-500 hover:text-blue-700"
              >
                Inicio
              </a>
              <a
                href="#experiencia"
                className="text-base text-lg font-medium text-gray-500 hover:text-blue-700"
              >
                Experiencia
              </a>
              <a
                href="#educacion"
                className="text-base text-lg font-medium text-gray-500 hover:text-blue-700"
              >
                Eduación
              </a>
              <a
                href="#reconocimientos"
                className="text-base text-lg font-medium text-gray-500 hover:text-blue-700"
              >
                Reconocimientos
              </a>
              <a
                href="#contacto"
                className="text-base text-lg font-medium text-gray-500 hover:text-blue-700"
              >
                Contacto
              </a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="/signin"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
              </a>
            </div>
          </div>
        </div>
        <div
          className={`${open ? 'block' : 'hidden'} md:hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
            >
              Inicio
            </a>
            <a
              href="#experiencia"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
            >
              Experiencia
            </a>
            <a
              href="#educacion"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
            >
              Eduación
            </a>
            <a
              href="#contacto"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
            >
              Contacto
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Sign in</div>
              </div>
              <div className="ml-3">
                <a
                  href="/signin"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="home" className="text-gray-700 body-font items-center mb-0 lg:pt-5">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-5 lg:py-24" >
          <div className="text-left lg:w-1/2 lg:pr-24 flex flex-col lg:items-start sm:text-center md:text-center lg:text-left  mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
              Hola<br />Soy Roberto<br />
              <span className='text-blue-900'>Full Stack Web Developer</span>
            </h1>
            <span className="text-xl group rounded-md text-gray-500 inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pb-8">
              HTML/CSS | Bootstrap | JavaScript | React | Spring Framework | Node.js | Java
            </span>
            <p className="text-lg mb-8 leading-relaxed text-gray-600 font-medium">Egresado de la carrera de <strong>Ingeniería en Sistemas Computacionales</strong> con una pasión por la tecnología y el desarrollo de software. Soy de México del estado de Oaxaca. Me especializo en <strong>Tecnologías De Software Emergente</strong> y tengo <span className='text-blue-600'><strong>1+ año de experiencia</strong></span> en el campo.</p>
            <div>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin w-4 h-4 mr-2" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                  LinkedIn
                </a>

                <a href="https://github.com" target="_blank" rel="noreferrer noopener" className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mr-2">
                    <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.11.82-.258.82-.577 0-.284-.01-1.04-.015-2.042-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.235 1.838 1.235 1.07 1.835 2.807 1.304 3.495.998.108-.775.417-1.304.76-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.383 1.235-3.223-.125-.307-.535-1.527.116-3.18 0 0 1.008-.324 3.3 1.233.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.29-1.557 3.297-1.233 3.297-1.233.655 1.653.245 2.873.12 3.18.765.84 1.23 1.913 1.23 3.223 0 4.61-2.805 5.622-5.475 5.92.43.372.815 1.102.815 2.22 0 1.605-.015 2.896-.015 3.287 0 .32.215.695.825.576 4.763-1.586 8.197-6.083 8.197-11.386 0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-5/6 flex justify-center mb-10 pt-24 lg:pb-24">
            <img src={profileImg} alt="Profile" className="rounded-full w-60 lg:w-80 shadow-lg" />
          </div>
        </div>
      </section>

      <section id="experiencia">
        <div>
          <div className="container mx-auto px-5 pt-24 lg:pt-14">
            <h3 className="title-font sm:text-6xl text-4xl font-medium text-gray-900 lg:py-10">Experiencia</h3>
          </div>
          <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-5 pt-10">
            <div className="relative grid gap-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-center before:dark:from-sky-500 sticky top-28">
                  <p className="text-lg mb-8 leading-relaxed text-gray-600 font-medium"> Puedes descargar el CV dando clic en el boton de abajo. </p>
                  <div className="flex justify-center">
                    <button className="mt-2 cv border-solid border-4 border-blue-900 text-blue-900 text-xl rounded p-3 hover:bg-blue-900 hover:text-white">
                      <b>
                        Download CV
                      </b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 relative px-4 sm:col-span-8 before:absolute before:top-[5px] before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-300 dark:before:bg-gray-700">
                  <div className="flex flex-col relative before:absolute before:top-[5px] before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-sky-800 before:dark:bg-sky-500">
                    <h3 className="text-2xl text-blue-900 font-medium"> Desarrollador Full Stack</h3>
                    <time className="text-blue-600"> Enero 2023 - Diciembre 2023 </time>
                    <h4 className="text-xl text-gray-600 font-medium"> @ Instituto tecnológico de Oaxaca </h4>
                    <div className="experience__description">
                      <p className="text-md mb-8 leading-relaxed text-gray-600 font-medium">Proyecto de residencia profesional enfocado en el desarrollo de una aplicación web utilizando HTML, CSS,
                        JavaScript y el framework Django y Spring. Se implementaron Redes Neuronales Convolucionales para la detección de un tipo específico de cubrebocas, con el propósito de
                        determinar su nivel de protección y ofrecer recomendaciones pertinentes, en beneficio de la Escuela Primaria "Melchor Ocampo" en San Martín Mexicapan, Oaxaca.</p>
                    </div>
                  </div>
                  <div className="flex flex-col relative before:absolute before:top-[5px] before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-sky-800 before:dark:bg-sky-500">
                    <h3 className="text-2xl text-blue-900 font-medium">Desarrollador Full Stack en Microservicio de Facturación</h3>
                    <time className="text-blue-600"> Enero 2023 - Diciembre 2023 </time>
                    <h4 className="text-xl text-gray-600 font-medium"> @ Instituto tecnológico de Oaxaca </h4>
                    <div className="experience__description">
                      <p className="text-md mb-8 leading-relaxed text-gray-600 font-medium">Durante el curso de Desarrollo de Software Orientado a Servicios se llevó a cabo un proyecto enfocado
                        en la integración del API de un microservicio de pagos para la gestión de transacciones y generación de facturas. Para el desarrollo del backend, se emplearon tecnologías
                        como Spring (Boot, MVC, JPA) para la creación y consumo de microservicios. Mientras tanto, en el frontend se utilizó un conjunto diverso de herramientas como React.js,
                        Bootstrap, CSS, HTML5 y JavaScript. Como base de datos, se implementó MySQL para asegurar un almacenamiento eficiente y confiable de los datos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="educacion" className='pt-10'>
        <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-300 mt-20 mt-20">
          <div className="bg-gray-50 px-4 py-2 border border-gray-300">
            <div className="text-3xl font-bold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-mortarboard mx-3" viewBox="0 0 16 16">
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
              </svg>
              Educación
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="flex items-center">
              <a className="hidden md:flex me-2" href="http://www.oaxaca.tecnm.mx/">
                <img src={logo} alt="Technological Institute Of Oaxaca" className="m-auto h-20 w-20" />
              </a>
              <div className="flex-grow">
                <p className="text-blue-600 font-semibold">
                  <b className="text-2xl text-blue-900 font-medium">Ingeniería en Sistemas Computacionales</b>
                </p>
                <span className="text-blue-600 font-semibold text-lg">
                  Agosto 2018 - Diciembre 2023
                </span>
                <h4 className="text-xl text-gray-600 font-medium"> @ Instituto tecnológico de Oaxaca </h4>
              </div>
            </div>
            <p className="mt-4 text-md mb-8 leading-relaxed text-gray-600 font-medium">
              Mi formación se centra en Java como lenguaje principal, con
              especialización en programación orientada a objetos, estructura de
              datos y algoritmos entre otros. Además, he explorado patrones de
              diseño para el desarrollo de software. Integré este conocimiento con
              frameworks como Spring para aplicaciones Java empresariales, así como
              con tecnologías modernas como React para el desarrollo frontend y
              Node.js para el desarrollo de backend.
            </p>
            <div className="flex items-center mt-4">
              <a className="hidden md:flex me-2" href="http://www.oaxaca.tecnm.mx/">
                <img src={logo2} alt="Technological Institute Of Oaxaca" className="m-auto h-20 w-20" />
              </a>
              <div className="flex-grow">
                <p className="text-blue-600 font-semibold">
                  <b>Técnico en Ofimática</b>
                </p>
                <span className="text-blue-600 font-semibold text-lg">
                  Agosto 2015 - Julio 2018
                </span>
                <p className="mb-0 text-xl text-gray-600 font-medium">
                  @ Centro de Bachillerato Tecnlógico Industrial y de Servicios no. 259
                </p>
              </div>
            </div>
            <p className="mt-4 text-md mb-8 leading-relaxed text-gray-600 font-medium">
              A través de mi formación técnica en Ofimática, he desarrollado
              habilidades sólidas en el manejo de paqueterías de office, bases de
              datos, redes, algoritmos y pseudocódigo.
            </p>
          </div>
        </div>
      </section>

      <section id="reconocimientos" className='pt-10'>
        <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-300 mt-20 mt-20">
          <div className="bg-gray-50 px-4 py-2 border border-gray-300">
            <div className="text-3xl font-bold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-mortarboard mx-3" viewBox="0 0 16 16">
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
              </svg>
              Reconocimientos y premios
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                  <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                    <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={estatal} width="320" height="180" alt="Course" />
                  </figure>
                </a>
                <div className="flex flex-col p-5">
                  <header className="mb-3">
                    <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                      <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">Participante Regional y Estatal ExpoCiencias Oaxaca 2023</h3>
                    </a>
                  </header>
                  <div className="mb-8 text-md mb-8 leading-relaxed text-gray-600 font-medium">
                    <p>Presentación del proyecto "Red Neuronal Artificial para Determinar el Nivel de Protección en el Uso de Cubrebocas".</p>
                  </div>
                </div>
              </div>
              <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                  <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                    <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={acreditacionSonora} width="320" height="180" alt="Course" />
                  </figure>
                </a>
                <div className="flex flex-col p-5">
                  <header className="mb-3">
                    <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                      <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">Ganador de 2° Lugar y Acreditación ExpoCiencias Nacional Sonora 2023</h3>
                    </a>
                  </header>
                  <div className="mb-8 text-md mb-8 leading-relaxed text-gray-600 font-medium">
                    <p>Ganador del 2° lugar en la categoria de Computacion y Software con una acreditacion para participar con el proyecto en "ExpoCiencias Nacional Sonora 2023"</p>
                  </div>
                </div>
              </div>
              <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                  <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                    <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={ParticipacionSonora} width="320" height="180" alt="Course" />
                  </figure>
                </a>
                <div className="flex flex-col p-5">
                  <header className="mb-3">
                    <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                      <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">Participante ExpoCiencias Nacional Sonora 2023</h3>
                    </a>
                  </header>
                  <div className="mb-8 text-md mb-8 leading-relaxed text-gray-600 font-medium">
                    <p>Participante en ExpoCiencias Nacional Sonora 2023, participando con el proyecto antes mencionado representado al "Instituto Tecnológico de Oaxaca".</p>
                  </div>
                </div>
              </div>
              <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                  <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                    <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={acreditacionBrasil} width="320" height="180" alt="Course" />
                  </figure>
                </a>
                <div className="flex flex-col p-5">
                  <header className="mb-3">
                    <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                      <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">Acreditación ExpoCiencias MILSET Brasil 2024</h3>
                    </a>
                  </header>
                  <div className="mb-8 text-md mb-8 leading-relaxed text-gray-600 font-medium">
                    <p>Ganador de una acreditacion en la categoria de Computacion y Software para participar con el proyecto antes mencionado en "ExpoCiencias MILSET Brasil 2024", representado a México</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto antialiased text-gray-600 p-4">

      </section>


      <footer className="bg-gray-50 text-gray-900 pt-20 mt-10 " id='contacto'>
        <div className="container mx-auto py-10 px-5">
          <div className="max-w-xl mx-auto">
            <h2 className="text-4xl font-semibold mb-8 text-center">Contacto</h2>
            <p className="mt-4 text-lg mb-8 leading-relaxed text-gray-600 font-medium text-center">
              Si quieres ponerte en contacto conmigo, puedes hacerlo a través de mis redes sociales o vía correo electrónico.
            </p>
            <div className="flex mb-5 border-b pb-5">
              <input
                type="text"
                value="robertocarlosrendonpelaez@gmail.com"
                readOnly
                className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-600 font-medium"
              />
              <button
                onClick={() => {
                  const input = document.querySelector('input[type="text"]');
                  input.select();
                  document.execCommand('copy');
                }}
                className="py-2 px-4 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                </svg>
              </button>
            </div>

            <div className="flex justify-center space-x-4 mb-5 border-b-4 pb-5">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin w-4 h-4 mr-2" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                LinkedIn
              </a>

              <a href="https://github.com" target="_blank" rel="noreferrer noopener" className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mr-2">
                  <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.11.82-.258.82-.577 0-.284-.01-1.04-.015-2.042-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.235 1.838 1.235 1.07 1.835 2.807 1.304 3.495.998.108-.775.417-1.304.76-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.383 1.235-3.223-.125-.307-.535-1.527.116-3.18 0 0 1.008-.324 3.3 1.233.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.29-1.557 3.297-1.233 3.297-1.233.655 1.653.245 2.873.12 3.18.765.84 1.23 1.913 1.23 3.223 0 4.61-2.805 5.622-5.475 5.92.43.372.815 1.102.815 2.22 0 1.605-.015 2.896-.015 3.287 0 .32.215.695.825.576 4.763-1.586 8.197-6.083 8.197-11.386 0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </a>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input type="text" id="name" name="name" className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Ingrese su nombre" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                <input type="email" id="email" name="email" className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Ingrese su correo electrónico" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea id="message" name="message" rows="4" className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Ingrese su mensaje"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Enviar mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;