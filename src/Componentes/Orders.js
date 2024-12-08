import React, { useState, useEffect } from "react";
import axios from "axios";
import URLPHP from "./Url";

function Orders({ idUsuario, darkMode }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!idUsuario) return;

    const fetchOrders = async () => {
      try {
        const response = await axios.post(URLPHP + "getOrders.php", {
          id_usuario: idUsuario,
        });
        setOrders(response.data);
      } catch (err) {
        setError("Hubo un problema al recuperar tus pedidos. Intenta más tarde.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [idUsuario]);

  if (loading) {
    return (
      <div className={`orders-container ${darkMode ? "dark" : "light"}`}>
        <p>Cargando tus pedidos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`orders-container ${darkMode ? "dark" : "light"}`}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={`orders-container ${darkMode ? "dark" : "light"}`}>
      <h2>Mis Pedidos</h2>
      {orders.length === 0 ? (
        <p>No tienes pedidos realizados.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order, i) => (
            <div key={order.id_pedido} className="order-card">
              <h3>Pedido #{i+1}</h3>
              <p><strong>Fecha:</strong> {order.fecha_venta}</p>
              <p><strong>Total:</strong> ${typeof order.total === "number" ? order.total.toFixed(2) : parseFloat(order.total || 0).toFixed(2)}</p>
              <p><strong>Estado:</strong> {order.estado}</p>
              <h4>Productos:</h4>
              <ul>
                {order.productos.map((producto) => (
                  <li key={producto.id_vela}>
                    {producto.nombre} - {producto.cantidad} unidad(es)
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;