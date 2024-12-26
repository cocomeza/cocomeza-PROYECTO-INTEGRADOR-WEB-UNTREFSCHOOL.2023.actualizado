import React from "react";

const AcademicOffer = () => (
  <section id="academic-offer" className="py-5">
    <h3 className="text-center">Nuestra Oferta Académica</h3>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img src="./images/course1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Carrera de Ingeniería</h5>
            <p className="card-text">
              Formación completa para futuros ingenieros.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src="./images/course2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Licenciatura en Ciencias</h5>
            <p className="card-text">
              Explora las ciencias con un enfoque moderno.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src="./images/course3.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Diplomaturas</h5>
            <p className="card-text">
              Cursos especializados de corta duración.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AcademicOffer;
