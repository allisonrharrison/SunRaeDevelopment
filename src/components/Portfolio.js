import React from "react";
import { Fade, Slide } from "react-reveal";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import "./Portfolio.scss";

class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio" className="mt-5">
        <Row>
          <Col>
            <Slide left>
              <div className="header">
                <h1 className="page-title">&nbsp;<NavLink to={'/'}>Home</NavLink>&nbsp;/&nbsp;Portfolio&nbsp;</h1>
              </div>
            </Slide>
            <div className="sites">
              <Fade>
                <NavLink
                  to={{ pathname: "https://concordiachristianacademy.org" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Card>
                    <div className="card-img-container">
                      <div className="card-img-child cca"></div>
                    </div>
                    <CardBody>
                      <CardTitle tag="h2">
                        C.C.A.
                        <span className="icon">
                          {" "}
                          <i className="fas fa-external-link-alt"></i>
                        </span>
                      </CardTitle>
                    </CardBody>
                  </Card>
                </NavLink>
              </Fade>
              <Fade>
                <NavLink to={{ pathname: "https://jsquared-investments.com" }}
                  target="_blank"
                  rel="noreferrer">
                  <Card>
                    <div className="card-img-container">
                      <div className="card-img-child sunraedev"></div>
                    </div>
                    <CardBody>
                      <CardTitle tag="h2">J2 Investments
                      <span className="icon">
                          {" "}
                          <i className="fas fa-external-link-alt"></i>
                        </span></CardTitle>
                    </CardBody>
                  </Card>
                </NavLink>
              </Fade>
              <Fade>
                <NavLink
                  to={{ pathname: "https://vsg360.com" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Card>
                    <div className="card-img-container">
                      <div className="card-img-child vsg"></div>
                    </div>
                    <CardBody>
                      <CardTitle tag="h2">
                        VSG Splash Page
                        <span className="icon">
                          {" "}
                          <i className="fas fa-external-link-alt"></i>
                        </span>
                      </CardTitle>
                    </CardBody>
                  </Card>
                </NavLink>
              </Fade>
              <Fade>
                <NavLink
                  to={{ pathname: "https://vote.southsoundmag.com" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Card>
                    <div className="card-img-container">
                      <div className="card-img-child south-sound"></div>
                    </div>
                    <CardBody>
                      <CardTitle tag="h2">
                        Best of South Sound
                        <span className="icon">
                          {" "}
                          <i className="fas fa-external-link-alt"></i>
                        </span>
                      </CardTitle>
                    </CardBody>
                  </Card>
                </NavLink>
              </Fade>
              <Fade>
                <NavLink
                  to={{ pathname: "https://vote.425magazine.com" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Card>
                    <div className="card-img-container">
                      <div className="card-img-child four-two-five"></div>
                    </div>
                    <CardBody>
                      <CardTitle tag="h2">
                        Best of 425
                        <span className="icon">
                          {" "}
                          <i className="fas fa-external-link-alt"></i>
                        </span>
                      </CardTitle>
                    </CardBody>
                  </Card>
                </NavLink>
              </Fade>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Portfolio;
