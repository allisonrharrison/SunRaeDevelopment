import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { Fade, Slide } from "react-reveal";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import "./Contact.scss";
import Socials from "./utils/Socials";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  // Form Submission handler
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gjxcdqq",
        "template_8wvjmuj",
        e.target,
        "user_GX6c0zshAG1w9fzNJ6efG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact">
      <Slide left>
        <h1 className="page-title">&nbsp;<NavLink to={'/'}>Home</NavLink>&nbsp;/&nbsp;Contact&nbsp;</h1>
      </Slide>
      <Slide right>
        <Socials />
        </Slide>
      <Fade up delay={500}>
        <Form className="contact-form" ref={form} onSubmit={sendEmail}>
          <Row form>
            <Col>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  type="text"
                  name="firstname"
                  id="firstName"
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="lastName"
                  placeholder=""
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="emailAddress">Email Address</Label>
            <Input type="email" name="email" id="emailAddress" placeholder="" />
          </FormGroup>
          <FormGroup row>
            <Label for="reasonSelect" sm={12}>
              Reason for Contact:
            </Label>
            <Col sm={12}>
              <Input type="select" name="select" id="reasonSelect">
                <option>Employment Opportunity</option>
                <option>Website Feedback</option>
                <option>Just Saying &apos;Hi!&apos;</option>
                <option>Testing if This Form Really Works</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Label for="textArea"></Label>
              <Input type="textarea" name="message" id="textArea" rows="10" />
            </Col>
          </FormGroup>
          <Button block type="submit" value="Send">
            Submit
          </Button>
        </Form>
      </Fade>
    </div>
  );
};

export default Contact;
