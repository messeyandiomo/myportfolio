import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact";

class App extends Component {
  state = {
    link: 0,
  };

  handlePageLink = (linkNum) => {
    this.setState({ link: linkNum });
  };

  getClasses() {
    let classes = "container-fluid vh-100 d-flex align-items-center mt-md-0";
    if (this.state.link === 0) {
      classes += " mt-sm-5 bg-dark text-white";
    } else if (this.state.link === 1) {
      classes += " marge-y justify-content-center";
    } else if (this.state.link === 2) {
      classes += " mt-sm-5 bg-dark text-white";
    }
    return classes;
  }

  getPage() {
    let page = <About />;
    if (this.state.link === 0) {
      page = <About />;
    } else if (this.state.link === 1) {
      page = <Work />;
    } else if (this.state.link === 2) {
      page = <Contact />;
    }
    return page;
  }

  render() {
    return (
      <React.Fragment>
        <NavBar onPage={this.handlePageLink} />
        <main className={this.getClasses()}>{this.getPage()}</main>
      </React.Fragment>
    );
  }
}

export default App;
