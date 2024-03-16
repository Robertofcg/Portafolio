import './App.css';
import React, { useState } from 'react';
import profileImg from './perfil.jpg';
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar style={{ background: '#2d3748' }} expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
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
                {/* Reemplaza el elemento SVG con la imagen */}
                <div className="d-flex justify-content-center">
                  <img src={profileImg} alt="Profile" className="img-responsive profile-img home-img shadow" />
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
        <div id="custom-styles" className='bg-white p-4 mb-4'>
          <div class="pb-5">
            <p className='fs-5'>Hola 👋,soy graduado de la carrera de Ingeniería en Sistemas Computacionales con una pasión por la tecnología y el desarrollo de software. Soy de México del estado de Oaxaca. Me especializo en Tecnologías De Software Emergente y tengo más de 1 año de experiencia en el campo.</p>
            <p className='fs-5'>Me caracterizo por ser <strong>amable, responsable y comprometido </strong>, con una fuerte <strong>ética de trabajo</strong> y una <strong>actitud proactiva</strong>. Constantemente busco aprender y mejorar mis habilidades técnicas para enfrentar nuevos desafíos.</p>
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
              <a className="snlnk" href="https://github.com/MarcosNSouza87">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;