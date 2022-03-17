import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";
import LetterSlide from "./utils/LetterSlide";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSlide = this.handleSlide.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isHovering: false,
      tooltipOpen: false,
    };
  }

  handleSlide(e) {
    setInterval(function (e) {
      e.target.className = "in";
    }, 5000);
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  render() {
    return (
      <div id="header">
        <Container className="header-container">
          <Col xs="4" className="headshot-container">
            <NavLink to="/about-me">
              <img
                alt="Allison headshot"
                src={require("../img/headshot200.jpg").default}
              />
            </NavLink>
          </Col>
          <Col xs="8" className="headline-container">
            <Row noGutters={true}>
              <div id="hi">
                <p>HI, I&apos;M</p>
              </div>
            </Row>
            <Col id="name-container">
              <Row noGutters={true}>
                <div id="allis">
                  <h1>
                    ALLI<span className="s">S</span>
                  </h1>
                </div>
                <div id="o-u" className="">
                  <LetterSlide />
                </div>
                <div id="n-rae">
                  <h1>N RAE</h1>
                </div>
              </Row>
              <Row noGutters={true}>
                <div id="she">
                  <p>
                    SHE/HER <span className="bull">&bull;</span>{" "}
                    <span className="web-dev">WEB DEVELOPER</span>{" "}
                    <span className="bull">&bull;</span> TACOMA, WA
                  </p>
                </div>
              </Row>
            </Col>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Header;
