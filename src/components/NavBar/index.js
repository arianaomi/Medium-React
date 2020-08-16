/*
import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
//import { NavLink, whithRouther } from "react-router-dom";
//import { Navbar } from "react-bootstrap";
import "./navBar.css";
const list = [
  { name: "HOME" },
  { name: "POPULAR" },
  { name: "MOMENTUM" },
  { name: "CORONAVIRUS" },
  { name: "ONEZERO" },
  { name: "ELEMENTAL" },
  { name: "GEN" },
  { name: "ZORA" },
  { name: "FORGE" },
  { name: "HUMAN PARTS" },
  { name: "MARKER" },
  { name: "LEVEL" },
  { name: "HEATED" },
  { name: "MORE" },
];

const MenuItem = ({ text, selected }) => {
  return <div className="menu-item">{text}</div>;
};
export const Menu = (list) =>
  list.map((el) => {
    const { name } = el;
    return <MenuItem text={name} key={name} />;
  });

const Arrow = ({ text, className }) => {
  return <div className="{className}">{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRigth = Arrow({ text: ">", className: "arrow-next" });

class NavBar extends Component {
  state = {
    selected: 0,
  };
  onSelect = (key) => {
    this.setState({ selected: key });
  };
  render() {
    const { selected } = this.state;
    //crear menu para items
    const menu = Menu(list, selected);

    return (
      <div className="NavBar">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRigth={ArrowRigth}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default NavBar;
*/

import React, { Component } from "react";
//import { NavLink, whithRouther } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./navBar.css";

const Arrow = ({ text, className }) => {
  return <div className="{className}">{text}</div>;
};

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
