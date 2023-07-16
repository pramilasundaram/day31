import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import "./Header.css"
export default function Header(args) { 
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const image = require("../assets/login.png");
  const image2 = require("../assets/LOGO.png");
  return (
    <div>
      <Navbar {...args} expand="md" className="nav_bars">
        <NavbarBrand>
          <img className="icons" src={image2} alt="" />
          BOSTON
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto " navbar>
          <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/aboutus">About us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">contact</NavLink>
        </NavItem>
          </Nav>
          <NavbarText>
            <UncontrolledDropdown >
              <DropdownToggle nav>
                <img className="header_icon"  src={image} alt="" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );  
}


