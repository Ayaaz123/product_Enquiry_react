// src/ProductInquiry.js
import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

export default function ProductInquiry() {
  const navigate = useNavigate();
  const location = useLocation();
  const submittedData = location.state;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.product) newErrors.product = "Product name is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      navigate(".", { state: formData });
      setShowAlert(true);
    }
  };

  return (
    <Container>
      <h2 className="text-center my-4">Product Inquiry Form</h2>

      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>Thank you for your inquiry!</Alert.Heading>
          <p>We have received your message and will respond shortly.</p>
        </Alert>
      )}

      <Form onSubmit={handleSubmit} className="p-4 border rounded shadow">
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formProduct">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="product"
            placeholder="Enter the product name"
            value={formData.product}
            onChange={handleChange}
            isInvalid={!!errors.product}
          />
          <Form.Control.Feedback type="invalid">
            {errors.product}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={4}
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Inquiry
        </Button>
      </Form>

      {submittedData && (
        <div className="mt-4">
          <h3>Submitted Details:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Product:</strong> {submittedData.product}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </Container>
  );
}
