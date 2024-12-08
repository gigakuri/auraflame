import React, { useState }  from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import URLPHP from "./Url";
import { Spinner } from "reactstrap";

function Cart({ cartItems = [], removeFromCart, clearCart, idUsuario }) {
  const [loading, setLoading] = useState(false);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + (parseFloat(item.precio) || 0) * item.quantity,
    0
  );

  const handlePayment = () => {
    if (cartItems.length === 0) {
      console.log("Tu carrito está vacío. Añade productos antes de pagar.");
      return;
    }

    const estado = "Pendiente";

    setLoading(true);

    axios
      .post(URLPHP + "insertPedidos.php", {
        id_usuario: idUsuario,
        productos: cartItems.map((item) => ({
          id_vela: item.id_vela,
          cantidad: item.quantity,
        })),
        total: totalPrice,
        estado: estado,
      })
      .then((response) => {
        console.log(response.data);
        setTimeout(() => {
          clearCart();
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error al realizar la compra:", error);
        console.log("Ocurrió un error al procesar tu compra.");
      });
  };

  return (
    <div id="cart-container">
      <h2>Tu Carrito 🛒</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>No tienes productos en tu carrito.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id_vela} className="cart-item">
              <h4>{item.nombre}</h4>
              <p>{item.descripcion}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${parseFloat(item.precio).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id_vela)}>
                Eliminar
              </button>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="cart-summary">
            <h4>Total de artículos: {totalItems}</h4>
            <h4>Total a pagar: ${totalPrice.toFixed(2)}</h4>
            <button onClick={handlePayment} className="pay-button">
              Pagar
            </button>
          </div>
        </>
      )}
      <Link to="/" className="continue-shopping">
        Continuar comprando
      </Link>
      {loading && (
        <div className="overlay">
          <Spinner color="warning" style={{ width: "3rem", height: "3rem" }} />
        </div>
      )}
    </div>
  );
}

export default Cart;
