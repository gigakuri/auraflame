import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import URLPHP from "./Url";
import { Form, FormGroup, Input, Button, Alert, Container } from "reactstrap";

function Register() {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar si las contraseñas coinciden
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return;
    }

    axios
      .post(URLPHP + "insertUsuario.php", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.error(error.response?.data?.message || "Error al registrar");
        setError(error.response?.data?.message || "Error al registrar");
      });
  };

  return (
    <Container className="register-container">
      <h2>Registro</h2>
      {error && (
        <Alert color="danger" fade={false}>
          {error}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Nombre"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirmar contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </Container>
  );
}

export default Register;