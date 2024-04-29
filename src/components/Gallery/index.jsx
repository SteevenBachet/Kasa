import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/gallery/gallery.css';

function Gallery({ houses }) {
  return (
    <div className="gallery">
      {houses.map((house) => (
        <Link
          key={house.id}
          className="gallery__item"
          to={`/housing/${house.id}`}
        >
          <div className="gallery__item__overlay"></div> 
          
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