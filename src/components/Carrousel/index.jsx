import WhiteArrow from '../../assets/WhiteArrow2.png';
import '../../styles/components/carrousel/carrousel.css';

function Carrousel({selectedHouse}) {
    return <div className="carrousel">
    <div className="carrousel__container">
      <div className="arrousel__container__pictures">
        {selectedHouse.pictures.map((picture) => (
          <img
            className="carrousel__container__pictures__picture"
            src={picture}
            alt="une des images du carrousel"
          />
        ))}
      </div>
      <button className="carrousel__container__buttons button-left">
        <img
          className="carrousel__container__buttons__image"
          src={WhiteArrow}
          alt="Flèche de navigation carrousel"
        />
      </button>
      <button className="carrousel__container__buttons button-right">
        <img
          className="carrousel__container__buttons__image"
          src={WhiteArrow}
          alt="Flèche de navigation carrousel"
        />
      </button>
    </div>
  </div>
}

export default Carrousel