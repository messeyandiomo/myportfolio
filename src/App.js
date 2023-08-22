import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact";
import Reception from "./components/reception";

class App extends Component {
  state = {
    link: -1,
  };

  handlePageLink = (linkNum) => {
    this.setState({ link: linkNum });
  };

  getClasses() {
    let classes = "vh-100 mt-md-0";
    if (this.state.link === 0) {
      classes +=
        " container-fluid  d-flex align-items-center mt-sm-5 bg-dark text-white";
    } else if (this.state.link === 1) {
      classes +=
        " container-fluid  d-flex align-items-center  justify-content-center";
    } else if (this.state.link === 2) {
      classes +=
        " container-fluid  d-flex align-items-center mt-sm-5 bg-dark text-white";
    }
    return classes;
  }

  getPage() {
    let page = <Reception />;
    if (this.state.link === 0) {
      page = <About />;
    } else if (this.state.link === 1) {
      page = <Work />;
    } else if (this.state.link === 2) {
      page = <Contact />;
    }
    return page;
  }

  refresh = () => {
    if (this.state.link === -1) {
      window.location.reload(true);
    }
  };

  render() {
    window.addEventListener("resize", this.refresh);
    return (
      <React.Fragment>
        <NavBar onPage={this.handlePageLink} />
        <main className={this.getClasses()}>{this.getPage()}</main>
      </React.Fragment>
    );
  }
}

export default App;
