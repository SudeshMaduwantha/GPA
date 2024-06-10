import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import '../components/input.css';

function Input({ placeholder, value, onChange, children }) {
  return (
    <Container fluid>
      <br />
      <Form className="d-flex Form-btn">
        <Form.Control
          type="text"
          placeholder={placeholder}
          className="me-2"
          value={value}
          onChange={onChange}
          aria-label={placeholder}
          maxLength={3}
        />
        {children}
      </Form>
    </Container>
  );
}

export default Input;
