import React, { useContext } from 'react'
import "./Home.css"
import Sidebar from '../../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../../../components/contextProvider/Contextprovider';
import { DELETE_STUDENT } from '../../../components/contextProvider/Action.type';
import { BiShow, BiDotsVerticalRounded } from 'react-icons/bi';
import { FaEdit, FaTrash, FaSort } from 'react-icons/fa';
import { Table, Button, Form, FormGroup, Input, Label, DropdownMenu, DropdownToggle, DropdownItem, Card, UncontrolledDropdown } from "reactstrap"


export default function Homestudent() {
  const { state,dispatch} = useContext(dataContext)
  const nav = useNavigate();
  
  return (<div className="row">
    <Sidebar />
    <div className="col-sm-9">
      <div className="row g-0">
        <Card
          body
          className="text-center"
          style={{
            width: "100%"
          }}
        >
          <h1>STUDENTS</h1>
          <Card
            body
            className="text-center"
            style={{
              width: "100%"
            }}
          >
            {/*search*/}
            <div className="search_add mt-4 d-flex justify-content-between">
              <div className="search col-lg-4">
                <Form className="d-flex">
                  <Input
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => { }}
                  />
                  <Button color="primary">Search</Button>
                </Form>
              </div>
              <div className="add_btn">
                <Button color="warning" onClick={() => { nav("/createstudent") }}>
                  Add user
                </Button>
              </div>
            </div>

            {/*export ,filter,sort*/}
            <div className="drop mt-4 d-flex justify-content-between flex-wrap">
              {/*export-begin*/}
              <div className="csv">
                <Button
                  className="csv_btn"
                  color="success"
                  onClick={() => { }}
                >
                  Export To Csv
                </Button>
              </div>
              {/*export-end*/}

              {/*filter-begin */}
              <div className="filter_gender">
                <div
                  style={{
                    overflow: "hidden",
                    padding: "8px"
                  }}
                >
                  <h5>Filter by Gender</h5>
                  <Form className="d-flex">
                    <FormGroup check>
                      <Input name="radio1" type="radio" />
                      <Label check>All</Label>&nbsp;&nbsp;&nbsp;
                    </FormGroup>
                    <FormGroup check>
                      <Input name="radio1" type="radio" />
                      <Label check>Male</Label>&nbsp;&nbsp;&nbsp;
                    </FormGroup>
                    <FormGroup check>
                      <Input name="radio1" type="radio" />
                      <Label check>Female</Label>&nbsp;&nbsp;&nbsp;
                    </FormGroup>
                  </Form>
                </div>
              </div>

              {/*sort-begin*/}
              <div className="filter_sort">
                <div
                  style={{
                    overflow: "hidden",
                    padding: "18px"
                  }}
                >
                  <h5>Filter by Sort</h5>
                  <UncontrolledDropdown
                    className="me-2"
                    direction="right"
                  >
                    <DropdownToggle

                      color="transparent"
                    >
                      <FaSort />
                    </DropdownToggle>
                    <DropdownMenu >
                      <DropdownItem>
                        new
                      </DropdownItem>
                      <DropdownItem>
                        old
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
            </div>
          </Card>

          {/*table*/}
          <div className="row g-0">
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
              <>
                {state.student.map((item, index) => {
                  // console.log(item.id)
                  return(<tr key={item.id}>
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
                  </tr>)
                })}
                </>
              </tbody>
            </Table>
          </div>

        </Card>
      </div>
    </div>
  </div>
  );
}

