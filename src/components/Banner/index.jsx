import introContainer from '../../assets/introContainer.png';
import '../../styles/components/banner/banner.css';

function Banner() {
    return <div className="banner">
    <img
      className="banner__image"
      src={introContainer}
      alt="falaise de bord de mer"
    />
    <h1 className="banner__text-overlay">Chez vous, partout et ailleurs</h1>
  </div>
}

export default Banner