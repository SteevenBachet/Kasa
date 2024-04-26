import '../../styles/components/gallery/gallery.css';
import { Link } from 'react-router-dom';

function Gallery({ houses }) {
  return (
    <div className="gallery">
      {houses.map((house) => (
        <Link
          key={house.id}
          className="gallery__item"
          to={`/housing/${house.id}`}
        >
          <img
            className="gallery__item__image"
            src={house.cover}
            alt={house.title}
          />
          <h3 className="gallery__item__text-overlay">{house.title}</h3>
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
