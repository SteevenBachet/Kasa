import React from 'react';
import data from '../data/info.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>TEST</p>
        <p>{data.title}</p> {/* Utilisez les données du fichier JSON ici */}
        <p>{data.description}</p>
      </header>
    </div>
  );
}

export default App;
