import './App.css';
import React, { useState } from 'react';
import profileImg from './perfil.jpg';
import logo from './logo.png';
import logo2 from './logo_plantel.png';


import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar style={{ background: '#2d3748' }} expand="lg" expanded={expanded} fixed='top'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
            style={{ background: 'white' }} // Cambiar el color del borde a blanco
          >
            <span className="navbar-toggler-icon" style={{ color: 'white' }}></span> {/* Cambiar el color del icono a blanco */}
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarNav" className="justify-content-center">
            <Nav className="text-uppercase">
              <Nav.Link href="#home" className='text-white'><b>Home</b></Nav.Link>
              <Nav.Link href="#link" className='text-white'><b>Link</b></Nav.Link>
              <Nav.Link href="#about" className='text-white'><b>About</b></Nav.Link>
              {/* Add more Nav.Link components for additional links */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <section className="hero">
        <div className="container" id="maincontent">
          <div className="row">
            <div className="col-lg-12">
              <div className="row d-flex justify-content-center">
                <div className="d-flex justify-content-center">
                  <img src={profileImg} alt="Profile" className="img-responsive profile-img home-img shadow" style={{ width: '100%', marginTop: '60px' }} />
                </div>
              </div>
              <div className="row intro-text d-flex justify-content-center text-center mt-3">
                <h1 className="intro-tx1">Roberto Carlos Rendón Peláez</h1>
                <h3 className="fs-1 texto-Area">FULL STACK WEB DEVELOPER</h3>
                <span className="fs-5">HTML/CSS | Bootstrap | JavaScript | React | Spring Framework | Node.js | Java</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container about">
        <div id="custom-styles" className='bg-white p-4'>
          <div className="pb-2" style={{ textAlign: 'justify' }}>
            <p>Hola 👋,soy egresado de la carrera de <strong>Ingeniería en Sistemas Computacionales</strong> con una pasión por la tecnología y el desarrollo de software. Soy de México del estado de Oaxaca. Me especializo en <strong>Tecnologías De Software Emergente</strong> y tengo más de 1 año de experiencia en el campo.</p>
            <p>Me caracterizo por ser <strong>amable, responsable y comprometido </strong>, con una fuerte <strong>ética de trabajo</strong> y una <strong>actitud proactiva</strong>. Constantemente busco aprender y mejorar mis habilidades técnicas para enfrentar nuevos desafíos.</p>
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
              <div class="d-flex card-body">
                <a class="d-none d-md-flex me-2 align-self-center" href="http://www.oaxaca.tecnm.mx/">
                  <img src={logo} alt="Technological Institute Of Oaxaca" class="m-auto" style={{ height: '80px', width: '80px' }} />
                </a>
                <div class="flex-grow-1">
                  <p style={{ color: '#143ba5' }}><b>Ingeniería en Sistemas Computacionales</b></p>
                  <span style={{ fontSize: '15px', color: '#143ba5', fontWeight: '600' }}>Agosto 2018 - Diciembre 2023</span>
                  <p className='mb-0'>@ Instituto Tecnológico de Oaxaca</p>
                </div>
              </div>
              <p class="card-body">Mi formación se centra en Java como lenguaje principal, con especialización en programación orientada a objetos, estructura de datos y algoritmos entre otros. Además, he explorado patrones de diseño para el desarrollo de software. Integré este conocimiento con frameworks como Spring para aplicaciones Java empresariales, así como con tecnologías modernas como React para el desarrollo frontend y Node.js para el desarrollo de backend.</p>
              <div class="d-flex card-body">
                <a class="d-none d-md-flex me-2 align-self-center" href="http://www.oaxaca.tecnm.mx/">
                  <img src={logo2} alt="Technological Institute Of Oaxaca" class="m-auto" style={{ height: '80px', width: '80px' }} />
                </a>
                <div class="flex-grow-1">
                  <p style={{ color: '#143ba5' }}><b>Técnico en Ofimática</b></p>
                  <span style={{ fontSize: '15px', color: '#143ba5', fontWeight: '600' }}>Agosto 2015 - Julio 2018</span>
                  <p className='mb-0'>@ Centro de Bachillerato Industrial y de Servicios 259</p>
                </div>
              </div>
              <p class="card-body">A través de mi formación técnica en Ofimática, he desarrollado habilidades sólidas en el manejo de paqueterías de office, bases de datos, redes, algoritmos y pseudocódigo.</p>

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