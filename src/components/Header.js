import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid menu">
          <a className="navbar-center" href="#">
            <img src="./multimedia/img/logo_1.png" alt="logo" />
          </a>
          <h1 className="titulo">UntrefSchool University</h1>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Institucional
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Oferta Académica
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
