import { useState } from 'react';
import '../../styles/components/collapse/collapse.css';
import WhiteArrow from '../../assets/WhiteArrow.png';

function Collapse() {
  const collapseList = ['Fiabilité', 'Respect', 'Service', 'Sécurité'];
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="collapse">
      {collapseList.map((collapse, index) => (
        <div key={index} className="collapse__item">
          <p className="collapse__txt">{collapse}</p>
          <button
            className={`collapse__button ${openIndex === index ? 'collapse__open' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img className="collapse__image" src={WhiteArrow} alt="Flèche" />
          </button>
          <div className={`collapse__window ${openIndex === index ? 'active' : ''}`}>
            Contenu de {collapse}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collapse;