import React from "react";
import {ButtonGroup, Button, Container, Row, Col} from "reactstrap";
import { Fade } from 'react-reveal';

function Contact() {
  return (
    <Container className="pb-5" id="contact">
      <Fade>
      <h3 className="mb-5">contact me</h3>
      <Row className="d-flex justify-content-center">
      <a href="mailto:admin@sunrae.dev"> <i className="fas fa-envelope fa-lg float-left mr-4"></i>ADMIN@SUNRAE.DEV</a>
      </Row>
      <br />
      <Row className="d-flex justify-content-center">
      <a href="tel:1-253-285-0699"><i className="fas fa-phone fa-lg float-left mr-4"></i>(253) 285-0699</a>
      </Row>
      </Fade>
      </Container>
  )
}

export default Contact;