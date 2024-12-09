import React from "react";
import { useNavigate } from "react-router-dom";

function Profile({ setAuthenticated, darkMode, username, email }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthenticated(false, "");
    navigate("/");
  };

  return (
    <div className={`profile-page ${darkMode ? "dark" : "light"}`}>
      <div className="profile-container">
        <h1>Perfil de Usuario</h1>
        <p>
          Bienvenido/a, {username ? username : "Usuario desconocido"}. Aquí puedes ver tu información.
        </p>
        <p><strong>Correo:</strong> {email ? email : "No disponible"}</p>
        <button onClick={handleLogout} className="logout-button">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}

export default Profile;