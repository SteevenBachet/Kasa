import Nav from '../../components/Nav';
import '../../styles/pages/error/error.css';

function Error() {
  return (
    <div className="error">
      <Nav />
      <h1 className='error__title'>404</h1>
      <p className='error__txt'>Oups! La page que vous demandez n'existe pas.</p>
    </div>
  );
}

export default Error;
