import { Link } from 'react-router-dom';
import '../../styles/components/nav/nav.css';
import logo from '../../assets/LOGO.png';

function Nav() {
  return (
    <nav>
      <img src={logo} alt="" />
      <div className="button-container">
        <Link className="nav-button" to="/">
          Accueil
        </Link>
        <Link className="nav-button" to="/about">
          A Propos
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
