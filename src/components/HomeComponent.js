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
      <div>
        <div className="mb-5" id="home">
          <Fade>
            <div id="sun">
            <h1 className="logo">sun</h1>
            <h1 className="logo">rae</h1>
            <h1 className="logo">dev</h1>
            </div>
            <h4 id="fullstack">FULL-STACK WEB & MOBILE DEVELOPMENT</h4>
            <p className="poweredby">
              {this.state.isHovering && (
                <i className="fab fa-react fa-lg fa-spin"></i>
              )}
              {!this.state.isHovering && <i className="fab fa-react fa-lg"></i>}{" "}
              POWERED BY{" "}
              <span
                id="react"
                className="poweredby"
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
              >
                <a className="poweredby" href="https://reactjs.org/">REACT.js</a>
              </span>
            </p>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Home;
