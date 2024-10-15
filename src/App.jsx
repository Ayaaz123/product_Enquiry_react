import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/">Ayaaz E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/inquiry">Product Inquiry</Link>
            </Nav>
            <Button variant="outline-light" className="ms-2">
              Sign In
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="text-center">
        <h1 className="display-4">Welcome to My E-Commerce</h1>
        <p className="lead">
          Ayaaz Product enquriy E commerce platform.
        </p>
        <Button variant="primary" size="lg" className="mt-4">
          Shop Now
        </Button>
      </Container>
    </>
  );
}

export default App;

