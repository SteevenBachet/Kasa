import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './styles/index/index.css';
import Footer from './components/Footer';

const reponse = await fetch("http://localhost:3000/info.json");
const houses = await reponse.json();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home houses={houses}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
    <Footer />
  </React.StrictMode>
);