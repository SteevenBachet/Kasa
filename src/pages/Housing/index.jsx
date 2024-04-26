import { useParams, Navigate } from 'react-router-dom';
import Carrousel from '../../components/Carrousel';
import Collapse from '../../components/Collapse';
import StarScale from '../../components/StarScale';
import '../../styles/pages/housing/housing.css';

function Housing({ houses }) {
  /* Récuperer l'id de l'url et trouver la maison qui correspond */
  const { id } = useParams();
  const selectedHouse = houses.find((house) => house.id === id);

  /* Redirection vers la page d'error si nous avons pas récuperer le bon ID */
  if (!selectedHouse) {
    return <Navigate to="/error" />;
  }

  console.log(selectedHouse);

  return (
    <div className="housing">
      <Carrousel selectedHouse={selectedHouse} />

      <div className="housing__information">
        <div className="housing__information__presentation">
          <div className="housing__information__presentation__bloc-1">
            <h1 className="housing__information__presentation__bloc-1__txt">
              {selectedHouse.title}
            </h1>
            <p className="housing__information__presentation__bloc-1__location">
              {selectedHouse.location}
            </p>
            <div className="housing__information__presentation__bloc-1__tags">
              {selectedHouse.tags.map((tag) => (
                <div className="housing__information__presentation__bloc-1__tags__tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="housing__information__presentation__bloc-2">
            <div className="housing__information__presentation__bloc-2__host">
              <p className="housing__information__presentation__bloc-2__host__name">
                {selectedHouse.host.name}
              </p>
              <img
                className="housing__information__presentation__bloc-2__host__picture"
                src={selectedHouse.host.picture}
                alt="profil du propriétaire"
              />
            </div>

            <StarScale scaleValue={selectedHouse.rating} />
          </div>
        </div>

        <div className="housing__information__collapse">
          <Collapse
            name="Description"
            collapseList={selectedHouse.description}
          />
          <Collapse
            name="Équipements"
            collapseList={selectedHouse.equipments}
          />
        </div>
      </div>
    </div>
  );
}

export default Housing;
