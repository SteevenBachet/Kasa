import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Error from './pages/Error';
import './styles/index/index.css';

const reponse = await fetch('http://localhost:3000/info.json');
const houses = await reponse.json();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className="container">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home houses={houses} />} />
          <Route path="/housing/:id" element={<Housing houses={houses} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
    <Footer />
  </React.StrictMode>
);
