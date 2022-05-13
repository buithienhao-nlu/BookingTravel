import * as React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
export class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className="link-home" to="/">
            Booking Travel
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/destination">
                Destination
              </Link>
              <Link className="link" to="/about">
                About
              </Link>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </Nav>
            <Nav>
              <Link className="link" to="/signin">
                Sign In
              </Link>
              <Link className="link" eventKey={2} to="/signup">
                Sign Up
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
