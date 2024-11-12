import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';

const Hearder = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container className="py-3">
          <Navbar.Brand>
            <span className="main-color-bg text-white rounded-circle p-3">
              PZ
            </span>
            <span className="text-dark fs-5 fw-bolder ms-2">Perfume House</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to='/login'>
                <button
                  style={{ width: "140px", height: "61px" }}
                  className=" border-0 rounded-2 loginbtn"
                >
                  Log in
                </button>
              </Link>
              <Link to='/register'>
                <button
                  style={{ width: "140px", height: "61px" }}
                  className="main-color-bg border-0 rounded-2 text-white ms-0 ms-lg-2"
                >
                  Sign in
                </button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}



export default Hearder