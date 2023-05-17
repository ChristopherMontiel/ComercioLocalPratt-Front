import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import logo from "../assets/icons/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-between w-100">
          <Navbar.Brand href="/home">
            <Image
              src={logo}
              height={30}
              alt="Logo"
              className="d-inline-block align-top"
            />
            Comercio Local Pratt
          </Navbar.Brand>
          <Nav>
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
