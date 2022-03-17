import React, { Component } from "react";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Header from "./Header";
import "./Home.scss";
import CarouselComponent from "./utils/CarouselComponent";

export const HomeLink = (props) => {
  return (
    <NavLink
      to={props.href}
      target={props.target}
      rel={props.rel}
      download={props.download}
      style={{ color: `${props.color}` }}
    >
      <div className="text">{props.text}&nbsp;</div>
      <div className="arrow">
        <i className="fas fa-arrow-right"></i>
      </div>
    </NavLink>
  );
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Fade up>
          <Row>
            <Header />
          </Row>
        </Fade>
        <Row>
          <Col id="home">
            <Fade up delay={250}>
              <p>
                I&apos;m a Web Developer with a love for all things JavaScript.
                <br />I proudly specialize in React / MERN Stack development,
                and more!
              </p>
            </Fade>
            <Fade left delay={300}>
              <div className="mern">
                <CarouselComponent />
              </div>
            </Fade>
            <Fade up delay={400}>
              <p>
                My love for code doesn&apos;t stop at 5:00.
                <br />
                Passion drives me to always be learning, building, and growing
                my skillset.
              </p>
            </Fade>
            <Fade right delay={400}>
              <div className="home-links">
                <HomeLink
                  href="/about-me"
                  color="#c763b0"
                  text="View my profile"
                />
                <HomeLink
                  href="/my-work"
                  color="#8270db"
                  text="Check out my projects"
                />
                <HomeLink href="/contact" color="#1cacc3" text="Contact me" />
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
