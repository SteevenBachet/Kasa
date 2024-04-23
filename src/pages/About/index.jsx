import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import '../../styles/pages/about/about.css';

function About() {
  const aboutFiabilite = [
    "Fiabilité", "Les annonces postées sur Kasa garantissent un fiabilité totale, les photos sont conforme aux logement, et toutes les informations sont régulièrement vérifiées par nos équipes."
  ]
  const aboutRespect = [
    "Respect", "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement descriminatoire ou de perturbation du voisinage entraînera un exclusion de notre plateforme"
  ]
  const aboutService = [
    "Service", "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement descriminatoire ou de perturbation du voisinage entraînera un exclusion de notre plateforme"
  ]
  const aboutSecurite = [
    "Sécurité", "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspondent au critères de sécurité établis pas nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes"
  ]
  
  return (
    <div className="about">
      <Banner />
      <Collapse collapseList={aboutFiabilite}/>
      <Collapse collapseList={aboutRespect}/>
      <Collapse collapseList={aboutService}/>
      <Collapse collapseList={aboutSecurite}/>
    </div>
  );
}

export default About;
