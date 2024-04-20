import { Link } from 'react-router-dom';
import '../../styles/components/nav/nav.css';
import logo from '../../assets/LOGO.png';

function Nav() {
  return (
    <nav className="nav">
      <img className="nav__logo" src={logo} alt="Logo de l'entreprise Kasa" />
      <div className="nav__button-container">
        <Link className="nav__button" to="/">
          Accueil
        </Link>
        <Link className="nav__button" to="/about">
          A Propos
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
