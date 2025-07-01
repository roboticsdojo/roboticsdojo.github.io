import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <section className="container">
        <Navbar
          className="navbar"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Nav.Link className="navbar-item" href="/">
              <img src="image/logo/logo2.webp" />
            </Nav.Link>

            <Nav.Link
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Nav.Link>
          </div>
          <Nav id="navbarBasicExample" className="navbar-menu navbar-end">
            <Nav.Link className="navbar-item" href="about.html">
              About
            </Nav.Link>
            <Nav.Link className="navbar-item" href="member.html">
              Member 
            </Nav.Link>
            <Nav.Link className="navbar-item" href="team.html">
              Team 
            </Nav.Link>
            <Nav.Link className="navbar-item" href="training.html">
              Training
            </Nav.Link>
            <Nav.Link className="navbar-item" href="research.html">
              Research 
            </Nav.Link>
            <div className="navbar-item had-dropdown is-hoverable" style={{padding: '0'}}>
              <div className="navbar-link">Competition</div>
              <div className="navbar-dropdown">
                <Nav.Link className="navbar-item" href="competition2024.html">2024</Nav.Link>
                <Nav.Link className="navbar-item" href="competition2023.html">2023</Nav.Link>
                <Nav.Link className="navbar-item" href="competition2022.html">2022</Nav.Link>
              </div>
            </div>
            <Nav.Link className="navbar-item" href="https://roboticsdojo.blogspot.com/" target="_blank">
              Blog 
            </Nav.Link>
          </Nav>
        </Navbar>
      </section>
    );
  }
}
export default App;
