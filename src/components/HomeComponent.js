import React, { Component } from "react";
import { Container } from "reactstrap";
import { Fade } from "react-reveal";
import Navigation from "./NavComponent";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <Container>
        <div className="mb-5" id="home">
          <Fade>
            <div id="sun">
              <p id="logo">
                sun
                <br />
                rae
                <br />
                dev
              </p>
            </div>
            <h4 id="fullstack">FULL-STACK WEB & MOBILE DEVELOPMENT</h4>
            <p id="poweredby">
              {this.state.isHovering && (
                <i className="fab fa-react fa-lg fa-spin"></i>
              )}
              {!this.state.isHovering && <i className="fab fa-react fa-lg"></i>}{" "}
              POWERED BY{" "}
              <span
                id="react"
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
              >
                <a href="https://reactjs.org/">REACT.js</a>
              </span>
            </p>
          </Fade>
        </div>
      </Container>
    );
  }
}

export default Home;
