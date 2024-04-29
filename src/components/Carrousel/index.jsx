import { useState } from 'react';
import WhiteArrow from '../../assets/WhiteArrow2.png';
import '../../styles/components/carrousel/carrousel.css';

function Carrousel({ selectedHouse }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLeftButtonClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? selectedHouse.pictures.length - 1 : prevIndex - 1
    );
  };

  const handleRightButtonClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === selectedHouse.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carrousel">
      <div className="carrousel__container">
        <div className="carrousel__container__pictures">
          {selectedHouse.pictures.map((picture, index) => (
            <img
              key={index}
              className={`carrousel__container__pictures__picture ${
                index === activeIndex ? 'active' : ''
              }`}
              src={picture}
              alt="une des images du carrousel"
            />
          ))}
        </div>
        {selectedHouse.pictures.length > 1 && (
          <>
            <button
              className="carrousel__container__buttons button-left"
              onClick={handleLeftButtonClick}
            >
              <img
                className="carrousel__container__buttons__image"
                src={WhiteArrow}
                alt="Flèche de navigation carrousel vers la gauche"
              />
            </button>
            <button
              className="carrousel__container__buttons button-right"
              onClick={handleRightButtonClick}
            >
              <img
                className="carrousel__container__buttons__image"
                src={WhiteArrow}
                alt="Flèche de navigation carrousel vers la droite"
              />
            </button>
          </>
        )}
        <p className="carrousel__container__counter">
          {activeIndex + 1 + '/' + selectedHouse.pictures.length}
        </p>
      </div>
    </div>
  );
}

export default Carrousel;
