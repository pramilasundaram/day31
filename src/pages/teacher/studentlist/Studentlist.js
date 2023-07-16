    import React, { useContext } from 'react';
    import Sidebar from '../../../components/sidebar/Sidebar';
    import {
      Table,
      Card,
      DropdownToggle,
      DropdownMenu,
      DropdownItem,
      UncontrolledDropdown,
      Button
    } from "reactstrap";
    import { BiShow, BiDotsVerticalRounded } from 'react-icons/bi';
    import { FaEdit, FaTrash } from 'react-icons/fa';
    import { useNavigate, useParams } from 'react-router-dom';
    import { dataContext } from '../../../components/contextProvider/Contextprovider';
    import { DELETE_STUDENT } from '../../../components/contextProvider/Action.type';
    export default function Studentlist({ direction, ...args }) {
      const { id } = useParams();
      const nav = useNavigate();
      const { state, dispatch } = useContext(dataContext); 
      const data = state.student.filter((value) => value.mentorId === id);
      return (
        <div className="row">
          <Sidebar />
          <div className="col-sm-9">
            <div className="row g-0">
              <Card
                body
                className="text-center"
                style={{
                  width: "100%"
                }}>
                <h1>student lists</h1>
                <Button color="warning" onClick={() => { nav(-1) }} style={{ float: "left", width: "100px" }}>BACK</Button>
                <Table className="table" style={{
                  width: "100%"
                }} >
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Year/Dept</th>
                      <th>Profile</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
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
                                <BiShow className="icons" style={{ color: "green" }} /> view
                              </DropdownItem>
                              <DropdownItem onClick={() => { nav("/editstudent/" + item.id) }}>
                                <FaEdit className="icons" style={{ color: "blue" }} /> Edit
                              </DropdownItem>
                              <DropdownItem onClick={() => dispatch({ type: DELETE_STUDENT, payload: item.id })}>
                                <FaTrash className="icons" style={{ color: "red" }} />delete
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    })}
                  </tbody>
                </Table>
              </Card>
            </div>
          </div>
        </div>
      )
    }
