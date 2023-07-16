import React from 'react'
import Chart from "react-apexcharts";
export default function Bar() {
    const state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
          }
        },
        series: [
          {
            name: "admission %",
            data: [40, 45, 50, 49, 60, 70, 91]
          }
        ]
      };
      return (
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="90%"
          />
        </div>
      );
}
