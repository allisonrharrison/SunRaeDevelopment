import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Carousel.scss";

class CarouselComponent extends Component {
  render() {
    return (
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        swipeable={true}
        showIndicators={false}
      >
        <div className="car-slide">
          <i
            className="fab fa-js-square fa-2x"
            style={{ color: "#E9B824" }}
          ></i>
          <i className="fab fa-react fa-2x" style={{ color: "#5ED3F3" }}></i>
          <i className="fab fa-node fa-2x" style={{ color: "#7FC727" }}></i>
        </div>
        <div className="car-slide">
          <i className="fab fa-html5 fa-2x" style={{ color: "#DD4B24" }}></i>
          <i className="fab fa-sass fa-2x" style={{ color: "#C56394" }}></i>
          <i className="fab fa-css3-alt fa-2x" style={{ color: "#249CDA" }}></i>
        </div>
        <div className="car-slide">
          <i
            className="fab fa-wordpress fa-2x"
            style={{ color: "#217195" }}
          ></i>
          <img
            className="ts"
            alt="XMPIE"
            src={require("../../img/XMPieLogo.svg").default}
          />
          <img
            className="sql"
            alt="SQL"
            src={require("../../img/sql.svg").default}
          />
        </div>
        {/*
        <div className="car-slide">
          <img
            className="sql"
            alt="MongoDB"
            src={require("../../img/mongodb-icon.svg").default}
          />
          <img
            className="sql"
            alt="Kubernetes"
            src={require("../../img/kubernetes-icon.svg").default}
          />
          <i className="fab fa-docker fa-2x" style={{ color: "#2491E6" }}></i>
        </div>*/}
      </Carousel>
    );
  }
}

export default CarouselComponent;
