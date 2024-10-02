import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();

  const logout = () => {
    // Elimina el estado del usuario en localStorage o sessionStorage según tu implementación
    localStorage.removeItem("usuarioLogueado"); // Cambié sessionStorage a localStorage
    setUsuarioLogueado(false); // Cambié a false para representar el estado de no logueado
    navegacion("/"); // Redirige a la página principal
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="logo Rolling Coffee"
            className="img-fluid"
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to="/">
              Inicio
            </NavLink>
            {usuarioLogueado ? ( // Cambié la condición para verificar el estado booleano
              <>
                <NavLink end className="nav-link" to="/administrador">
                  Administrador
                </NavLink>
                <Button variant="outline-danger" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <NavLink end className="nav-link" to="/login">
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
