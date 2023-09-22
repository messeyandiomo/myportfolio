import React, { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

library.add(faGithub, faLinkedin);

class NavBar extends Component {
  state = {
    navExpanded: false,
  };

  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  };

  closeNav = () => {
    this.setState({ navExpanded: false });
  };

  render() {
    return (
      <>
        <Navbar
          expand="md"
          className="navbar-dark fixed-top bg-dark"
          expanded={this.state.navExpanded}
          onToggle={this.setNavExpanded}
        >
          <Container fluid>
            <Navbar.Brand href="#">MESSEY à NDIOMO</Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className="shadow-none"
              id="navbarToggle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ "--bs-scroll-height": 100 }}
                navbarScroll
              >
                <NavLink
                  to={"/about"}
                  className={"nav-link"}
                  aria-current="page"
                  onClick={this.closeNav}
                >
                  ABOUT
                </NavLink>
                <NavLink
                  to={"/work"}
                  className={"nav-link"}
                  onClick={this.closeNav}
                >
                  WORK
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className={"nav-link"}
                  onClick={this.closeNav}
                >
                  CONTACT
                </NavLink>
                <NavLink
                  className="nav-link"
                  to={"https://github.com/messeyandiomo"}
                >
                  <FontAwesomeIcon icon={["fab", "fa-github"]} />
                </NavLink>
                <NavLink
                  className="nav-link"
                  to={
                    "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                  }
                >
                  <FontAwesomeIcon icon={["fab", "fa-linkedin"]} />
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
      </>
    );
  }
}

export default NavBar;
