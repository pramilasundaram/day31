import React, { useContext, useEffect, useState } from 'react'
import "./Profile.css"
import Sidebar from '../../../components/sidebar/Sidebar'
import { Card, CardHeader, Button, ListGroup, ListGroupItem, ListGroupItemText, ListGroupItemHeading } from "reactstrap"
import { useNavigate, useParams } from 'react-router-dom';
import { dataContext } from '../../../components/contextProvider/Contextprovider';

export default function Profileteacher() {
  const { id } = useParams();
  const { state } = useContext(dataContext)
  const nav = useNavigate();
  const [form, setForm] = useState({
    email: "",
    imageurl: "",
    phonenumber: "",
    dob: "",
    name: "",
    department: "",
    gender: "",
    location: "",
    education: "",
    designation: "",
    experience: ""
  });
  useEffect(()=>{
    let index = state.teacher.findIndex((value) => value.id === id)
    setForm(state.teacher[index])
  },[id,state])

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
            <h1>Teacher's Profile</h1>
            <Card
              body
              className="text-center"
              style={{
                width: "100%"
              }}
            >
              <Button color="warning" onClick={() => { nav(-1) }} style={{ float: "left", width: "100px" }}>BACK</Button>
              <CardHeader>
                Image
              </CardHeader>
              <ListGroup flush >

                {/*name:"",*/}
                <ListGroupItem className='d-flex justify-content-around'>
                  <ListGroupItemHeading>
                    NAME
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {form.name}
                  </ListGroupItemText>
                </ListGroupItem>

                {/*department:"",*/}
                <ListGroupItem className='d-flex justify-content-around'>
                  <ListGroupItemHeading>
                   DEPARTMENT
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {form.department}
                  </ListGroupItemText>
                </ListGroupItem>

                {/*  designation:"",*/}
                <ListGroupItem className='d-flex justify-content-around'>
                  <ListGroupItemHeading>
                    DESIGNATION
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {form.designation}
                  </ListGroupItemText>
                </ListGroupItem>

                {/* education:"",*/}
                <ListGroupItem className='d-flex justify-content-around'>
                  <ListGroupItemHeading>
                    EDUCATION
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {form.education}
                  </ListGroupItemText>
                </ListGroupItem>

                {/* experience*/}
                <ListGroupItem className='d-flex justify-content-around'>
                  <ListGroupItemHeading>
                    EXPERIENCE
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {form.experience}
                  </ListGroupItemText>
                </ListGroupItem>

                {/*dob:"",*/}
                <ListGroupItem className='d-flex justify-content-around'>
                  <ListGroupItemHeading>
                   DATE OF BIRTH
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {form.dob}
                  </ListGroupItemText>
                </ListGroupItem>

                {/* gender:"",*/}
                <ListGroupItem className='d-flex justify-content-around'>
                  <ListGroupItemHeading>
                    Gender
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {form.gender}
                  </ListGroupItemText>
                </ListGroupItem>

                {/* phonenumber : "",*/}
                <ListGroupItem className='d-flex justify-content-around'>
                  <ListGroupItemHeading>
                   PHONE NUMBER
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {form.phonenumber}
                  </ListGroupItemText>
                </ListGroupItem>

                {/*email : "",*/}
                <ListGroupItem className='d-flex justify-content-around'>
                  <ListGroupItemHeading>
                    EMAIL
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {form.email}
                  </ListGroupItemText>
                </ListGroupItem>

                {/*location:"",*/}
                <ListGroupItem className='d-flex justify-content-around'>
                  <ListGroupItemHeading>
                   LOCATION
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {form.location}
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  )
}
