import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/Header.js';
import Productos from './Componentes/Productos.js';
import Footer from './Componentes/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Productos />
      <Footer />
    </div>
  );
}

export default App;