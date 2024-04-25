import { useState } from 'react';
import '../../styles/components/collapse/collapse.css';
import WhiteArrow from '../../assets/WhiteArrow.png';

function Collapse({ name, collapseList }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__item">
        <p className="collapse__item__txt">{name}</p>
        <button
          className={`collapse__item__button ${isOpen ? 'active' : ''}`}
          onClick={toggleCollapse}
        >
          <img
            className={`collapse__item__button__image ${isOpen ? 'open' : ''}`}
            src={WhiteArrow}
            alt="Flèche"
          />
        </button>
        <div className={`collapse__item__window ${isOpen ? 'active' : ''}`}>
          {Array.isArray(collapseList) ? (
            <ul className="collapse__item__window__txt">
              {collapseList.map((info) => (
                <li>{info}</li>
              ))}
            </ul>
          ) : (
            <p className="collapse__item__window__txt">{collapseList}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
