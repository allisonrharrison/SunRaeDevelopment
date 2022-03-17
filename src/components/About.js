import moment from "moment";
import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import { NavLink } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import resume from "../files/resumeSample.pdf";
import "./About.scss";
import AccordionComponent from "./utils/Accordion";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: "",
    };
  }

  componentDidMount() {
    this.tick();
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const bday = moment("1991-05-11T10:30:00");
    const current = moment();
    const seconds = current.diff(bday, "seconds");

    this.setState({
      now: seconds.toLocaleString(),
    });
  }

  render() {
    return (
      <div id="about-me">
        <Slide left>
          <h1 className="page-title">&nbsp;About Me&nbsp;</h1>
        </Slide>
        <Row>
          <Col sm={6}>
            <Fade up delay={300}>
              <div className="about-card">
                <Card>
                  <CardImg
                    top
                    src={require("../img/IMG_20210212_205959_785.jpg").default}
                    alt="Allison Headshot"
                  />
                </Card>
                <CardBody>
                  <CardTitle tag="h3">Allison Rae &#9801;</CardTitle>
                  <CardSubtitle tag="h4" className="mb-3 text-muted">
                    Tacoma, WA
                  </CardSubtitle>
                  <CardText className="mb-4">
                    INTP-T <span className="bull">&bull;</span> Nail Polish
                    Enthusiast <span className="bull">&bull;</span> Cat Mom
                  </CardText>
                  <NavLink
                    to={resume}
                    target="_blank"
                    rel="noreferrer noopener"
                    download
                  >
                    <Button>
                      <i
                        className="fas fa-arrow-down"
                        style={{
                          textDecoration: "underline",
                          paddingRight: "10px",
                        }}
                      ></i>
                      &nbsp;DOWNLOAD MY RESUMÉ
                    </Button>
                  </NavLink>
                </CardBody>
              </div>
            </Fade>
          </Col>
          <Col sm={5} offset={1}>
            <Fade right delay={500}>
              <p>
                When I first learned how to write my name, I'd purposefully
                misspell it as "Allisun" with a little smiley faced sun next to
                it. 🌞 Sun Rae... get it?
              </p>
            </Fade>
            <Fade up delay={800}>
              <div className="accordion">
                {/*{accordionData.map(({ title, color, content }) => (
                <Accordion title={title} color={color} content={content} />
              ))}*/}
                <AccordionComponent />
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
