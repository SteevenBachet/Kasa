import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/nav/nav.css';
import logo from '../../assets/LOGO.png';

function Nav() {
  const location = useLocation();

  return (
    <nav className="nav">
      <img className="nav__logo" src={logo} alt="Logo de l'entreprise Kasa" />
      <div className="nav__button-container">
        <Link
          className={`nav__button-container__button ${
            location.pathname === '/' ? 'active' : ''
          }`}
          to="/"
        >
          Accueil
        </Link>
        <Link
          className={`nav__button-container__button ${
            location.pathname === '/about' ? 'active' : ''
          }`}
          to="/about"
        >
          A Propos
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
