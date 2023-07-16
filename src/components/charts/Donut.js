import React from 'react'
import Chart from "react-apexcharts";
export default function Donut() {
    const state = {
        options: {},
        series: [44, 55, 41, 17, 15],
        chartOptions: {
          labels: ["Apple", "Mango", "Orange", "Watermelon"]
        }
      };
    
      return (
        <div className="donut">
          <Chart
            options={state.options}
            series={state.series}
            type="donut"
            width="90%"
          />
        </div>
      );
}
