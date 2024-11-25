import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Componentes/Header.js";
import Products from "./Componentes/Products.js";
import Candles from "./Componentes/Candles.js";
import Footer from "./Componentes/Footer.js";
import About from "./Componentes/About";
import Terms from "./Componentes/Terms";
import Privacy from "./Componentes/Privacy";
import Login from "./Componentes/Login"; // Importa el componente de Login

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      isAuthenticated: false,
      username: "",
    };
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };

  setAuthenticated = (authStatus, username = "") => {
    this.setState({ isAuthenticated: authStatus, username });
  };

  handleLogout = () => {
    this.setState({
      isAuthenticated: false,
      username: "",
    });
  };

  render() {
    const { darkMode, isAuthenticated } = this.state;

    return (
      <Router>
        <div className="App">
          <div className={`app ${darkMode ? "dark" : "light"}`}>
            <Header darkMode={darkMode} toggleDarkMode={this.toggleDarkMode} />
            <Routes>
              <Route
                path="/"
                element={
                  <Products
                    darkMode={darkMode}
                    isAuthenticated={isAuthenticated}
                    username={this.state.username}
                    handleLogout={this.handleLogout} 
                  />
                }
              />
              <Route path="/store" element={<Candles darkMode={darkMode} />} />
              <Route path="/about" element={<About darkMode={darkMode} />} />
              <Route path="/terms" element={<Terms darkMode={darkMode} />} />
              <Route
                path="/privacy"
                element={<Privacy darkMode={darkMode} />}
              />
              <Route
                path="/login"
                element={<Login setAuthenticated={this.setAuthenticated} />}
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
