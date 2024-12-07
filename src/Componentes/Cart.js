import React from "react";
import { Link } from "react-router-dom";

function Cart({ cartItems = [], removeFromCart, clearCart }) {
  // Asegurándonos de que cartItems siempre es un array
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handlePayment = () => {
    // Lógica de pago (actualmente solo muestra un mensaje)
    console.log("Pago realizado con éxito. ¡Gracias por tu compra!");
    clearCart();
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
            <button onClick={handlePayment} className="pay-button">
              Pagar
            </button>
          </div>
        </>
      )}
      <Link to="/" className="continue-shopping">
        Continuar comprando
      </Link>
    </div>
  );
}

export default Cart;
