import React, { useContext, useState }from 'react'
import { Row, Col, Button, Form, FormGroup, Input, Label, Card,CardHeader} from "reactstrap"
import "./Create.css"
import {v4 as uuidv4} from "uuid";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import Sidebar from '../../../components/sidebar/Sidebar';
import { dataContext } from '../../../components/contextProvider/Contextprovider';
import { CREATE_TEACHER } from '../../../components/contextProvider/Action.type';
export default function Createteacher() {
  const {dispatch}=useContext(dataContext)   
  const nav = useNavigate();
  const [form, setForm] = useState({
    id:"",
    email : "", 
    imageurl : "",
    phonenumber : "",      
    dob:"",      
    name:"", 
    department:"", 
    gender:"", 
    location:"",
    education:"",
    designation:"",
    experience:""
  });

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    const { email, imageurl, phonenumber,dob,education,designation,experience, name, department, gender, location } = form;
    if (name === "") {
      toast.error("fullname is required")
    } else if (department === "") {
      toast.error("year/department is required")
    } else if (dob === "") {
      toast.error("date of birth is required")
    } else if (gender === "") {
      toast.error("gender is required")
    } else if (email === "") {
      toast.error("email is required")    
    }else if (phonenumber === "") {
      toast.error("phonenumber is required")
    } else if (location === "") {
      toast.error("date of birth is required")
    } else if (imageurl === "") {
      toast.error("image url is required")
    }else if (education === "") {
      toast.error("education is required")
    }else if (designation === "") {
      toast.error("designation is required")
    }else if (experience === "") {
      toast.error("experience is required")
    }else {
      toast.success("registered successfully!!")
      const data={id:uuidv4(),
        email:form.email , 
         imageurl:form.imageurl,
         phonenumber:form.phonenumber,
         dob:form.dob, 
         mentorId:form.mentorId , 
         name:form.name, 
         department:form.department, 
         gender:form.gender, 
         location:form.location,
         education:form.education,
         designation:form.designation,
         experience:form.experience
       }
       dispatch({type:CREATE_TEACHER,payload:data})  
       setForm({...form,
        email : "", 
        imageurl : "",
        phonenumber : "",      
        dob:"",      
        name:"", 
        department:"", 
        gender:"", 
        location:"",
        education:"",
        designation:"",
        experience:""
      })
      nav(-1);
    }
  }
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
            }}
          >
            
            <CardHeader tag="h1">REGISTER TEACHER</CardHeader>
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

                  {/**department */}
                  <Col md={6}>
                  <FormGroup>
                    <Label for="department">
                    DEPARTMENT
                    </Label>
                    <Input
                      id="department"
                      name="department"
                      placeholder="eg:CSE"
                      type="text"
                      value={form.department}
                      onChange={handlechange}
                    />
                  </FormGroup>
                </Col>

                {/**designation */}
                <Col md={6}>
                <FormGroup>
                  <Label for="designation">
                  DESIGNATION
                  </Label>
                  <Input
                    id="designation"
                    name="designation"
                    placeholder=""
                    type="text"
                    value={form.designation}
                    onChange={handlechange}
                  />
                </FormGroup>
              </Col>
              {/**education */}
              <Col md={6}>
              <FormGroup>
                <Label for="education">
               EDUCATION
                </Label>
                <Input
                  id="education"
                  name="education"
                  placeholder=" educational qualification"
                  type="text"
                  value={form.education}
                  onChange={handlechange}
                />
              </FormGroup>
            </Col>
            {/**Experience*/}
            <Col md={6}>
            <FormGroup>
              <Label for="experience">
              EXPERIENCE
              </Label>
              <Input
                id="experience"
                name="experience"
                placeholder="experience"
                type="text"
                value={form.experience}
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
                        onChange={handlechange}
                      />
                      {' '}
                      <Label check>
                        Female
                      </Label>&nbsp;&nbsp;&nbsp;&nbsp;
                    </FormGroup>
                  </Form>
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
                      placeholder="DD/MM/YYYY"
                      type="date"
                      value={form.dob}
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

                 
                  

                </Row>
                <Button color="info" className='create_btn'>submit</Button>
              </Form>
              <ToastContainer position="top-center" />
            </Card>
        
        </div>
      </div>
    </div>
  )
}
