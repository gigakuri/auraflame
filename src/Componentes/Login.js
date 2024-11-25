import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  Container,
} from "reactstrap";
import axios from "axios";
import URLPHP from "./Url";

function Login({ setAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(URLPHP + "login.php", {
        email,
        password,
      });
  
      // Si la solicitud es exitosa
      if (response.status === 200) {
        const { username } = response.data;
        setAuthenticated(true, username);
        navigate("/"); // Redirige al usuario a la página principal
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Error en la autenticación");
      } else {
        setError("Ocurrió un error en el servidor");
      }
    }
  };

  return (
    <Container className="login-container">
      <h2>Iniciar Sesión</h2>
      {error && <Alert color="danger">{error}</Alert>}
      <Form onSubmit={handleLogin}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Contraseña</Label>
          <Input
            type="password"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
}

export default Login;