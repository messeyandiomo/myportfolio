import React, { Component } from "react";

class Work extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-6 ms-md-5 py-5">
          <div className="shadow">
            <img
              src={require("../imgs/freelance-web-developer.png")}
              className="img-fluid rounded"
              alt=""
              width="100%"
              height="auto"
            />
          </div>
        </div>
        <div className="col-md-5 ms-md-5 py-5 d-flex align-items-center">
          <div className="row">
            <div className="row mb-4">
              <h1 className="text-sm-center text-md-start">WORK</h1>
              <h4 className="text-sm-center text-md-start">
                Dig into my Universe
              </h4>
            </div>
            <div className="row mb-4">
              <p className="text-secondary text-sm-center text-md-start">
                This is a collection of apps, websites i have made.
              </p>
            </div>
            <div className="row ms-1">
              <a
                role="button"
                className="btn btn-primary col-md-4"
                href="https://cm.linkedin.com/in/messey-a-ndiomo-andre-ebenezer-7547bb98"
              >
                EXPLORE
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
