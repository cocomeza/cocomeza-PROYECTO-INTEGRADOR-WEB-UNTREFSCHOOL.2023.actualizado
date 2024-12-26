import React from "react";
import Header from "./components/Header";
import Header from "./components/Main";
import AcademicOffer from "./components/AcademicOffer";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Header />
    <main className="container py-5">
      <section id="welcome" className="text-center">
        <h2>Bienvenido a Untref School</h2>
        <p className="lead">
          La mejor educación para el futuro de nuestros estudiantes.
        </p>
      </section>
      <AcademicOffer />
    </main>
    <Footer />
  </>
);

export default App;
