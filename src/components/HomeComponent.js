import React, { Component } from "react";
import { Fade } from 'react-reveal';
import Navigation from "./NavComponent";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    return (
      <div className="panel" id="home">
          <Fade>
          <h1 id="logo">
            SUN
            <br />
            RAE
            <br />
            DEV
          </h1>
          <h4>FULL STACK WEB DEVELOPMENT</h4>
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
                <a href="https://reactjs.org/">
                REACT.js
                </a>
              </span>
              
          </p>
          </Fade>
        </div>
    );
  }
}

export default Home;
