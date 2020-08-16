import React, { Component } from "react";
//import { NavLink, whithRouther } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./navBar.css";

class NavbarSticky extends Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? "active" : "";
  };
  render() {
    return (
      <div className="navBar">
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">
            <ul className="list-scroll">
              <li>
                <a href="# ">HOME</a>
              </li>
              <li>
                <a href="#">POPULAR</a>
              </li>
              <li>
                <a href="# ">MOMENTUM</a>
              </li>
              <li>
                <a href="#">CORONAVIRUS</a>
              </li>
              <li>
                <a href="# ">ONEZERO</a>
              </li>
              <li>
                <a href="#">ELEMENTAL</a>
              </li>
              <li>
                <a href="# ">GEN</a>
              </li>
              <li>
                <a href="#">ZORA</a>
              </li>
              <li>
                <a href="# ">FORGE</a>
              </li>
              <li>
                <a href="#">HUMAN PARTS</a>
              </li>
              <li>
                <a href="# ">MARKER</a>
              </li>
              <li>
                <a href="#">LEVEL</a>
              </li>
              <li>
                <a href="#">HEATED</a>
              </li>
              <li>
                <a href="#">MORE</a>
              </li>
            </ul>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default NavbarSticky;
