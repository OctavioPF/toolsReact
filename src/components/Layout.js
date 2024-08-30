// src/components/Layout.js
import React from "react";
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>My Personal Platform</header>
      <div className={styles.container}>
        <nav className={styles.sidebar}>
          <ul>
            <li>To-Do List</li>
            <li>Conversor de Moneda</li>
            <li>Perfil</li>
            <li>Reloj y Temporizador</li>
            <li>Juego de Memoria</li>
            <li>Blog</li>
          </ul>
        </nav>
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
