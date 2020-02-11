import React from "react";
import {ButtonGroup, Button} from "reactstrap";
import { Fade } from 'react-reveal';

function Contact() {
  return (
    <div className="panel" id="contact">
      <Fade>
      <h3>contact me</h3>
      <div className="d-flex justify-content-center">
      <ButtonGroup vertical>
        <Button block outline color="none" href="mailto:admin@sunrae.dev">
      <h4> <i className="fas fa-envelope fa-lg float-left mr-4"></i> admin@sunrae.dev</h4>
      </Button>
      <Button block outline color="none" href="tel:1-253-285-0699">
      <h4><i className="fas fa-phone fa-lg float-left"></i> (253) 285-0699</h4>
      </Button>
      </ButtonGroup>
      </div>
      </Fade>
      </div>
  )
}

export default Contact;