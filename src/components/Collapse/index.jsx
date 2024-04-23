import { useState } from 'react';
import '../../styles/components/collapse/collapse.css';
import WhiteArrow from '../../assets/WhiteArrow.png';

function Collapse({ collapseList }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__item">
        <p className="collapse__txt">{collapseList[0]}</p>
        <button className={`collapse__button ${isOpen ? 'active' : ''}`} onClick={toggleCollapse}>
          <img
            className={`collapse__image ${isOpen ? 'open' : ''}`}
            src={WhiteArrow}
            alt="Flèche"
          />
        </button>
        <div className={`collapse__window ${isOpen ? 'active' : ''}`}>
          <p className='collapse__window__txt'>{collapseList[1]}</p>
          </div>
      </div>
    </div>
  );
}

export default Collapse;