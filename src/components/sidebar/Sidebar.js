import React from 'react'
import "./Sidebar.css"
import {  
  Nav,
  NavItem,
  NavLink
} from "reactstrap";  
export default function Sidebar() {
  return (
        <div className="col-sm-3">
          <Nav justified pills vertical>
            <NavItem className="nav_link">
              <NavLink href="/">DashBoard</NavLink>
            </NavItem>
            <NavItem className="nav_link">
              <NavLink href="/studenthome">Students</NavLink>
            </NavItem>
            <NavItem className="nav_link">
              <NavLink href="/teacherhome">Teachers</NavLink>
            </NavItem>
            <NavItem className="nav_link">
              <NavLink href="#">Attendence</NavLink>
            </NavItem>
            <NavItem className="nav_link">
              <NavLink href="/calender">Calender</NavLink>
            </NavItem>
            <NavItem className="nav_link">
              <NavLink href="#">Settings</NavLink>
            </NavItem>
          </Nav>
        </div>
      )
    }
