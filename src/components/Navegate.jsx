import React from 'react';
import './Style.css';

const Navigation = () => {
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
          <li className="navbar-item"><a href="/about" className="navbar-link">About</a></li>
          <li className="navbar-item"><a href="/dashboard" className="navbar-link">Dashboard</a></li>
          <li className="navbar-item"><a href="/formulario" className="navbar-link">Formulario</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;