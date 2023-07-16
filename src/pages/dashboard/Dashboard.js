import React from 'react'
import "./Dashboard.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Home from '../../components/home/Home'
// import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";

export default function Dashboard() {
    return (
      <div className="row">       
      <Sidebar/> 
      <Home/>     
      </div>
  )
}
