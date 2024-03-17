import './App.css';
import React, { useState } from 'react';
import profileImg from './perfil.jpg';
import logo from './logo.png';

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
        <div id="custom-styles" className='bg-white p-4 mb-4'>
          <div className="pb-5" style={{ textAlign: 'justify' }}>
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
              <p class="card-body">I'm a graduate Computer Systems Engineer with a specialization in Emerging Technologies. In my career, I learned about the fundamentals of computer science, software development, and emerging technologies such as Artificial Intelligence, Augmented Reality, and Virtual Reality.</p>


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