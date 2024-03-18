import './App.css';
import React from 'react';
import profileImg from './perfil.jpg';
import logo from './logo.png';
import logo2 from './logo_plantel.png';

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
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
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <div className="relative">
                {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                <button
                  type="button"
                  className="
                   group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pb-8'
                  "
                >
                  <span>Solutions</span>
                </button>
              </div>

              <a href="/" className="text-base font-medium text-gray-500 hover:text-blue-700">
                Pricing
              </a>
              <a href="/" className="text-base font-medium text-gray-500 hover:text-blue-700">
                Docs
              </a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="/"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
              </a>
              <a
                href="/"

              >

              </a>
            </div>
          </div>
        </div>
        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
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
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/chart-bar */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Solutions
                    </span>
                  </a>
                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/cursor-click */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Pricing
                    </span>
                  </a>
                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/shield-check */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Docs
                    </span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="home" className="text-gray-700 body-font items-center">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-5 py-24">
          <div className="text-left lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start sm:text-center md:text-center lg:text-left  mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
              Hola<br />Soy Roberto<br />
              <span className='text-blue-900'>Full Stack Web Developer</span>
            </h1>
            <span className="text-xl group rounded-md text-gray-500 inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pb-8">
              HTML/CSS | Bootstrap | JavaScript | React | Spring Framework | Node.js | Java
            </span>
            <p className="text-lg mb-8 leading-relaxed text-gray-600 font-medium">Egresado de la carrera de <strong>Ingeniería en Sistemas Computacionales</strong> con una pasión por la tecnología y el desarrollo de software. Soy de México del estado de Oaxaca. Me especializo en <strong>Tecnologías De Software Emergente</strong> y tengo <span className='text-blue-600'><strong>1+ año de experiencia</strong></span> en el campo.</p>
            <div className="flex justify-center lg:pb-10">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Contact</button>
            </div>
          </div>
          <div className="lg:w-1/2 w-5/6 flex justify-center mb-10 lg:mb-0">
            <img src={profileImg} alt="Profile" className="rounded-full w-60 lg:w-80 shadow-lg" />
          </div>
        </div>
      </section>

      <section id="experiencia">
        <div className="container mx-auto px-5">
          <h3 className="title-font sm:text-6xl text-4xl mb-4 font-medium text-gray-900 lg:py-20">Experiencia</h3>
        </div>

        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-5 py-10">
          <div className="relative grid gap-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left before:dark:from-sky-500 sticky top-5">
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
                <div className="flex flex-col relative before:absolute before:top-[5px] before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-sky-800 before:dark:bg-sky-500 pb-8">
                  <h3 className="experience__title"> Desarrollador Full Stack </h3>
                  <time className="experience__time"> Enero 2023 - Diciembre 2023 </time>
                  <h4 className="experience__company"> @ Instituto tecnológico de Oaxaca </h4>
                  <div className="experience__description">
                    <p> For the last <strong className="experience__description--highlight">3</strong> months, I've been working as a Full-Stack developer for the Systems and Computing department, contributing to the development of an institutional system intended to manage the academic and administrative processes of the institute. My main responsibilities include: </p>
                    <ul className="list-disc list-inside">
                      <li>Analyzing administrative processes and identifying areas for improvement.</li>
                      <li>Designing and maintaining server-side logic using <strong className="experience__description--highlight">Typescript</strong>, <strong className="experience__description--highlight">Next.js</strong> and <strong className="experience__description--highlight">Nest.js</strong>. </li>
                      <li>Collaborating with other developers and stakeholders.</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col relative before:absolute before:top-[5px] before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-sky-800 before:dark:bg-sky-500 pb-8">
                  <h3 className="experience__title"> Full Stack Developer Intern </h3>
                  <time className="experience__time"> May 2022 - Jul 2023 </time>
                  <h4 className="experience__company"> @ Technological Institute of Oaxaca </h4>
                  <div className="experience__description">
                    <p> In this job I was responsible for the development of a web application for the management of the company's HR department. My tasks included: </p>
                    <ul className="list-disc list-inside">
                      <li>Meeting with the HR department to gather requirements.</li>
                      <li>Designing the database schema.</li>
                      <li>Analysing vulnerabilities and implementing security measures.</li>
                    </ul>
                    <p> As a result of my work, I: </p>
                    <ul className="list-disc list-inside">
                      <li><strong className="experience__description--highlight"> Optimized report generation times by 90% </strong></li>
                      <li>Developed a fully functional HRMS (Human Resources Management System) using <strong className="experience__description--highlight">Spring Boot</strong> for the backend and <strong className="experience__description--highlight">Vue.js</strong> for the frontend. </li>
                      <li>Successfully deployed and maintained the HRMS hosted at <a href="https://itoaxaca.tech" target="_blank" rel="noreferrer" className="underline">https://itoaxaca.tech/</a></li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="duration-500 transition-all overflow-y-hidden h-[0px]">
                    <h3 className="experience__title"> Touristic Ambassador </h3>
                    <time className="experience__time">Jun 2019 - Aug 2019</time>
                    <h4 className="experience__company"> @ SECTUR Oaxaca </h4>
                    <div className="experience__description">
                      <p> Worked as Touristic Ambassador for the <a href="https://www.oaxaca.gob.mx/ageo/la-guelaguetza/" className="underline">Guelaguetza</a> 2019. Some of the tasks I was involved in included: </p>
                      <ul className="list-disc list-inside">
                        <li>Multilingual Communication: Facilitating communication between visitors and locals, acting as an interpreter when necessary</li>
                        <li>Logistics and Organization: Planning and coordinating activities and ensuring logistical details.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <button data-v-c21e6762="" className="glass-button h-[45px] min-w-[45px] text-base" title="">
                  <span data-v-c21e6762="" className="glass-button__content text-white px-3 space-x-2">
                    <span data-v-c21e6762="" className="flex [&amp;>svg]:my-auto [&amp;>svg]:inline [&amp;>svg]:h-5 [&amp;>svg]:w-5">
                      <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 5l0 14"></path>
                        <path d="M5 12l14 0"></path>
                      </svg>
                    </span>
                    <span data-v-c21e6762="" className="m-auto">Show more</span>
                  </span>
                  <span data-v-c21e6762="" className="glass-button__bg bg-neutral-500"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="container about">
        <div id="custom-styles" className='bg-white p-4'>
          <div className="pb-2" style={{ textAlign: 'justify' }}>
            <div className="card">
              <div className="card-header fs-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-mortarboard" viewBox="0 0 16 16">
                  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
                </svg> Eduación
              </div>
              <div className="d-flex card-body">
                <a className="d-none d-md-flex me-2 align-self-center" href="http://www.oaxaca.tecnm.mx/">
                  <img src={logo} alt="Technological Institute Of Oaxaca" className="m-auto" style={{ height: '80px', width: '80px' }} />
                </a>
                <div className="flex-grow-1">
                  <p style={{ color: '#143ba5' }}><b>Ingeniería en Sistemas Computacionales</b></p>
                  <span style={{ fontSize: '15px', color: '#143ba5', fontWeight: '600' }}>Agosto 2018 - Diciembre 2023</span>
                  <p className='mb-0'>@ Instituto Tecnológico de Oaxaca</p>
                </div>
              </div>
              <p className="card-body">Mi formación se centra en Java como lenguaje principal, con especialización en programación orientada a objetos, estructura de datos y algoritmos entre otros. Además, he explorado patrones de diseño para el desarrollo de software. Integré este conocimiento con frameworks como Spring para aplicaciones Java empresariales, así como con tecnologías modernas como React para el desarrollo frontend y Node.js para el desarrollo de backend.</p>
              <div className="d-flex card-body">
                <a className="d-none d-md-flex me-2 align-self-center" href="http://www.oaxaca.tecnm.mx/">
                  <img src={logo2} alt="Technological Institute Of Oaxaca" className="m-auto" style={{ height: '80px', width: '80px' }} />
                </a>
                <div className="flex-grow-1">
                  <p style={{ color: '#143ba5' }}><b>Técnico en Ofimática</b></p>
                  <span style={{ fontSize: '15px', color: '#143ba5', fontWeight: '600' }}>Agosto 2015 - Julio 2018</span>
                  <p className='mb-0'>@ Centro de Bachillerato Industrial y de Servicios 259</p>
                </div>
              </div>
              <p className="card-body">A través de mi formación técnica en Ofimática, he desarrollado habilidades sólidas en el manejo de paqueterías de office, bases de datos, redes, algoritmos y pseudocódigo.</p>

            </div>
          </div>
        </div>
      </section>

      <section className="container about">
        <div id="custom-styles" className='bg-white p-4'>
          <div className="pb-2 card" style={{ textAlign: 'justify' }}>
            <div className="card-header fs-3 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
              </svg> Experiencia Profesional
            </div>

            <div className="row">
              <div className="col-lg-3 p-4">
                <div className="contenido">
                  <span className="text-base">You can download my CV by clicking the button below.</span>
                  <div className="d-flex justify-content-center">
                    <button className="mt-2 cv">
                      Download CV
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col">
                <div className="content">
                  <div className='mx-2'>
                    <h3 className='mt-4'>Full Stack Developer</h3>
                    <time>Jan 2024 - Present</time>
                    <h4>@ Technological Institute of Oaxaca</h4>
                    <div>
                      <p>For the last <strong>3</strong> months, I've been working as a Full-Stack developer for the Systems and Computing department, contributing to the development of an institutional system intended to manage the academic and administrative processes of the institute. My main responsibilities include:</p>
                      <ul>
                        <li>Analyzing administrative processes and identifying areas for improvement.</li>
                        <li>Designing and maintaining server-side logic using <strong>Typescript</strong>, <strong>Next.js</strong>, and <strong>Nest.js</strong>.</li>
                        <li>Collaborating with other developers and stakeholders.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className='mx-2'>
                    <h3>Full Stack Developer</h3>
                    <time>Jan 2024 - Present</time>
                    <h4>@ Technological Institute of Oaxaca</h4>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <footer className="footer">
        <div className="container text-center py-5">
          <h3 className="text-uppercase mb-4">¡Sígueme en redes sociales!</h3>
          <ul className="social-networks">
            <li>
              <a className="snlnk" href="https://www.facebook.com/markos.nunnes.87">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a className="snlnk" href="https://www.linkedin.com/in/marcos-nunes-de-souza-nipfhire">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a className="snlnk" href="https://github.com/Robertofcg">
                <i className="fab fa-github bg-dark"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;