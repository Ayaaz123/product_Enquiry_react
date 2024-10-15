// src/App.js
import React from "react";
import { Container, Navbar, Nav, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="custom-navbar">
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

      <Container className="hero-section text-center">
        <Row className="align-items-center">
          <Col md={6} className="text-area">
            <h1>Welcome to My E-Commerce</h1>
            <p className="lead">Ayaaz Product enquiry E-commerce platform.</p>
            <Button variant="primary" size="lg" className="mt-3">
              Shop Now
            </Button>
          </Col>
          <Col md={6}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/029/847/467/large_2x/hd-wallpaper-beautiful-scenery-ultra-hd-sunset-wallpapers-top-hd-landscape-green-background-4k-8k-16k-high-resolution-and-cinematicgraphy-ai-generated-photo.jpg"
              alt="E-commerce"
              className="img-fluid hero-image"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
