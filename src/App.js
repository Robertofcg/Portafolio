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

      <section className="home" style={{ padding: '20px 0' }}>
        <div className="container" id="maincontent">
          <div className="row">
            <div className="col-lg-12">
              <div className="row d-flex justify-content-center">
                <div className="row d-flex justify-content-center">
                  {/* Reemplaza el elemento SVG con la imagen */}
                  <div className="d-flex justify-content-center">
                    <img src={profileImg} alt="Profile" className="img-responsive profile-img home-img shadow" />
                  </div>
                </div>
              </div>
              <div className="row intro-text d-flex justify-content-center text-center mt-3">
                <h1 className="intro-tx1">Roberto Carlos Rendón Peláez</h1>
                <h3 className="fs-1 texto-Area">FULL STACK WEB DEVELOPER</h3>
                <span className="fs-5">HTML/CSS | Bootstrap | Javascript | React | Spring Framework | NodeJs | Java</span>
              </div>
              <div className='bg-white mt-5 p-4'>
                <h1 class="fw-bold text-dark fs-4 fs-sm-2"> Hola soy<span class="text-primary fw-bold"> Ing. en Sistemas Computacionales</span>Hola soy Hola soy Hola soy Hola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soyHola soy</h1>

              </div>
              <div className="text-center margin-bottom-60">
                <ul className="social-networks spin-icon">
                  <li>
                    <a className="nav-link snlnk" href="https://www.facebook.com/markos.nunnes.87">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a className="nav-link snlnk" href="https://www.linkedin.com/in/marcos-nunes-de-souza-nipfhire">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a className="nav-link snlnk" href="https://github.com/MarcosNSouza87">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
