import React, { useContext, useState,useEffect} from 'react'
import "./Edit.css"
import Sidebar from '../../../components/sidebar/Sidebar';
import { Row, Col, Button, Form, FormGroup, Input, Label, Card, CardHeader } from "reactstrap"
import { useNavigate,useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { dataContext } from '../../../components/contextProvider/Contextprovider';
import { UPDATE_STUDENT } from '../../../components/contextProvider/Action.type';

export default function Editstudent() {
    const { id } = useParams();    
    const {state,dispatch}=useContext(dataContext)
    const nav = useNavigate();
    const [form, setForm] = useState({
          email : "", 
          imageurl : "",
          phonenumber : "",
          mentor : "",
          dob:"", 
          mentorId :"", 
          name:"", 
          department:"", 
          gender:"", 
          location:""
    });

useEffect(()=>{
  let index = state.student.findIndex((value) => value.id === id)
  setForm(state.student[index])
},[id,state])
   
  
    const handlechange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
    

    const handlesubmit = async (e) => {
      e.preventDefault();
      const { email, imageurl, phonenumber, mentor,dob, mentorId, name, department, gender, location } = form;
      if (name === "") {
        toast.error("fullname is required")
      }else if (department === "") {
        toast.error("year/department is required")
      }else if (dob === "") {
        toast.error("date of birth is required")
      }else if (gender === "") {
        toast.error("gender is required")
      } else if (email === "") {
        toast.error("email is required")
      }else if (phonenumber === "") {
        toast.error("phonenumber is required")
      } else if (location === "") {
        toast.error("date of birth is required")
      }else if (imageurl === "") {
        toast.error("image url is required")
      }else if (mentor === "") {
        toast.error("mentor is required")
      }else if (mentorId === "") {
        toast.error("mentorId is required")
      } else {
        toast.success("updated successfully !!")
        dispatch({type:UPDATE_STUDENT,payload:form})
          setForm({...form,           
          email : "", 
          imageurl : "",
          phonenumber : "",
          mentor : "",
          dob:"", 
          mentorId :"", 
          name:"", 
          department:"", 
          gender:"", 
          location:""
        })
        nav(-1)
      }
    }
  
    return (
      <div className="row">
        <Sidebar />
        <div className="col-sm-9">
          <div className="row g-0 ">        
            <Card
              body
              className="text-center"
              style={{
                width: "100%"
              }}
            >
            <CardHeader tag="h1">UPDATE STUDENT's DETAILS</CardHeader>
              <Button color="warning" onClick={() => { nav(-1) }} style={{ float: "left", width: "100px" }}>BACK</Button>
              <Form onSubmit={handlesubmit}>
                <Row>
                  {/**name */}
                  <Col md={6}>
                    <FormGroup>
                      <Label for="name">
                        FULL NAME
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="name"
                        type="text"
                        value={form.name}
                        onChange={handlechange}
                      />
                    </FormGroup>
                  </Col>
  
                  {/**year/department */}
                  <Col md={6}>
                    <FormGroup>
                      <Label for="department">
                       YEAR/DEPARTMENT
                      </Label>
                      <Input
                        id="department"
                        name="department"
                        placeholder="eg:2nd/CSE"
                        type="text"
                        value={form.department}
                        onChange={handlechange}
                      />
                    </FormGroup>
                  </Col>
  
                  {/**date of birth */}
                  <Col md={6}>
                    <FormGroup>
                      <Label for="dob">
                      DATE OF BIRTH
                      </Label>
                      <Input
                        id="dob"
                        name="dob"
                        placeholder="YYYY-MM-DD"
                        type="date"
                        value={form.dob}
                        onChange={handlechange}
                      />
                    </FormGroup>
                  </Col>
  
                  {/**gender */}
                  <Col md={6}>
                    <FormGroup>
                      <Label for="gender">
                       GENDER
                      </Label>
                    </FormGroup>
                    <Form className="d-flex justify-content-center">
                      <FormGroup>
                        <Input
                          name="gender"
                          type="radio"
                          value="male"
                          checked={form.gender==="male"?true:false}
                          onChange={handlechange}
                        />
                        {' '}
                        <Label check>
                          Male
                        </Label>&nbsp;&nbsp;&nbsp;&nbsp;
                      </FormGroup>
                      <FormGroup >
                        <Input
                          name="gender"
                          type="radio"
                          value="female"
                          checked={form.gender==="female"?true:false}
                          onChange={handlechange}
                        />
                        {' '}
                        <Label check>
                          Female
                        </Label>&nbsp;&nbsp;&nbsp;&nbsp;
                      </FormGroup>
                    </Form>
                  </Col>
  
                  {/**  IMAGE URL */}
                  <Col md={6}>
                    <FormGroup>
                      <Label for="imageurl">
                     IMAGE URL
                      </Label>
                      <Input
                        id="imageurl"
                        name="imageurl"
                        placeholder="Image url"
                        type="text"
                        value={form.imageurl}
                        onChange={handlechange}
                      />
                    </FormGroup>
                  </Col>
  
                  {/**phone */}
                  <Col md={6}>
                    <FormGroup>
                      <Label for="phonenumber">
                     PHONE
                      </Label>
                      <Input
                        id="phonenumber"
                        name="phonenumber"
                        placeholder="enter mobile number"
                        type="text"
                        value={form.phonenumber}
                        onChange={handlechange}
                      />
                    </FormGroup>
                  </Col>
  
                  {/**email */}
                  <Col md={6}>
                    <FormGroup>
                      <Label for="Email">
                       EMAIL
                      </Label>
                      <Input
                        id="Email"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                        value={form.email}
                        onChange={handlechange}
                      />
                    </FormGroup>
                  </Col>
  
                  {/**location */}
                  <Col md={6}>
                    <FormGroup>
                      <Label for="location">
                       LOCATION
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        placeholder="location"
                        type="text"
                        value={form.location}
                        onChange={handlechange}
                      />
                    </FormGroup>
                  </Col>
  
                  {/**Mentor */}
                  <Col md={6}>
                    <FormGroup>
                      <Label for="mentor">
                      MENTOR NAME
                      </Label>
                      <Input
                        id="mentor"
                        name="mentor"
                        placeholder="Enter your mentor name"
                        type="text"
                        value={form.mentor}
                        onChange={handlechange}
                      />
                    </FormGroup>
                  </Col>
  
                  {/**Mentor Id */}
                  <Col md={6}>
                    <FormGroup>
                      <Label for="mentorId">
                        MENTOR ID
                      </Label>
                      <Input
                        id="mentorId"
                        name="mentorId"
                        placeholder="mentorId"
                        type="text"
                        value={form.mentorId}
                        onChange={handlechange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Button color="info" className='Edit_btn'>SAVE</Button>              
              </Form>
            </Card>
            <ToastContainer position="top-center" />
          </div>
        </div>
      </div>
    )
  }
  