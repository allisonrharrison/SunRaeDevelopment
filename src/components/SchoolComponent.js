import React, { Component } from "react";
import {
  CardBody,
  CardHeader,
  CardImg,
  Card,
  CardDeck,
  CardText
} from "reactstrap";
import { Fade } from "react-reveal";

class School extends React.Component {
  render() {
    return(
        <div className="panel">
          <Fade>
        <h5 className="mb-5">SCHOOL PROJECTS</h5>
      <Card style={{ border: "none" }}>
        <CardBody>
          <CardDeck>
            <Card className="text-center proj col-sm-12">
              <a
                href="https://github.com/allisonrharrison/conFusion"
                target="_blank"
              >
                <CardImg
                  top
                  src={require("../img/bootstrapcourse_screenshot.png")}
                  alt="Card image cap"
                />
              </a>
              <CardBody>
                <CardHeader>
                  <h5>restaurant site</h5>
                </CardHeader>
                <CardText>
                  <p>
                    Webpage for a fictional restaurant with an adaptive layout
                    for all screen sizes.
                  </p>
                  <p>
                    <strong>Features:</strong> Bootstrap 4, Grunt
                  </p>
                </CardText>
                <a href="/" target="_blank" className="btn btn-sm btn-secondary text-white"
                >
                  <i className="fas fa-external-link-alt fa-sm"></i> Visit Site
                </a>
                &nbsp;
                <a
                  href="https://github.com/allisonrharrison/MindsEyeTattooStudio"
                  target="_blank"
                  className="btn btn-sm btn-secondary text-white"
                  
                >
                  <i className="fab fa-github"></i> View Code on GitHub
                </a>
              </CardBody>
            </Card>
            <Card className="text-center proj col-sm-12">
              <a
                href="https://github.com/allisonrharrison/React"
                target="_blank"
              >
                <CardImg
                  top
                  src={require("../img/reactcourse_screenshot.png")}
                  alt="Card image cap"
                />
              </a>
              <CardBody>
                <CardHeader>
                  <h5>react app</h5>
                </CardHeader>
                <CardText>
                  <p>
                    A single-page application for a fictional restaurant with
                    rating, comment, and favorite functionality.
                  </p>
                  <p>
                    <strong>Features:</strong> React, Redux
                  </p>
                </CardText>
                <a href="/" target="_blank" className="btn btn-sm btn-secondary text-white"
                >
                  <i className="fas fa-external-link-alt fa-sm"></i> Visit Site
                </a>
                &nbsp;
                <a
                  href="https://github.com/allisonrharrison/MindsEyeTattooStudio"
                  target="_blank"
                  className="btn btn-sm btn-secondary text-white"
                  
                >
                  <i className="fab fa-github"></i> View Code on GitHub
                </a>
              </CardBody>
            </Card>
            <Card className="text-center proj col-sm-12">
              <a
                href="https://github.com/allisonrharrison/NativeConfusion"
                target="_blank"
              >
                <CardImg top src="" alt="Card image cap" />
              </a>
              <CardBody>
                <CardHeader>
                  <h5>react native app</h5>
                </CardHeader>
                <CardText>
                  <p>
                    An Android application for a fictional restaurant,
                    implementing social media sharing, notifications, camera,
                    and calendar functionality.
                  </p>
                  <p>
                    <strong>Features:</strong> React Native
                  </p>
                </CardText>
                <a href="/" target="_blank" className="btn btn-sm btn-secondary text-white"
                >
                  <i className="fas fa-external-link-alt fa-sm"></i> Visit Site
                </a>
                &nbsp;
                <a
                  href="https://github.com/allisonrharrison/MindsEyeTattooStudio"
                  target="_blank"
                  className="btn btn-sm btn-secondary text-white"
                  
                >
                  <i className="fab fa-github"></i> View Code on GitHub
                </a>
              </CardBody>
            </Card>
            <Card className="text-center proj col-sm-12">
              <a
                href="https://github.com/allisonrharrison/conFusionServer"
                target="_blank"
              >
                <CardImg top src="" alt="Card image cap" />
              </a>
              <CardBody>
                <CardHeader>
                  <h5>express server</h5>
                </CardHeader>
                <CardText>
                  <p>
                    Server and database for a fictional restaurant with routing
                    and authentication.
                  </p>
                  <p className="card-text">
                    <strong>Features:</strong> Node.js, Express, MongoDB
                  </p>
                </CardText>
                <a href="/" target="_blank" className="btn btn-sm btn-secondary text-white"
                >
                  <i className="fas fa-external-link-alt fa-sm"></i> Visit Site
                </a>
                &nbsp;
                <a
                  href="https://github.com/allisonrharrison/MindsEyeTattooStudio"
                  target="_blank"
                  className="btn btn-sm btn-secondary text-white"
                  
                >
                  <i className="fab fa-github"></i> View Code on GitHub
                </a>
              </CardBody>
            </Card>
          </CardDeck>
        </CardBody>
      </Card>
      </Fade>
      </div>
    )
  }
}

export default School;