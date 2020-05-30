import React from "react";
import {ButtonGroup, Button} from "reactstrap";
import { Fade } from 'react-reveal';

function Contact() {
  return (
    <div className="pb-5" id="contact">
      <Fade>
      <h3 className="mb-5">contact me</h3>
      <div className="d-flex justify-content-center row">
      <a href="mailto:admin@sunrae.dev"> <i className="fas fa-envelope fa-lg float-left mr-4"></i>ADMIN@SUNRAE.DEV</a>
      </div>
      <br />
      <div className="d-flex justify-content-center row">
      <a href="tel:1-253-285-0699"><i className="fas fa-phone fa-lg float-left mr-4"></i>(253) 285-0699</a>
      </div>
      </Fade>
      </div>
  )
}

export default Contact;