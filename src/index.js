import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Error from './pages/Error';
import './styles/index/index.css';

const reponse = await fetch('http://localhost:3000/info.json');
const houses = await reponse.json();

const root = ReactDOM.createRoot(document.getElementById('root'));
/* contrôler la detection de l'id pour rediriger sur la page d'error si l'id est foireux !!!*/
/* pour la page d'herbergement => réutiliser le composant colapse de a propos et l'adapter pour l'affichage des différents types*/
/* Collapse about utiliser <collapse/> (fiabilité, sécurité ..) en props */
/* Carroussel=> superposer toutes les images en css et une seule doit être visible (opacity 0, opacity 1 si class .active) */
root.render(
  <React.StrictMode>
    <div className="container">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home houses={houses} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
    <Footer />
  </React.StrictMode>
);
