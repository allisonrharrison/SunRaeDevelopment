import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { NavLink } from "react-router-dom";
import "./Accordion.scss";

export const accordionData = [
  {
    title: "Experience",
    color: "#55cb89",
    content: (
      <ul>
        <li className="main">Web Developer</li>
        <li className="sub">
          VSG Marketing <span className="bull">&bull;</span> Aug '20 - present
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    color: "#1bacc3",
    content: (
      <ul>
        <li className="main">Full Stack Web &amp; Mobile Development</li>
        <li className="sub">
          NuCamp Coding Bootcamp <span className="bull">&bull;</span>
          Feb '20
        </li>
      </ul>
    ),
  },
  {
    title: "Skills",
    color: "#675c9f",
    content: (
      <ul>
        <li className="main">Check out my portfolio</li>
      </ul>
    ),
  },
  {
    title: "Languages",
    color: "#c763b0",
    content: (
      <ul>
        <li className="main">English</li>
        <li className="sub">Full Working Proficiency</li>
        <br />
        <li className="main">French</li>
        <li className="sub">Intermediate Working Proficiency</li>
      </ul>
    ),
  },
];

{
  /*
const Accordion = ({ title, color, content }) => {

  return (
    <div className="accordion-item">
      <div className="accordion-title">
        <div>
          <span style={{ color: color }}>{title}</span>
        </div>
        <span id="icon" style={{ color: color }}>
          <i className={isActive ? "fas fa-minus active" : "fas fa-plus"}></i>
        </span>
      </div>
      <div
        className={isActive ? "accordion-content active" : "accordion-content"}
      >
        {content}
      </div>
    </div>
  );
};*/
}

class AccordionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="text" style={{ color: "#55cb89" }}>
              SKILLS
            </span>
            <span className="arrow" style={{ color: "#55cb89" }}>
              <i className="fas fa-chevron-up"></i>
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              To see these skills in action, check out{" "}
              <NavLink id="link" to="/my-work">
                my portfolio
              </NavLink>
              .
            </p>
            <div className="grid">
              <div className="grid-item">
                <i
                  className="fab fa-html5 fa-2x"
                  style={{ color: "#DD4B24" }}
                ></i>
                <p>HTML</p>
              </div>
              <div className="grid-item">
                <i
                  className="fab fa-js-square fa-2x"
                  style={{ color: "#E9B824" }}
                ></i>
                <p>JavaScript</p>
              </div>
              <div className="grid-item">
                <i
                  className="fab fa-css3-alt fa-2x"
                  style={{ color: "#249CDA" }}
                ></i>
                <p>CSS</p>
              </div>
              <div className="grid-item">
                <i
                  className="fab fa-sass fa-2x"
                  style={{ color: "#C56394" }}
                ></i>
                <p>Sass</p>
              </div>
              <div className="grid-item">
                <i
                  className="fab fa-bootstrap fa-2x"
                  style={{ color: "#6E11EE" }}
                ></i>
                <p>Bootstrap</p>
              </div>
              <div className="grid-item">
                <img
                  src={require("../../img/redux-seeklogo.com 2.svg").default}
                  alt="Redux"
                />
                <p>Redux</p>
              </div>
              <div className="grid-item">
                <i
                  className="fab fa-node fa-2x"
                  style={{ color: "#7FC727" }}
                ></i>
                <p>NodeJS</p>
              </div>
              <div className="grid-item">
                <i
                  className="fab fa-react fa-2x"
                  style={{ color: "#5ED3F3" }}
                ></i>
                <p>React + Native</p>
              </div>
              <div className="grid-item">
                <img
                  src={require("../../img/mongodb-icon.svg").default}
                  alt="MongoDB"
                />
                <p>MongoDB</p>
              </div>
              <div className="grid-item">
                <img
                  src={
                    require("../../img/file_type_mocha_icon_130387.png").default
                  }
                  alt="Mocha"
                />
                <p>Mocha</p>
              </div>
              <div className="grid-item">
                <i
                  className="fab fa-git-alt fa-2x"
                  style={{ color: "#E94E31" }}
                ></i>
                <p>Git</p>
              </div>
              <div className="grid-item">
                <i
                  className="fab fa-wordpress fa-2x"
                  style={{ color: "#217196" }}
                ></i>
                <p>WordPress</p>
              </div>
              <div className="grid-item">
                <i
                  className="fab fa-elementor fa-2x"
                  style={{ color: "#CF315F" }}
                ></i>
                <p>Elementor</p>
              </div>
              <div className="grid-item">
                <img
                  alt="XMPIE"
                  src={require("../../img/XMPieLogo.svg").default}
                />
                <p>XMPIE</p>
              </div>
              <div className="grid-item">
                <img
                  alt="SQL"
                  src={
                    require("../../img/file_type_sql_icon_130152.png").default
                  }
                />
                <p>SQL</p>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span className="text" style={{ color: "#1bacc3" }}>
              EDUCATION
            </span>
            <span className="arrow" style={{ color: "#1bacc3" }}>
              <i className="fas fa-chevron-up"></i>
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li className="main">Full Stack Web &amp; Mobile Development</li>
              <li className="sub">
                <i className="fas fa-award"></i>&nbsp; NuCamp Coding Bootcamp{" "}
                <span className="bull">&bull;</span>
                &nbsp;Feb '20
              </li>
              <br />
              <li className="main">Web Development Career Path</li>
              <li className="sub">
                <i className="fas fa-award"></i>&nbsp;Codecademy Pro&nbsp;
                <span className="bull">&bull;</span>
                &nbsp;Dec '21
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <span className="text" style={{ color: "#8270db" }}>
              EXPERIENCE
            </span>
            <span className="arrow" style={{ color: "#8270db" }}>
              <i className="fas fa-chevron-up"></i>
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li className="main">Web Developer</li>
              <li className="sub">
                VSG Marketing, Tacoma WA <span className="bull">&bull;</span>{" "}
                Aug '20 - present
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <span className="text" style={{ color: "#c763b0" }}>
              LANGUAGES
            </span>
            <span className="arrow" style={{ color: "#c763b0" }}>
              <i className="fas fa-chevron-up"></i>
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li className="main">🇺🇸 English</li>
              <li className="sub">Full Working Proficiency</li>
              <br />
              <li className="main">🇫🇷 French</li>
              <li className="sub">Intermediate Working Proficiency</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
}

export default AccordionComponent;
