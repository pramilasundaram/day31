import React, { useState } from 'react'
import { Card } from "reactstrap"
import Calendar from 'react-calendar';
import Sidebar from '../../components/sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
export default function Calender() {
  const [value, onChange] = useState(new Date());
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
            <h1>CALENDER</h1>
            <Calendar onChange={onChange} value={value} />
          </Card>
        </div>
      </div>
    </div>
  )
}

