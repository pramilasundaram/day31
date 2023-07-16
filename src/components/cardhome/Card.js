import React, { useContext } from 'react'
import "./Card.css"
import {Card,CardTitle,Button, CardBody, CardSubtitle} from "reactstrap"
import { useNavigate } from 'react-router-dom'
import { dataContext } from '../contextProvider/Contextprovider'
export default function Cards() {
  const {state}=useContext(dataContext)
  const image1=require("../assets/studenticon.png")
  const image2=require("../assets/teachericons.jpg")
  const nav=useNavigate();
  return (
    <div className="row g-0">
    <div className="col-sm-6 col-md-6">
      <Card
        body
        className="text-center"
        style={{
          width: "100%"
        }}
      >
    
      <CardBody>
      <img className="student_icon" src={image1} alt="" />
        <CardTitle tag="h4">
        students 
        </CardTitle>
        <CardSubtitle  tag="h3">{state.studentcount}</CardSubtitle>
        <Button className="Btn" onClick={()=>{nav("/createstudent")}}>ADD NEW STUDENT</Button>
        </CardBody>
        </Card>
    </div>
    <div className="col-sm-6 col-md-6">
      {" "}
      <Card
        body
        className="text-center"
        style={{
          width: "100%"
        }}
      >
      <CardBody>
      <img className="student_icon" src={image2} alt="" />
        <CardTitle tag="h4">
        Teachers
        </CardTitle>
        <CardSubtitle  tag="h3">{state.teachercount}</CardSubtitle>
        <Button className="Btn" onClick={()=>{nav("/createteacher")}}>ADD NEW TEACHER</Button>
        </CardBody>
        </Card>
    </div>
  </div>
  )
}
