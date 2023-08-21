import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="d-md-inline-flex justify-content-center">
          <div className="col-sm-12 col-md-5">
            <div className="row">
              <div className="row">
                <h1 className="col-12">ABOUT</h1>
                <h3 className="col-12">Globetrotter</h3>
              </div>
              <div className="row">
                <p className="col-12">
                  I am Messey à Ndiomo Andre Ebenezer, a passionate freelancer
                  bringing you programming and design from the future. I am
                  experienced in developing web and desktop applications
                  including full front end design. This includes brand identity,
                  graphics and illustrations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5"></div>
        </div>
      </div>
    );
  }
}

export default About;
