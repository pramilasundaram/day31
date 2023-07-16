import React from 'react'
import Cards from "../cardhome/Card"
import Chart from '../charts/Chart'
import Hometable from '../hometable/Hometable'
export default function Home() {
  return (
    <div className="col-sm-9">
    {/**CARDS */}
    <Cards/>
    
  {/**charts */}
  <Chart/>
  
  {/**homeTables */}
  <Hometable/>
  </div>
  )
}
