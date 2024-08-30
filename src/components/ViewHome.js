import React from 'react';
import './ViewHome.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="intro">
        <h2>Bienvenido a React Tools</h2>
        <p>Impulsa tu productividad con nuestro conjunto de herramientas impulsadas por React, diseñadas para hacer tus tareas diarias más fáciles y eficientes.</p>
      </section>
      <section className="features">
        <h3>Nuestras Herramientas</h3>

        <div className="tool-cards">
          <div className="tool-card">
            <a className='linkHome' href='/todo'>
            <h4>Lista de Tareas</h4>
            <p>Organiza tus tareas y mantén tus prioridades bajo control.</p>
            </a>
          </div>

          <div className="tool-card">
          <a className='linkHome' href='/clock'>
            <h4>Reloj y Temporizador</h4>
            <p>Gestiona tu tiempo de manera efectiva con nuestro reloj y temporizador integrado.</p>
            </a>
          </div>

          <div className="tool-card">
          <a className='linkHome' href='/memory-game'>
            <h4>Juego de Memoria</h4>
            <p>Mejora tu memoria con nuestro divertido y desafiante juego.</p>
            </a>
          </div>
          
          <div className="tool-card">
          <a className='linkHome' href='/blog'>
            <h4>Blog</h4>
            <p>Comparte tus pensamientos e ideas con el mundo a través de tu blog.</p>
          </a>
          </div>
          <div className="tool-card">
          <a className='linkHome' href='/currency'>

            <h4>Convertidor de Moneda</h4>
            <p>Convierte monedas fácilmente con tasas de cambio actualizadas.</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
