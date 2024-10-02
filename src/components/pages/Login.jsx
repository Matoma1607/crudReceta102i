import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Login = ({ setUsuarioLogueado }) => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Validaciones
    if (!usuario || !contrasena) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor completa todos los campos",
      });
      return;
    }

    if (usuario === "admin" && contrasena === "admin") {
      localStorage.setItem("usuarioLogueado", true);
      setUsuarioLogueado(true);
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Bienvenido de nuevo!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Usuario o contraseña incorrectos",
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>Iniciar Sesión</Card.Title>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Iniciar Sesión
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
