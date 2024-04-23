import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import '../../styles/pages/home/home.css';

function Home({houses}) {

  
  return (
    <div className="home">
      <Banner/>
      <Gallery houses={houses}/>
    </div>
  );
}

export default Home;
