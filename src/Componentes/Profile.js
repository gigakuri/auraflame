import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Profile({ setAuthenticated, darkMode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = location.state || {};

  const handleLogout = () => {
    setAuthenticated(false, "");
    navigate("/");
  };

  return (
    <div className={`profile-page ${darkMode ? "dark" : "light"}`}>
      <div className="profile-container">
        <h1>Perfil de Usuario</h1>
        <p>Bienvenido/a, {username ? username : "Usuario desconocido"}. Aquí puedes ver y actualizar tu información.</p>
        <button onClick={handleLogout} className="logout-button">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}

export default Profile;