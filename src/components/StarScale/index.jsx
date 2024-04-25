import '../../styles/components/banner/banner.css';
import star from '../../assets/Star.png';
import starActive from '../../assets/StarActive.png';

function StarScale({scaleValue}) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="housing__information__presentation__bloc-2__host__star">
      {range.map((rangeElem) =>  parseInt(scaleValue) >= rangeElem ? (
        <img src={starActive} alt="étoile de notation remplie"/>
      ) : <img src={star} alt="étoile de notation vide"/>
    )}
    </div>
  );
}

export default StarScale;
