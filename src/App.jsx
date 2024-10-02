import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Administrador from "./components/pages/Administrador";
import DetalleReceta from "./components/pages/DetalleReceta";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);

  // el estado de inicio de sesión
  useEffect(() => {
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    if (usuarioGuardado) {
      setUsuarioLogueado(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      />
      <Routes>
        <Route path="/" element={<Inicio />} />

        {/* Rutas protegidas */}
        <Route
          path="/administrador"
          element={
            usuarioLogueado ? (
              <Administrador />
            ) : (
              <Login setUsuarioLogueado={setUsuarioLogueado} />
            )
          }
        />
        <Route
          path="/detalle-receta/:id"
          element={
            usuarioLogueado ? (
              <DetalleReceta />
            ) : (
              <Login setUsuarioLogueado={setUsuarioLogueado} />
            )
          }
        />

        {/* Ruta para el Login */}
        <Route
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
        />

        {/* Ruta para el error 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
