import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./pages/NavBar";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter basename="/myportfolio">
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
