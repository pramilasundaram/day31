import React, { useState, useContext } from 'react'

import { Table, NavLink, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu,DropdownItem} from "reactstrap"
import { BiShow, BiDotsVerticalRounded } from 'react-icons/bi';
import { FaEdit, FaTrash } from 'react-icons/fa';
import "./Hometable.css"
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../contextProvider/Contextprovider';
import { DELETE_STUDENT,DELETE_TEACHER } from '../contextProvider/Action.type';
export default function Hometable() {

  const { state,dispatch} = useContext(dataContext) 

  const [show, setShow] = useState(false);
  // const image1 = require("../../components/assets/Table.png");
  // const image2 = require("../../components/assets/Table.png");
  const nav = useNavigate();
  return (
    <div className="row g-0">
      <div className="col">
        <Nav justified pills>
          <NavItem className="nav_link">
            {!show ? (
              <NavLink onClick={() => setShow(false)} active>
                STUDENTS LIST
              </NavLink>
            ) : (
              <NavLink onClick={() => setShow(false)}>
                STUDENTS LIST
              </NavLink>
            )}
          </NavItem>{" "}
          <NavItem className="nav_link">
            {show ? (
              <NavLink onClick={() => setShow(true)} active>
                TEACHERS LIST
              </NavLink>
            ) : (
              <NavLink onClick={() => setShow(true)}>TEACHERS LIST</NavLink>
            )}
          </NavItem>
        </Nav>
      </div>

      <div className="row g-0">

        {show ? (
          <Table className="table" style={{
            width: "100%"
          }} >
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Deptartment</th>
                <th>Profile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {state.teacher.map((item, index) => {
                return <tr key={item.id}>
                  <th scope="row"> {index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td><img className="table_Profile_icon" src={item.imageurl} alt="" /></td>
                  <td>
                    <UncontrolledDropdown
                      className="me-2"
                      direction="down">
                      <DropdownToggle
                        color="transparent">
                        <BiDotsVerticalRounded />
                      </DropdownToggle>
                      <DropdownMenu >
                      <DropdownItem onClick={() => { nav("/profileteacher/" + item.id) }}>
                        <BiShow className="icons" style={{color:"green"}}/> view
                      </DropdownItem>
                      <DropdownItem onClick={() => { nav("/editteacher/" + item.id) }}>
                        <FaEdit className="icons" style={{color:"blue"}} /> Edit
                      </DropdownItem>
                      <DropdownItem onClick={()=>dispatch({type:DELETE_TEACHER,payload:item.id})}>
                        <FaTrash  className="icons" style={{color:"red"}}/>delete
                      </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
              })}
            </tbody>
          </Table>
        ) : (
          <Table className="table" style={{
            width: "100%"
          }} >
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Year/Department</th>
                <th>Profile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {state.student.map((item, index) => {
                return <tr key={item.id}>
                  <th scope="row"> {index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td><img className="table_Profile_icon" src={item.imageurl} alt="" /></td>
                  <td>
                    <UncontrolledDropdown
                      className="me-2"
                      direction="down">
                      <DropdownToggle
                        color="transparent">
                        <BiDotsVerticalRounded />
                      </DropdownToggle>
                      <DropdownMenu >
                          <DropdownItem onClick={() => { nav("/profilestudent/" + item.id) }}>
                            <BiShow className="icons" style={{color:"green"}}/> view
                          </DropdownItem>
                          <DropdownItem onClick={() => { nav("/editstudent/" + item.id) }}>
                            <FaEdit className="icons" style={{color:"blue"}} /> Edit
                          </DropdownItem>
                          <DropdownItem onClick={()=>dispatch({type:DELETE_STUDENT,payload:item.id})}>
                            <FaTrash  className="icons" style={{color:"red"}}/>delete
                          </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
              })}
            </tbody>
          </Table>
        )}
      </div>
    </div>

  )
}
