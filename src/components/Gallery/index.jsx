import '../../styles/components/gallery/gallery.css';

function Gallery({ houses }) {
  return (
    <div className="gallery">
      {houses.map((house) => (
        <div key={house.id} className="gallery__item">
          <img className="gallery__image" src={house.cover} alt={house.title} />
          <h3 className="gallery__text-overlay">{house.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
