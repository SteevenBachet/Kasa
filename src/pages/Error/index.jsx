import { Link } from 'react-router-dom';
import '../../styles/pages/error/error.css';

function Error() {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <p className="error__txt">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className={'error__button'} to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
