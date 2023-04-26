
import * as React from 'react';
import { Nav, Navbar, Button, Form, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../Context/user/UserContext';
import SearchIcon from '@mui/icons-material/Search';
import { teal } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import logo from '../../images/logo.JPG';

import Carrito from '../../Context/Carrito/Carrito';




const Navigation = () => {

      const { signOut, authStatus } = useContext(UserContext)


      //const { name, email } = infoUser

      return (
            <div className="ps-5">
                  <Navbar expand="lg">
                        <Navbar.Brand href="/">
                              <img
                                    src={logo}
                                    width="70"
                                    height="70"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                              />
                        </Navbar.Brand>

                        <NavDropdown title='Catálogo'>
                              <NavDropdown.Item as={NavLink} to="/catalogo" href="/Catalogo">Catalogo</NavDropdown.Item>
                              <NavDropdown.Item as={NavLink} to="/bebe" href="/SumaBebe">
                                    Bebé
                              </NavDropdown.Item>
                              <NavDropdown.Item as={NavLink} to="/perfil">Perfil</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item as={NavLink} to="/migas">Migas</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item as={NavLink} to="/construccion">Construccion</NavDropdown.Item>
                              <NavDropdown.Item as={NavLink} to="/prueba">Prueba</NavDropdown.Item>
                        </NavDropdown>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                    <Form className="d-flex">
                                          <Form.Control
                                                type="search"
                                                placeholder="Buscar"
                                                className="me-1"
                                                aria-label="Buscar"
                                          />
                                          <IconButton
                                                aria-label="close"
                                                color="inherit"
                                                size="large"
                                                sx={{ color: teal[50] }}
                                          >
                                                <SearchIcon fontSize="inherit" />
                                          </IconButton>
                                    </Form>

                                    <Nav.Link  >
                                          <React.Fragment>
                                                <Carrito />
                                          </React.Fragment>
                                    </Nav.Link>

                                    <NavDropdown title='Desarrollo'>
                                          <NavDropdown.Item as={NavLink} to="/Checkout">Checkout</NavDropdown.Item>
                                          <NavDropdown.Item as={NavLink} to="/Pago">Pago</NavDropdown.Item>
                                          <NavDropdown.Item as={NavLink} to="/perfil">Perfil</NavDropdown.Item>
                                          <NavDropdown.Divider />
                                          <NavDropdown.Item as={NavLink} to="/migas">Migas</NavDropdown.Item>
                                          <NavDropdown.Divider />
                                          <NavDropdown.Item as={NavLink} to="/construccion">Construccion</NavDropdown.Item>
                                          <NavDropdown.Item as={NavLink} to="/prueba">Logout</NavDropdown.Item>
                                    </NavDropdown>
                              </Nav>
                              <Nav>
                                    {authStatus ? <Button onClick={signOut} className="me-3">Logout</Button> : <Nav.Link  >
                                          <NavDropdown.Item as={NavLink} to="/login" href="/Login1">Login</NavDropdown.Item>
                                    </Nav.Link>}
                              </Nav>
                        </Navbar.Collapse>
                  </Navbar>
            </div>
      );
}
export default Navigation;
