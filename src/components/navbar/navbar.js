import React from "react"
import './navbar.css';
import {NavDropdown , Container ,Nav , Navbar } from 'react-bootstrap';



const NavBar = () =>
{
  return(
    <div>
      <Navbar bg="light" expand="lg">
          <Container className="nav">
            <Navbar.Brand href="#home">Mahdi Khayat</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Project</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  );
}

export default NavBar;