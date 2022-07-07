import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {Outlet, Link} from "react-router-dom";
const NavbarExample = () => {
  return (
    <>
      <Navbar fixed="top" bg="transparent" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">MC COMPANY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/proyectos">Proyectos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default NavbarExample;
