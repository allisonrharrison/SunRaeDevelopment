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

class Fun extends React.Component {
  render() {
    return(
        <div className="panel">
          <Fade>
        <h3 className="mb-5">FUN PROJECTS</h3>
      <Card style={{ border: "none" }}>
        <CardBody>
          <CardDeck>
            <Card className="card text-center proj col-sm-12">
              <a
                href="https://codepen.io/allisonrharrison/pen/ExYXJoe"
                target="_blank"
              >
                <CardImg
                  top
                  src={require("../img/leapyear_screenshot.png")}
                  alt="Card image cap"
                />
              </a>
              <CardBody>
                <CardTitle>
                  <h5>leap year calculator</h5>
                </CardTitle>
                <CardText className="mt-2">
                  <p className="card-text">
                    A basic app which will take in any year & calculate if it is
                    a Leap Year.
                  </p>
                  <p className="card-text">
                    <strong>Features:</strong> HTML, CSS, JavaScript
                  </p>
                </CardText>
                <hr />
                <Button
                className="aboutbtn"
                  href="https://codepen.io/allisonrharrison/pen/ExYXJoe"
                  target="_blank"
                  size="sm"
                >
                  <i className="fab fa-codepen"></i> Demo on CodePen
                </Button>
              </CardBody>
            </Card>
            <Card className="text-center proj col-sm-12">
              <a
                href="https://codepen.io/allisonrharrison/pen/PoYjgRZ"
                target="_blank"
              >
                <CardImg
                  top
                  src={require("../img/eightball_screenshot.png")}
                  alt="Card image cap"
                />
              </a>
              <CardBody>
                <CardTitle>
                  <h5>magic eight ball</h5>
                </CardTitle>
                <CardText className="mt-2">
                  <p>
                    Input a question & the app will randomly generate your
                    fortune.
                  </p>
                  <p>
                    <strong>Features:</strong> HTML, CSS, JavaScript
                  </p>
                </CardText>
                <hr />
                <Button
                className="aboutbtn"
                  href="https://codepen.io/allisonrharrison/pen/PoYjgRZ"
                  target="_blank"
                  size="sm"
                >
                  <i className="fab fa-codepen"></i> Demo on CodePen
                </Button>
              </CardBody>
            </Card>
            <Card className="text-center proj col-sm-12">
              <a
                href="https://codepen.io/allisonrharrison/pen/YzKxLoz"
                target="_blank"
              >
                <CardImg
                  top
                  src={require("../img/matchgame_screenshot.png")}
                  alt="Card image cap"
                />
              </a>
              <CardBody>
                <CardTitle>
                  <h5>smiley matching game</h5>
                </CardTitle>
                <CardText className="mt-2">
                  <p>
                    Click the extra smiley on the left to advance to the next
                    level.
                  </p>
                </CardText>
                <p>
                  <strong>Features:</strong> HTML, CSS, JavaScript
                </p>
                <hr />
                <Button
                className="aboutbtn"
                  href="https://codepen.io/allisonrharrison/pen/YzKxLoz"
                  target="_blank"
                  size="sm"
                >
                  <i className="fab fa-codepen"></i> Demo on CodePen
                </Button>
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

export default Fun;