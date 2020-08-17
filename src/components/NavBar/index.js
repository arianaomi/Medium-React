import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./navBar.css";

const list = [
  { name: "HOME" },
  { name: "POPULAR" },
  { name: "MEMENTUM" },
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
  return (
    <NavItem className="MenuItem">
      <NavLink href="#">{text}</NavLink>
    </NavItem>
  );
};

export const Menu = (list, selected) =>
  list.map((el) => {
    const { name } = el;
    return <MenuItem text={name} key={name} selected={selected} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}> {text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-right" });
const selected = "HOME";

class NavbarSticky extends Component {
  constructor(props) {
    super(props);
    this.menuItems = Menu(list, selected);
    this.state = {
      selected,
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    const menu = this.menuItems;

    return (
      <div className="NavBarSticky">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default NavbarSticky;
