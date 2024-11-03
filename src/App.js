import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Componentes/Header.js";
import Productos from "./Componentes/Productos.js";
import Footer from "./Componentes/Footer.js";
import About from "./Componentes/About";
import Terms from "./Componentes/Terms";
import Privacy from "./Componentes/Privacy";

class App extends Component {
  constructor(props) {
    super(props);
    // Estado para controlar el modo oscuro
    this.state = {
      darkMode: false,
    };
  }

  // Función para alternar el modo
  toggleDarkMode = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };

  render() {
    const { darkMode } = this.state;

    return (
      <Router>
        <div className="App">
          <div className={`app ${darkMode ? "dark" : "light"}`}>
            <Header darkMode={darkMode} toggleDarkMode={this.toggleDarkMode} />
            <Routes>
              <Route path="/" element={<Productos darkMode={darkMode} />} />
              <Route path="/about" element={<About darkMode={darkMode} />} />
              <Route path="/terms" element={<Terms darkMode={darkMode} />} />
              <Route
                path="/privacy"
                element={<Privacy darkMode={darkMode} />}
              />
            </Routes>
            <Footer darkMode={darkMode} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
