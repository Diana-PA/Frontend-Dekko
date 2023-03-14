
import * as React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';

import SearchIcon from '@mui/icons-material/Search';
import { teal } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import logo from '../../images/logo.JPG';

import Carrito from '../../pages/Carrito/Carrito';
import Login from '../../pages/Login/Login';

 
const  Navigation = () => {
 
 
   return (
  <div className="ps-5"> 
        <Navbar  expand="lg">
              <Navbar.Brand href="/">
                    <img
                      src={logo}
                      width="70"
                      height="70"
                      className="d-inline-block align-top"
                      alt="Logo"
                    />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  <Nav.Link as={NavLink}  to="/Catalogo">Catalogo</Nav.Link>
                  <Form className="d-flex">
                  <Form.Control
                      type="search"
                      placeholder="Buscar"
                      className="me-2"
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
                              <Login />
                        </React.Fragment>      
                  </Nav.Link>  
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
                        <NavDropdown.Item as={NavLink} to="/prueba">Prueba</NavDropdown.Item>
              </NavDropdown>
              </Nav>  
              </Navbar.Collapse>
        </Navbar>
  </div>
  );
}
export default Navigation;
