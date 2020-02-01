import React, { Component } from "react";
import {
  Button,
  CardBody,
  CardTitle,
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
        <h3 className="mb-5">SCHOOL PROJECTS</h3>
      <Card style={{ border: "none" }}>
        <CardBody>
          <CardDeck>

            {/* BOOTSTRAP */}
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
                <CardTitle>
                  <h5>bootstrap site</h5>
                </CardTitle>
                <CardText>
                  <p>
                    Webpage for a fictional restaurant with an adaptive layout
                    for all screen sizes.
                  </p>
                  <p>
                    <strong>Features:</strong> Bootstrap 4, Grunt
                  </p>
                </CardText>
                <hr />
                <Button className="aboutbtn" href="/" target="_blank" size="sm"
                >
                  <i className="fas fa-external-link-alt fa-sm"></i> Visit Site
                </Button>
                
                <Button
                className="aboutbtn"
                  href="https://github.com/allisonrharrison/MindsEyeTattooStudio"
                  target="_blank"
                  size="sm"
                  
                >
                  <i className="fab fa-github"></i> View on GitHub
                </Button>
              </CardBody>
            </Card>

            {/* REACT */}
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
                <CardTitle>
                  <h5>react app</h5>
                </CardTitle>
                <CardText>
                  <p>
                    A single-page application for a fictional restaurant with
                    rating, comment, and favorite functionality.
                  </p>
                  <p>
                    <strong>Features:</strong> React, Redux
                  </p>
                </CardText>
                <hr />
                <Button className="aboutbtn" href="/" target="_blank" size="sm"
                >
                  <i className="fas fa-external-link-alt fa-sm"></i> Visit Site
                </Button>
                <Button
                className="aboutbtn"
                  href="https://github.com/allisonrharrison/MindsEyeTattooStudio"
                  target="_blank"
                  size="sm"
                  
                >
                  <i className="fab fa-github"></i> View on GitHub
                </Button>
              </CardBody>
            </Card>

            {/* REACT NATIVE */}
            <Card className="text-center proj col-sm-12">
              <a
                href="https://github.com/allisonrharrison/NativeConfusion"
                target="_blank"
              >
                <CardImg top src="" alt="Card image cap" />
              </a>
              <CardBody>
                <CardTitle>
                  <h5>react native app</h5>
                </CardTitle>
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
                <hr />
                <Button className="aboutbtn" href="/" target="_blank" size="sm"
                >
                  <i className="fas fa-external-link-alt fa-sm"></i> Visit Site
                </Button>
                
                <Button
                className="aboutbtn"
                  href="https://github.com/allisonrharrison/MindsEyeTattooStudio"
                  target="_blank"
                  size="sm"
                  
                >
                  <i className="fab fa-github"></i> View on GitHub
                </Button>
              </CardBody>
            </Card>

            {/* EXPRESS 
            <Card className="text-center proj col-sm-12">
              <a
                href="https://github.com/allisonrharrison/conFusionServer"
                target="_blank"
              >
                <CardImg top src="" alt="Card image cap" />
              </a>
              <CardBody>
                <CardTitle>
                  <h5>express server</h5>
                </CardTitle>
                <CardText>
                  <p>
                    Server and database for a fictional restaurant with routing
                    and authentication.
                  </p>
                  <p className="card-text">
                    <strong>Features:</strong> Node.js, Express, MongoDB
                  </p>
                </CardText>
                <a href="/" target="_blank" size="sm"
                >
                  <i className="fas fa-external-link-alt fa-sm"></i> Visit Site
                </a>
                &nbsp;
                <a
                  href="https://github.com/allisonrharrison/MindsEyeTattooStudio"
                  target="_blank"
                  size="sm"
                  
                >
                  <i className="fab fa-github"></i> View on GitHub
                </a>
              </CardBody>
            </Card>*/}
          </CardDeck>
        </CardBody>
      </Card>
      </Fade>
      </div>
    )
  }
}

export default School;