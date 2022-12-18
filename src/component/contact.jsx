import React from "react";
import {
  Col,
  Form,
  FormGroup,
  FormControl,
  Button,
  Container,
  Row,
} from "react-bootstrap";

function Contact() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} className>
          <h1 className="mt-5 mb-3">Contact me</h1>
          <Form>
            <FormGroup className="m-2">
              <FormControl type="text" placeholder="Nama" />
            </FormGroup>
            <FormGroup className="m-2">
              <FormControl type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup className="m-2">
              <FormControl as="textarea" rows="3" placeholder="Pesan" />
            </FormGroup>
            <Button type="submit">Kirim</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
