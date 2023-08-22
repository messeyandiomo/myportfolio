import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class Reception extends Component {
  state = {};
  render() {
    return (
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            src={require("../imgs/slide-2.png")}
            className="img-fluid"
            alt=""
            width="100%"
            height="auto"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            src={require("../imgs/slide-3.png")}
            className="img-fluid"
            alt=""
            width="100%"
            height="auto"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            src={require("../imgs/slide-4.png")}
            className="img-fluid"
            alt=""
            width="100%"
            height="auto"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Reception;
