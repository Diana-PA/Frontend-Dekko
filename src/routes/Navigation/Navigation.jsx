import { Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../Context/user/UserContext";
import logo from "../../images/logo.JPG";

const Navigation = () => {
  const { signOut, authStatus } = useContext(UserContext);

  return (
    <div className="ps-5">
      <Navbar expand="lg">
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Nav.Item className="ms-auto me-2">
          <Nav.Link title="Catálogo" as={NavLink} to="/catalogo">Catalogo</Nav.Link>
        </Nav.Item>
        <Nav.Item className="me-2 ms-2">
          <Nav.Link title="Carro de Compras" as={NavLink} to="/carrito">Carro</Nav.Link>
        </Nav.Item>
        {authStatus ? (
          <Button onClick={signOut} className="ms-2 me-3">
            Logout
          </Button>
        ) : (
          <Nav.Link>
            <NavDropdown.Item as={NavLink} to="/login">
              Login
            </NavDropdown.Item>
          </Nav.Link>
        )}
      </Navbar>
    </div>
  );
};
export default Navigation;
