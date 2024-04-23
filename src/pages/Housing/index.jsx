import '../../styles/pages/housing/housing.css';

function Housing() {
  return (
    <div className="housing">
      <div className="housing__carrousel"></div>
      <div className="housing__container">
        <div className="housing__bloc-1">
          <div className='housing__bloc-1__item'>
            <h1 className="housing__bloc-1__title">LA LIEUX COSY</h1>
            <p className="housing__bloc-1__txt">test de la localisation</p>
          </div>
          <p className="housing__bloc-1__name">LE PRENOM du proprio</p>

        </div>
        <div className="housing__bloc-2">
            <div className='housing__bloc-2__item'>
              <div>Cozy</div>
              <div>Canal</div>
              <div>Paris 10</div>
            </div>
            <div className='housing__bloc-2__star'>ETOILE</div>
        </div>
        <div className="housing__bloc-3">
            <div>COLLAPSE 1</div>
            <div>COLLAPSE 2</div>
        </div>
        
      </div>
    </div>
  );
}

export default Housing;
