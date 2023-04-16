import React from "react";
import "./styles.css";

function LandingPage() {
  return (
    <div>
      <nav className="navbar">
        <img src="https://jafermelquiades.files.wordpress.com/2023/03/local-farm.jpg" height="70" alt="logo" />
      </nav>

      <div className="button-section">
        <button className="button">Geolocalización ganadera</button>
        <button className="button">Delimitación por área</button>
        <button className="button">Mi cuenta</button>
      </div>

      <section className="main-section">
        <div className="overlay">
          <div className="section-content">
            <h2>Cuida tu ganado con tecnología de punta</h2>
            <h3>Geolocalización ganadera</h3>
            <button className="cta-button">Ir ahora</button>
          </div>
        </div>
      </section>

      <section className="secondary-section">
        <div className="overlay1">
          <div className="section-content1">
            <h2>Delimita tus propiedades de forma facil y rapida</h2>
            <h3>Ubicación por dron</h3>
            <button className="cta-button">Ir ahora</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;




