import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Componentes/Header.js";
import Products from "./Componentes/Products.js";
import Candles from "./Componentes/Candles.js";
import Footer from "./Componentes/Footer.js";
import About from "./Componentes/About";
import Terms from "./Componentes/Terms";
import Privacy from "./Componentes/Privacy";
import Login from "./Componentes/Login";
import Profile from "./Componentes/Profile.js";
import Cart from "./Componentes/Cart";
import Orders from "./Componentes/Orders.js";
import Register from "./Componentes/Register.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      isAuthenticated: false,
      username: "",
      email: "",
      idUsuario: 13,
      rol: "",
      cartCount: 0,
      cartItems: [],
    };
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };

  setAuthenticated = (authStatus, username = "", idUsuario = 13, rol = "",  email = "") => {
    this.setState({ isAuthenticated: authStatus, username, idUsuario, rol, email });
  };

  handleLogin = (idUsuario) => {
    this.setState({ idUsuario, isAuthenticated: true });
  };

  handleLogout = () => {
    this.setState({
      isAuthenticated: false,
      username: "",
    });
  };

  addToCart = (product) => {
    this.setState((prevState) => {
      // Buscar si el producto ya está en el carrito usando id_vela
      const existingProduct = prevState.cartItems.find(
        (item) => item.id_vela === product.id_vela
      );

      if (existingProduct) {
        // Si el producto ya existe, incrementar la cantidad
        return {
          cartItems: prevState.cartItems.map((item) =>
            item.id_vela === product.id_vela
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          cartCount: prevState.cartCount + 1, // Incrementar total de productos
        };
      } else {
        // Si el producto no existe, agregarlo al carrito
        return {
          cartItems: [
            ...prevState.cartItems,
            { ...product, quantity: 1 }, // Copia los datos del producto
          ],
          cartCount: prevState.cartCount + 1, // Incrementar total de productos
        };
      }
    });
  };

  removeFromCart = (id_vela) => {
    this.setState((prevState) => {
      // Producto a eliminar
      const productToRemove = prevState.cartItems.find(
        (item) => item.id_vela === id_vela
      );

      // Si el producto existe en el carrito
      if (productToRemove) {
        // Resta la cantidad de productos que estamos eliminando del total
        const newCartCount = prevState.cartCount - productToRemove.quantity;

        // Elimina el producto del carrito
        const updatedCartItems = prevState.cartItems.filter(
          (item) => item.id_vela !== id_vela
        );

        // Devuelve el nuevo estado
        return {
          cartCount: newCartCount,
          cartItems: updatedCartItems,
        };
      }

      // Si el producto no se encuentra
      return prevState;
    });
  };

  clearCart = () => {
    this.setState({
      cartItems: [],
      cartCount: 0,
    });
  };

  render() {
    const { darkMode, isAuthenticated, cartCount } = this.state;

    return (
      <Router>
        <div className="App">
          <div className={`app ${darkMode ? "dark" : "light"}`}>
            <Header
              darkMode={darkMode}
              toggleDarkMode={this.toggleDarkMode}
              isAuthenticated={isAuthenticated}
              username={this.state.username}
              idUsuario={this.state.idUsuario}
              handleLogout={this.handleLogout}
            />
            <div id="carrito">
              <span>
                <Link to="/cart">Carrito ({cartCount}) 🛒</Link>
              </span>
            </div>
            <Routes>
              <Route
                path="/"
                element={
                  <Products
                    darkMode={darkMode}
                    addToCart={this.addToCart}
                    cartCount={cartCount}
                  />
                }
              />
              <Route
                path="/store"
                element={
                  <Candles
                    darkMode={darkMode}
                    addToCart={this.addToCart}
                    cartCount={cartCount}
                    isAuthenticated={isAuthenticated}
                    rol={this.state.rol}
                  />
                }
              />
              <Route
                path="/cart"
                element={
                  <Cart
                    darkMode={darkMode}
                    cartCount={cartCount}
                    cartItems={this.state.cartItems}
                    removeFromCart={this.removeFromCart}
                    clearCart={this.clearCart}
                    idUsuario={this.state.idUsuario}
                  />
                }
              />
              <Route
                path="/orders"
                element={
                  <Orders
                    darkMode={darkMode}
                    idUsuario={this.state.idUsuario}
                  />
                }
              />
              <Route
                path="/privacy"
                element={<Privacy darkMode={darkMode} />}
              />
              <Route
                path="/login"
                element={
                  <Login
                    setAuthenticated={this.setAuthenticated}
                    darkMode={darkMode}
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <Register
                    setAuthenticated={this.setAuthenticated}
                    darkMode={darkMode}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    setAuthenticated={this.setAuthenticated}
                    darkMode={darkMode}
                    username={this.state.username}
                    email={this.state.email}
                  />
                }
              />
              <Route path="/about" element={<About darkMode={darkMode} />} />
              <Route path="/terms" element={<Terms darkMode={darkMode} />} />
            </Routes>
            <Footer darkMode={darkMode} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
