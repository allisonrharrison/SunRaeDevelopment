import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  CardBody,
  CardTitle,
  CardImg,
  Card,
  CardDeck,
  CardText
} from "reactstrap";
import { Fade } from "react-reveal";

class Personal extends React.Component {
  render() {
    return (
      <div className="panel">
        <Fade>
          <Card style={{ border: "none" }}>
            <CardTitle>
            <h3 className="mb-5">PERSONAL PROJECTS</h3>
            </CardTitle>
            <CardBody>
              <CardDeck>
                {/* MIND'S EYE TATTOO STUDIO */}
                <Card className="text-center col-sm-12 proj p-0">
                  <a
                    href="https://allisonrharrison.github.io/MindsEyeTattooStudio/index.html"
                    target="_blank"
                  >
                    <CardImg
                      top
                      src={require("../img/mindseye_cardsize.png")}
                      alt="Card image cap"
                      height="180px"
                      width="318px"
                    />
                  </a>
                  <CardBody>
                    <CardTitle>
                      <h5>mind's eye tattoo</h5>
                    </CardTitle>
                    <CardText className="mt-3">
                      <p>A website for a local tattoo business.</p>
                      <p>
                        <strong>Features:</strong> Bootstrap 4
                      </p>
                    </CardText>
                    <hr />
                    <Button
                      className="aboutbtn"
                      href="https://allisonrharrison.github.io/MindsEyeTattooStudio/index.html"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fas fa-external-link-alt fa-sm"></i> Visit
                      Site
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
                {/* ILNP */}
                <Card className="text-center proj col-sm-12 p-0">
                  <Button
                    className="aboutbtn"
                    href="https://allisonrharrison.github.io/ILNP"
                    target="_blank"
                    size="sm"
                  >
                    <CardImg
                      top
                      src={require("../img/ilnp_cardsize.png")}
                      alt="Card image cap"
                      height="180px"
                      width="318px"
                    />
                  </Button>
                  <CardBody>
                    <CardTitle>
                      <h5>ilnp</h5>
                    </CardTitle>
                    <CardText className="mt-3">
                      <p>
                        Rebuilding a web store in React for increased
                        efficiency.
                      </p>
                      <p>
                        <strong>Features:</strong> React, Redux
                      </p>
                    </CardText>
                    <hr />
                    <Button
                      className="aboutbtn"
                      href="https://allisonrharrison.github.io/ILNP"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fas fa-external-link-alt fa-sm"></i> Visit
                      Site
                    </Button>
                    <Button
                      className="aboutbtn"
                      href="https://github.com/allisonrharrison/ILNP"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fab fa-github"></i> View on GitHub
                    </Button>
                  </CardBody>
                </Card>
                {/* SUN RAE DEVELOPMENT */}
                <Card className="text-center proj col-sm-12 p-0">
                  <a href="https://sunrae.dev">
                    <CardImg
                      top
                      src={require("../img/sunraedev_cardsize.png")}
                      alt="Card image cap"
                      height="180px"
                      width="318px"
                    />
                  </a>
                  <CardBody>
                    <CardTitle>
                      <h5>sun rae development</h5>
                    </CardTitle>
                    <CardText className="mt-3">
                      <p>
                        This website! My personal web development portfolio.
                      </p>
                      <p>
                        <strong>Features:</strong> Bootstrap 4
                      </p>
                    </CardText>
                    <hr />
                    <Button className="aboutbtn" size="sm">
                      <i className="fas fa-external-link-alt fa-sm"></i> Visit
                      Site
                    </Button>
                    <Button
                      className="aboutbtn"
                      href="https://github.com/allisonrharrison/sunraedevelopment"
                      target="_blank"
                      size="sm"
                    >
                      <i className="fab fa-github"></i> View on GitHub
                    </Button>
                  </CardBody>
                </Card>
              </CardDeck>
            </CardBody>
          </Card>
        </Fade>
      </div>
    );
  }
}

export default Personal;
