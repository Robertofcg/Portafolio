import './App.css';
import React from 'react';
import profileImg from './perfil.jpg';


function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e6e7e8' }}>
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse justify-content-center text-uppercase" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#home">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#resume">Resume</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
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
              <div className="row intro-text d-flex justify-content-center text-center">
                <h1 className="intro-tx1">Roberto Carlos Rendón Peláez</h1>
                <h3 className="fs-1 texto-Area">FULL STACK WEB DEVELOPER</h3>
                <span className="fs-5">HTML/CSS | Bootstrap | Javascript | React | Spring Framework | NodeJs | Java</span>
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
